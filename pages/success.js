import React from "react";
import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-md mx-auto space-y-2">
        <div className="mb-4 p-3 bg-white">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="text-green-600 h-10" />
            <h1 className="text-2xl font-bold">
              Thank you, Your Order has been confirmed!
            </h1>
          </div>
          <div className="mt-4">
            <h1 className="text-sm font-semibold">
              Thank for shopping with us. We'll send a confirmation once your
              order has been shipped, if you like to check the status of your
              order's please check the link the link below
            </h1>
          </div>
          <button
            onClick={() => router.push("/")}
            className="button mt-8 w-full"
          >
            return to home
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;
