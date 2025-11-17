

import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const products = [
    { id: 1, name: "Headphones", price: 39.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop", availability: "In Stock" },
    { id: 2, name: "Keyboard", price: 49.99, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3", availability: "Out of Stock" },
    { id: 3, name: "Mouse", price: 49.99, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop", availability: "In Stock" },
    { id: 4, name: "Charger", price: 39.99, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1974&auto=format&fit=crop", availability: "In Stock" },
    { id: 5, name: "Laptop", price: 400.99, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop", availability: "Out of Stock" },
    { id: 6, name: "Speaker", price: 69.99, image: "https://images.unsplash.com/photo-1643385958950-8f0b8852171a?q=80&w=2054&auto=format&fit=crop", availability: "In Stock" },
    { id: 7, name: "Smartwatch", price: 80.99, image: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnR3YXRjaHxlbnwwfHwwfHx8MA%3D%3D", availability: "In Stock" },
    { id: 8, name: "Camera", price: 50.99, image: "https://plus.unsplash.com/premium_photo-1663134149019-284682ece04c?q=80&w=2070&auto=format&fit=crop", availability: "Out of Stock" },
    { id: 9, name: "Desk Lamp", price: 54.99, image: "https://plus.unsplash.com/premium_photo-1681412205381-c0e9681bcbb8?q=80&w=987&auto=format&fit=crop", availability: "In Stock" },
    { id: 10, name: "SSD", price: 54.99, image: "https://plus.unsplash.com/premium_photo-1721133221361-4f2b2af3b6fe?w=900&auto=format&fit=crop&q=60", availability: "In Stock" }
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          availability={product.availability}
        />
      ))}
    </div>
  );
};

export default ProductList;

