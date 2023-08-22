import React from "react";

export default function ProductBasketCard({ id, img, name, inventory, price }) {
  return (
    <div className="grid-container grid grid-cols-4 grid-rows-1 gap-4 place-items-center text-white font-light">
      <div className="product-img ">
        <img src={img} className="w-14" />
      </div>
      <div className="product-name text-sm text-center">{name}</div>
      <div className="product-price text-sm text-center">${price}</div>
      <div className="product-inventory text-sm text-center">{inventory}</div>
    </div>
  );
}
