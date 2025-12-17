import React, { useState } from "react";
import ModalWindow from "./ModalWindow";




function Card({ id, title, image, description, price, onAddToCart }) {
const [isOpen, setIsOpen] = useState(false);
const [quantity, setQuantity] = useState(1);




const handleAddToCart = () => {
  onAddToCart({
   id,
   title,
   image,
   price,
   quantity,
  });
  setQuantity(1);
};




return (
  <div
    style={{
      border: "1px solid #ccc",
      padding: "15px",
      borderRadius: "10px",
      width: "250px",
      textAlign: "center",
      backgroundColor: "#fff",
      margin: "10px",
    }}
  >
    <h3>{title}</h3>




  
    <div
      style={{
        width: "100%",
        height: "250px", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
      }}
      onClick={() => setIsOpen(true)}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </div>




    <p>{description}</p>
    <p><strong>Price: ${price}</strong></p>




  
    <div style={{ marginBottom: "10px" }}>
      <label>
        Quantity:
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          style={{
            width: "60px",
            marginLeft: "5px",
            textAlign: "center"
          }}
        />
      </label>
    </div>




  
    <button
      onClick={handleAddToCart}
      style={{ marginRight: "8px" }}
    >
      Add to Cart
    </button>




    <button onClick={() => setIsOpen(true)}>
      View Details
    </button>




    <ModalWindow
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title={title}
      image={image}
      description={description}
    />
  </div>
);
}




export default Card;


