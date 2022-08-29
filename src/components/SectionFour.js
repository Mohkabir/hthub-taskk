import React from "react";
import Image7 from "../assets/images/Image7.svg";
import caretdown from "../assets/images/caretdown.png";

const SectionFour = () => {
  return (
    <div className="sectionFour wrapper container">
      <div>
        <img src={Image7} alt="Image7" />
      </div>
      <div className="flex">
        <h3>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h3>
        <ul>
          <li>
            We connect our customers with the best?{" "}
            <img src={caretdown} alt="" />
          </li>
          <li>
            Android research & development rockstar?{" "}
            <img src={caretdown} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionFour;
