import React from "react";
import "./home.css";
import home from "../assets/homeback.svg";
import { useNavigate } from 'react-router-dom';
const Home = () => {
   const navigate = useNavigate();

  const handleDiscoverClick = () => {
    navigate('/getrecipe');
  };
  return (
    <section className="home">
    
        <img src={home} alt="Cookify Background" className="Home-bg" />
          <div className="home-content">
        <p className="home-text">
         Welcome to Cookify, your smart recipe companion!</p>
         <p className="hometag">Start your cooking journey today — search, cook, and enjoy!</p>
        <button className="home-btn" onClick={handleDiscoverClick}>Discover Recipes</button>
      </div>
    </section>
  );
};

export default Home;
