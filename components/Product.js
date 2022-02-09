import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slice/basketSlice";

let MAX_RATING = 5;
let MIN_RATING = 1;
function Product({ id, title, description, image, price, category }) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemsToBasket = () => {
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
  return (
    <div className="relative flex flex-col bg-white m-5 p-10 z-30 ">
      <div className="absolute top-2 right-2 text-sm italic text-gray-400">
        {category}
      </div>
      <div>
        <img className="w-44 object-contain mx-auto" src={image} alt="" />
      </div>
      <div className="font-bold text-md mt-2">{title}</div>
      <div className="flex text-yellow-500 mt-2">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>
      <div className="text-sm line-clamp-2 mt-2">{description}</div>

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
      <button onClick={addItemsToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
