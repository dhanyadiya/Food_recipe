import React from "react";
import "./Header.css";
import logo from "../assets/logo.svg";
import { FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      {/* Left Section */}
      <div className="header-left">
        <div className="logo-section">
          <img src={logo} alt="Cookify Logo" className="logo" />
          <h1 className="tagline">Turn your ingredients into delicious meals</h1>
        </div>
        
      </div>

      {/* Right Section */}
      <div className="header-right">
        <div className="info-item">
          <MdLocationOn className="info-icon" />
          <span>Bengaluru, India</span>
        </div>
        <div className="info-item">
          <MdEmail className="info-icon" />
          <span>cookify@gmail.com</span>
        </div>
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
