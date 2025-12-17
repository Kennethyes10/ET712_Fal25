import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartItems = [] }) {
  const [menuOpen, setMenuOpen] = useState(false); // menu toggle
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/">Fut Champs Store</Link> 

       
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ fontSize: "20px", cursor: "pointer" }}
        >
          ☰
        </button>
      </div>

      
      {menuOpen && (
        <div style={{ marginTop: "10px", display: "flex", flexDirection: "column", gap: "5px" }}>
          <Link to="/shop/shoes">Shoes ⚽</Link>
          <Link to="/shop/balls">Balls ⚽</Link>
          <Link to="/shop/jerseys">Jerseys 👕</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart ({totalItems})</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;


