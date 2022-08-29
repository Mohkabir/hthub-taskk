import React from "react";
import profile1 from "../assets/images/profile1.png";
import profile2 from "../assets/images/profile2.png";
import profile3 from "../assets/images/profile3.png";
import rightArrow from "../assets/images/rightArrow.svg";
import leftArrow from "../assets/images/leftArrow.svg";



const SectionThree = () => {
  const secData = [
    {
      profile: profile1,
      text: '"Buyer buzz partner network disruptive non-disclosure agreement business"',
      name: "Albus Dumbledore",
      title: "Manager @ Howarts",
    },
    {
      profile: profile2,
      text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      name: "Severus Snape",
      title: "Manager @ Slytherin",
    },
    {
      profile: profile3,
      text: "“Release facebook responsive web design business model canvas seed money monetization.”",
      name: "Harry Potter",
      title: "Team Leader @ Gryffindor",
    },
  ];

  return (
    <div className="sectionThree ">
      <div className="wrapper container">
        <div className="head">
          <h1>An enterprise template to ramp up your company website</h1>
          <div>
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
          </div>
        </div>
        <div className="cardWrapper">
          {secData.map((card, idx) => (
            <div key={idx} className="card">
              <div>
                <h3>{card.text}</h3>
                <div className="profile">
                  <div>
                    <img src={card.profile} alt="card image" />
                  </div>
                  <div>
                    <h4>{card.name}</h4>
                    <span>{card.title}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
