import React from "react";

const ProductItem = ({ name, price, image, availability }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-img" />
      <h2>{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Status: {availability}</p>
    </div>
  );
};

export default ProductItem;






