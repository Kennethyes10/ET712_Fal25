import React from "react";
import Card from "../components/Card";

const jerseys = [
  { id: 3001, title: "Brazil Neymar Jersey", price: 140, image: "https://arenajerseys.com/wp-content/uploads/2022/09/download-50.jpg" },
  { id: 3002, title: "Portugal Ronaldo Jersey", price: 165, image: "https://soccerwearhouse.com/cdn/shop/files/Portugal_2025_Home_Jersey_by_PUMA_-_Cristiano_Ronaldo_5000x.jpg?v=1736466474" },
  { id: 3003, title: "Argentina Messi Jersey", price: 165, image: "https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/2/5/2519e606525f7438a5e1809f8a64aba73997120051b47d3c5164142d13f0c40c.jpeg" },
  { id: 3004, title: "Real Madrid Jersey", price: 160, image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/f24d1c69aa8a42a79b70aa983d5e8ec3_faec/Real_Madrid_25-26_Home_Authentic_Jersey_White_JV5918_db01_laydown.tiff.jpg" },
  { id: 3005, title: "FC Barcelona Jersey", price: 155, image: "https://d2j6dbq0eux0bg.cloudfront.net/images/29518064/4708351089.png" },
  { id: 3006, title: "Atletico Madrid Jersey", price: 150, image: "https://www.tudnfanshop.com/cdn/shop/files/5O0qb6q1_SWY.png?v=1755699201&width=1500" },
  { id: 3007, title: "Manchester United Jersey", price: 125, image: "https://images.footballfanatics.com/manchester-united/mens-adidas-red-manchester-united-home-2025/26-authentic-player-jersey_ss5_p-203107426+pv-2+u-inl7k6bwwhswxspdosah+v-7hitjgnz7aqpbbwo8zpf.jpg?_hv=2&w=1018" },
  { id: 3008, title: "Liverpool Jersey", price: 120, image: "https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/1/4/146b6c5560f7ce49b1168ac06b6b2605d31527c7ed4915183b8c5552a786f886.jpeg" },
  { id: 3009, title: "Manchester City Jersey", price: 105, image: "https://static1.cdn-subsidesports.com/2/media/catalog/product/cache/38d4094f49a5c2931b615f53f1250097/2/9/29e2bba2b0381819e07713889981d09a36aeb022ff65e104df4d0eadd52a7b61.jpeg" },
  { id: 3010, title: "AC Milan Jersey", price: 115, image: "https://cdn.sportshop.com/catalog/product/1500/1500/1/8/187050_1.jpg" },
  { id: 3011, title: "Inter Milan Jersey", price: 95, image: "https://www.tudnfanshop.com/cdn/shop/files/zNem0fsN_LKC.png?v=1755699260&width=1500" },
  { id: 3012, title: "Juventus Jersey", price: 120, image: "https://store.juventus.com/images/juventus/products/large/JU25D01.webp" },
];

function JerseysPage({ addToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Jerseys</h2>
      <div className="card-container">
        {jerseys.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            description="Official soccer jersey"
            price={item.price}
            onAddToCart={addToCart}
        
          />
        ))}
      </div>
    </div>
  );
}

export default JerseysPage;


