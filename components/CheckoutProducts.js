import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slice/basketSlice";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import Image from "next/image";
function CheckoutProducts({
  id,
  title,
  description,
  image,
  category,
  price,
  hasPrime,
  rating,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      description,
      image,
      price,
      hasPrime,
      category,
      rating,
    };
    dispatch(addToBasket(product));

    console.log(product);
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} width={250} height={150} objectFit="contain" />

      <div className="col-span-3 mx-5 space-y-2">
        <div className="font-bold text-md ">{title}</div>
        <div className="flex text-yellow-500">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5" />
            ))}
        </div>

        <div className="text-sm line-clamp-2">{description}</div>

        <div className="text-sm mt-2 font-bold">
          <Currency quantity={price} currency="GBP" />
        </div>

        <div>
          {hasPrime && (
            <div className=" flex items-center space-x-2">
              <img
                className="w-10"
                src="https://links.papareact.com/fdw"
                alt=""
              />
              <p className="text-xs font-bold">Free Next-day Delivery</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-2 justify-self-end my-auto ">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove Item
        </button>
      </div>
    </div>
  );
}

export default CheckoutProducts;
