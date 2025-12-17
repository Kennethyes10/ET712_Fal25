import { useState, useEffect } from "react";

function HomePage() {
  const soccerImages = [
    "https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/03/santiago-bernabeu-1.jpg",
    "https://data2.nssmag.com/images/galleries/16732/borussia-dortmund-stadium-work.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/3e/59/34/stadio-allianz.jpg?w=1200&h=-1&s=1",
    "https://img.fcbayern.com/image/upload/f_auto/q_auto/t_cms-16x9-seo/v1601462176/cms/public/images/museum/besucherinformationen/innenraum_spieltag_choreo.jpg",
    "https://thepeoplesperson.com/wp-content/uploads/2025/03/old-trafford-stadium-night-centre.jpg"
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % soccerImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [soccerImages.length]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh", 
        backgroundImage: `url(${soccerImages[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "2px 2px 4px #000",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>Welcome to Fut Champs Store!</h1>
      <p style={{ fontSize: "22px", textAlign: "center", maxWidth: "700px" }}>
        Find the best soccer gear for every player! Explore our collection of Shoes  👟, Balls ⚽, and Jerseys 👕.
      </p>
    </div>
  );
}

export default HomePage;


