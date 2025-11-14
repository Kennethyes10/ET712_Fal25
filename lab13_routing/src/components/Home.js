import React from "react";
import '../App.css';
import aboutimg from '../images/about.jpg';
import contactimg from '../images/contact.png';

const Home = function() {
  return (
    <>
      <header className="header">
        <h1 className="headertitle">Welcome to React Routing</h1>
      </header>

      <main className="maincontainer">
        <div className="cardimg">
          <img src={aboutimg}/>
        </div>
        <div className="cardimg">
          <img src={contactimg} />
        </div>
      </main>
    </>
  );
};

export default Home;



