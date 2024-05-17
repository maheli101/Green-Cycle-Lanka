import React, { useState } from "react";
import "./Header.css";
import profile4 from "../assets/profile4.png";

function Header() {
  const [navVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  return (
    <header>
      <div className="header">
        <h1>Green Cycle Lanka</h1>
        <span className="menu-toggle" onClick={toggleNav}>
          &#9776;
        </span>
      </div>
      <div className={`nav ${navVisible ? "show" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Buyer</a>
        <a href="#">Supplier</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
        <a href="#">About Us</a>
        <a href="#"><img src={profile4} alt="Profile" className="profile4" /></a>
      </div>
    </header>
  );
}

export default Header;