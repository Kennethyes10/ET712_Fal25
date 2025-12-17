import React from "react";

function ModalWindow({ isOpen, onClose, title, image, description }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2>{title}</h2>

        <img
          src={image}
          alt={title}
          style={{ width: "100%", borderRadius: "8px" }}
        />

        <p>{description}</p>

        <button
          onClick={onClose}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#333",
            color: "white",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;




