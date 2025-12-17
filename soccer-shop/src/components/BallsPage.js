import React from "react";
import Card from "../components/Card";

const balls = [
  { id: 1001, title: "Nike official Ball", price: 60, image: "https://www.soccerlocker.com/prodimages/20157-default-L.jpg" },
  { id: 1002, title: "Adidas official Ball", price: 70, image: "https://soccerpost.com/cdn/shop/files/IA0958.png?v=1689875380" },
  { id: 1003, title: "Puma official Ball", price: 50, image: "https://www.rockvillesoccer.com/cdn/shop/files/www.imagehandler_52e56aac-f301-4120-b335-144fecf7aa35_2000x.webp?v=1721858516" },
  { id: 1004, title: "La Liga official Ball", price: 90, image: "https://images.prodirectsport.com/ProductImages/Main/1027133_Main_1990991.jpg" },
  { id: 1005, title: "Premier League official Ball", price: 80, image: "https://cdn.shoplightspeed.com/shops/611228/files/66384553/nike-premier-league-academy-plus-ball-24-25-white.jpg" },
  { id: 1006, title: "Serie A official Ball", price: 70, image: "https://images.prodirectsport.com/ProductImages/Main/1008772_Main_1815458.jpg" },
  { id: 1007, title: "Bundesliga official Ball", price: 60, image: "https://us.select-sport.com/cdn/shop/files/102011_white-bue-red_bundesliga_brillant_aps_v25_main.jpg?v=1753808974&width=2048" },
  { id: 1008, title: "MLS official Ball", price: 50, image: "https://images.prodirectsport.com/ProductImages/Main/1027340_Main_1915236.jpg" },
  { id: 1009, title: "Liga Portugal official Ball", price: 40, image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/084304/01/fnd/PNA/fmt/png/Liga-Portugal-Football-(FIFA%C2%AE-Quality-Pro)" },
  { id: 1010, title: "UEFA Champions League Ball", price: 120, image: "https://images.prodirectsport.com/ProductImages/Main/1037863_Main_2014347.jpg" },
  { id: 1011, title: "Europa League Ball", price: 110, image: "https://clubcompetitions-shop.com/cdn/shop/files/1_3ff8f377-22aa-4942-a014-402dd1167e23_1200x.png" },
  { id: 1012, title: "Conference League Ball", price: 90, image: "https://clubcompetitions-shop.com/cdn/shop/files/1_ab003125-4695-4089-a6d4-88c97aa29dcf_1200x.png" },
];

function BallsPage({ addToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Soccer Balls</h2>
      <div className="card-container">
        {balls.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            description="Professional soccer ball"
            price={item.price}
            onAddToCart={addToCart}
       
            />
        ))}
      </div>
    </div>
  );
}

export default BallsPage;



