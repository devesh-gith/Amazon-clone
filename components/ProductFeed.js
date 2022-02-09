import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:-mt-52">
      {products
        .slice(0, 4)
        .map(({ id, title, description, image, price, category }) => (
          <Product
            key={id}
            id={id}
            title={title}
            image={image}
            category={category}
            price={price}
            description={description}
          />
        ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, description, image, price, category }) => (
            <Product
              key={id}
              id={id}
              title={title}
              image={image}
              category={category}
              price={price}
              description={description}
            />
          ))}
      </div>
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      {products
        .slice(4, products.length)
        .map(({ id, title, description, image, price, category }) => (
          <Product
            key={id}
            id={id}
            title={title}
            image={image}
            category={category}
            price={price}
            description={description}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
