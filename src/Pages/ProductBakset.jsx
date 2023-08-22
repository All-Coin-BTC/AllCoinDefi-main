import React from "react";
import { dummyProducts } from "../data/dummyData";
import ProductBasketCard from "../Components/ProductBasketCard";
const data = dummyProducts;
export default function ProductBakset() {
  return (
    <div className="product-basket-page-container">
      <div className="products-title text-gray-400 text-center">
        Product Basket
      </div>
      <div className="products-container mx-4 px-6 pb-4 rounded-2xl">
        <div className="column-headers grid grid-cols-4 grid-rows-1 gap-4 place-items-center mt-12 text-gray-300">
          <div className="prod-img text-sm pt-4">Image</div>
          <div className="prod-name text-sm pt-4">Name</div>
          <div className="prod-price text-sm pt-4">Price</div>
          <div className="prod-inventory text-sm pt-4">Inventory</div>
        </div>
        {data.map((item) => (
          <div className="mt-4" key={item.id}>
            <ProductBasketCard
              id={item.id}
              img={item.img}
              name={item.name}
              inventory={item.inventory}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
