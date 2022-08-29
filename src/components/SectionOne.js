import React from "react";
import arrowRight from "../assets/images/arrow-right.svg";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";



const SectionOne = () => {
  const secData = [
    {
      image: image1,
      heading: "Cool feature title",
      body: "Learning curve network effects return on investment.",
    },
    {
      image: image2,
      heading: "Even cooler feature",
      body: "Learning curve network effects return on investment.",
    },
    {
      image: image3,
      heading: "Cool feature title",
      body: "Learning curve network effects return on investment.",
    },
  ];
  return (
    <div className="sectionOne container wrapper">
      <div className="head">
        <span>Our Services</span>
        <h1>Handshake infographic mass market crowdfunding iteration.</h1>
      </div>
      <div className="cardWrapper">
        {secData.map((card, idx) => (
          <div key={idx}>
            <div>
              <img src={card.image} alt="card image" />
            </div>
            <h3>{card.heading}</h3>
            <p>{card.body}</p>
            <button>
              <span>Explore page</span>
              <img src={arrowRight} alt="arrowRight" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionOne;
