import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Currency from "react-currency-formatter";
import FooterEnd from "../components/FooterEnd";
import axios from "axios";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slice/basketSlice";
import CheckoutProducts from "../components/CheckoutProducts";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.stripe_public_key);

function checkout() {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const checkoutSessionItems = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user?.email,
    });

    const result = stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };
  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="md:flex max-w-screen-2xl mx-auto p-1">
        <div className="flex-grow shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            alt="img"
            height={250}
            width={1050}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white ">
            <h1 className="text-2xl border-b pb-4 font-bold">
              {items.length === 0
                ? "Your Amazon Basket is Empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProducts
                key={i}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                category={item.category}
                hasPrime={item.hasPrime}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-md p-10">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">
                  <Currency quantity={total} currency="GBP" />
                </span>
              </h2>

              <button
                role="link"
                onClick={checkoutSessionItems}
                disabled={session === null}
                className={`button mt-2 ${
                  session === null &&
                  "from-gray-300 to-gray-500 border-gray-300 text-gray-300 cursor-not-allowed"
                } `}
              >
                {session !== null
                  ? "Proceed to checkout"
                  : "sign In to checkout"}
              </button>
            </>
          )}
        </div>
      </main>

      {/* <div className="">
        <Footer />
      </div>
      <div className="">
        <FooterEnd />
      </div> */}
    </div>
  );
}

export default checkout;
