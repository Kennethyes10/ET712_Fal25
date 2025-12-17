import React from "react";
import Card from "../components/Card";


const shoes = [
 { id: 2001, title: "Nike Soccer Shoes", price: 120, image: "https://images.prodirectsport.com/ProductImages/Main/1029089_Main_1902609.jpg" },
 { id: 2002, title: "Adidas Soccer Shoes", price: 140, image: "https://images.prodirectsport.com/ProductImages/Main/1018944_Main_1855560.jpg" },
 { id: 2003, title: "Puma Soccer Shoes", price: 120, image: "https://images.prodirectsport.com/ProductImages/Main/1001714_Main_Thumb_1629908.jpg" },
 { id: 2004, title: "Nike Phantom Shoes", price: 140, image: "https://images.prodirectsport.com/ProductImages/Main/1001492_Main_Thumb_1718777.jpg" },
 { id: 2005, title: "Adidas Predator Shoes", price: 100, image: "https://images.prodirectsport.com/ProductImages/Main/1001761_Main_1706431.jpg" },
 { id: 2006, title: "Puma Ultra Shoes", price: 120, image: "https://images.prodirectsport.com/ProductImages/Main/1001714_Main_Thumb_1629908.jpg" },
 { id: 2007, title: "Nike Tiempo Legend Shoes", price: 160, image: "https://images.prodirectsport.com/ProductImages/Main/1001513_Main_Thumb_1711662.jpg" },
 { id: 2008, title: "Adidas F50 Shoes", price: 190, image: "https://assets.adidas.com/images/w_600,f_auto,q_auto/91f142e473404e57bc06ace8ab1101c5_9366/F50_Elite_Firm_Ground_Cleats_Purple_JH7615_HM1.jpg" },
 { id: 2009, title: "Puma Future Shoes", price: 125, image: "https://images.prodirectsport.com/ProductImages/Main/1011707_Main_1747861.jpg" },
 { id: 2010, title: "Nike Mercurial Shoes", price: 170, image: "https://images.prodirectsport.com/ProductImages/Main/1016233_Main_1812381.jpg" },
 { id: 2011, title: "Adidas Copa Shoes", price: 110, image: "https://images.prodirectsport.com/ProductImages/Main/1018944_Main_1855560.jpg" },
 { id: 2012, title: "Puma King Shoes", price: 200, image: "https://images.prodirectsport.com/ProductImages/Main/205921_Main_Thumb_0522722.jpg" },
];


function ShoesPage({ addToCart }) {
 return (



   <div style={{ padding: "20px" }}>
     <h2>Shoes</h2>


     <div className="card-container">
  

       {shoes.map((item) => (
         <Card
           key={item.id}
           id={item.id}
           title={item.title}
           image={item.image}
           description="High-quality soccer shoe"
           price={item.price}
           onAddToCart={addToCart}
         



         />
       ))}
     </div>
   </div>
 );
}


export default ShoesPage;
