import React from "react";

function ProductList({ addToCart }) {
  const products = [
    { id: 1, name: "Keyboard", price: 50 },
    { id: 2, name: "Computer", price: 800 },
    { id: 3, name: "Wireless Mouse", price: 90 }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            marginBottom: "10px",
            width: "300px"
          }}
        >
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


