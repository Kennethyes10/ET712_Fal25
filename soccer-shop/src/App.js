import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";


import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ShoesPage from "./components/ShoesPage";
import BallsPage from "./components/BallsPage";
import JerseysPage from "./components/JerseysPage";
import CartPage from "./components/CartPage";
import ContactPage from "./components/ContactPage";
import './App.css'


function App() {
 const [cartItems, setCartItems] = useState([]);


 // Gonna add product to cart
 const addToCart = (product) => {
   setCartItems((prevCart) => {
     const existingItem = prevCart.find(item => item.id === product.id);


     if (existingItem) {
       // Gonna increase quantity if item already exists
       return prevCart.map(item =>
         item.id === product.id
           ? { ...item, quantity: item.quantity + product.quantity }
           : item
       );
     } else {
       // Gonna add new item
       return [...prevCart, product];
     }
   });
 };


 // Gonna remove item from cart
 const removeFromCart = (id) => {
   setCartItems((prevCart) => prevCart.filter(item => item.id !== id));
 };


 return (
   <Router>
     <Navbar cartItems={cartItems} />


     <Routes>
       <Route path="/" element={<HomePage />} />


       <Route
         path="/shop/shoes"
         element={<ShoesPage addToCart={addToCart} />}
       />


       <Route
         path="/shop/balls"
         element={<BallsPage addToCart={addToCart} />}
       />


       <Route
         path="/shop/jerseys"
         element={<JerseysPage addToCart={addToCart} />}
       />


       <Route
         path="/cart"
         element={
           <CartPage
             cartItems={cartItems}
             setCartItems={setCartItems}
             removeFromCart={removeFromCart}
           />
         }
       />


       <Route path="/contact" element={<ContactPage />} />
     </Routes>
   </Router>
 );
}


export default App;







