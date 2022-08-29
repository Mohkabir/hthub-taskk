import React, { useState } from "react";
import Logo from "../assets/images/Logo.svg";
import HeroImg from "../assets/images/hero.svg";
import Logos from "../assets/images/Logos.png";
import vector1 from "../assets/images/vector1.png";
import menu from "../assets/images/menu.svg";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen)
  };
  return (
    <div>
      <img className="vector" src={vector1} alt="" />

      <div className="hero">
        <div className="wrapper">
          <nav>
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <img className="menuBar" onClick={handleMenu} src={menu} alt="" />

            <ul className={`${isOpen ? "openMenu" : "closeMenu"}`}>
              <li>Product</li>
              <li>Services</li>
              <li>About</li>
              <li className="login">Log In</li>
            </ul>
          </nav>
          <div>
            <div>
              <h1>
                Save time by building <span>fast with Boldo Template</span>{" "}
              </h1>
              <p>
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
              <div className="btn_wrapper">
                <button>Buy template</button>
                <button>Explore</button>
              </div>
            </div>
            <img src={HeroImg} alt="" />
          </div>
          <div className="logos">
            <img src={Logos} alt="Logos" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
