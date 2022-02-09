import { buffer } from "micro";
import * as admin from "firebase-admin";

// Service a connect to FIREBASE from the backend
const serviceAccount = require("../../permission.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const fulFillOrders = async (session) => {
  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      //   images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: order ${session.id} has been add to DB`);
    });
};

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const endservicepoint = process.env.STRIPE_SIGNING_KEY;

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const playload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(playload, sig, endservicepoint);
    } catch (error) {
      console.log(error.message);
      return res.status(400).send(`Error: ${error.message}`);
    }
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      return fulFillOrders(session)
        .then(() => res.status(200))
        .catch((err) => {
          console.log(err.message);
          res.status(400).send(`webhook Error: ${err.message}`);
        });
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
