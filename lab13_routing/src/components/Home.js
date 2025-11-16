import React from "react";
import { Link } from "react-router-dom";
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
        
        {/* About card */}
        <div className="cardimg">
          <Link to="/about">
            <img src={aboutimg} alt="About" />
          </Link>
        </div>

        {/* Contact card */}
        <div className="cardimg">
          <Link to="/contact">
            <img src={contactimg} alt="Contact" />
          </Link>
        </div>

      </main>
    </>
  );
};

export default Home;

