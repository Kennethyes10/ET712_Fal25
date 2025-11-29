import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // ONLY import Routes, Route
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.find((product) => product.id === item.id)) return;
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </>
  );
}

export default App;


