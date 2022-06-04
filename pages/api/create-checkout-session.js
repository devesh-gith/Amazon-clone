const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const authorization = async (req, res) => {
  const { items, email } = req.body;

  console.log(items);

  const transformItems = items.map((item) => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: "usd",
      product_data: {
        name: item.title,
        images: [item.image],
      },
      unit_amount: item.price * 100,
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: transformItems,
    shipping_rates: ["shr_1KQGrHSFhyysZt52m6vHUffG"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};

export default authorization;
