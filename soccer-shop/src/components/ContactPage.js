function ContactPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('https://img.freepik.com/free-photo/night-view-football-stadium_23-2151976043.jpg?semt=ais_hybrid&w=740&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          width: "400px",
        }}
      >
        <h1>Contact Us</h1>
        <p>Email: supportkenneth10@soccershop.com</p>
        <p>Phone: +1 (347) 713-3287</p>
        <p>Address: 122 Flushing St, Football City, USA</p>
      </div>
    </div>
  );
}

export default ContactPage;




