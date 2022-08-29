import React from 'react'
import Logo2 from "../assets/images/Logo2.svg";

const Footer = () => {
    return (
      <footer className="wrapper">
        <div>
          <div>
            <div>
              <img src={Logo2} alt="" />
              <p>
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </p>
            </div>
          </div>
          <div>
            <h4>Landings</h4>
            <ul>
              <li>Home </li>
              <li>Products</li>
              <li>Services</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>Home </li>
              <li>
                Careers <span className="green">Hiring!</span>
              </li>
              <li>Services</li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>Blog </li>
              <li>Products</li>
              <li>Services</li>
            </ul>
          </div>
        </div>
        <p>All rights reserved.</p>
      </footer>
    );
}


export default Footer