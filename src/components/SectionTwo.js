import React from "react";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import checked from "../assets/images/checked.svg";
import icon1 from "../assets/images/icon1.svg";
import icon2 from "../assets/images/icon2.svg";
import icon3 from "../assets/images/icon3.svg";



const SectionTwo = () => {
    return (
      <div className="sectionTwo container wrapper">
        <div className="flex">
          <div>
            <img src={image4} alt="image4" />
          </div>
          <div>
            <h2>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <ul>
              <li>
                <img src={checked} alt="checked" /> We connect our customers
                with the best.
              </li>
              <li>
                <img src={checked} alt="checked" />
                Advisor success customer launch party.
              </li>
              <li>
                <img src={checked} alt="checked" />
                Business-to-consumer long tail.
              </li>
            </ul>
            <button>Start now</button>
          </div>
        </div>
        <div className="flex">
          <div>
            <h2>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <ul>
              <li className="active">
                <img src={icon1} alt="icon1" /> We connect our customers with
                the best.
              </li>
              <li>
                <img src={icon2} alt="icon2" />
                Advisor success customer launch party.
              </li>
              <li>
                <img src={icon3} alt="icon3" />
                Business-to-consumer long tail.
              </li>
            </ul>
          </div>
          <div>
            <img src={image5} alt="image5" />
          </div>
        </div>
      </div>
    );
};

export default SectionTwo;
