import React from "react";
import image10 from "../assets/images/image10.png";
import image8 from "../assets/images/image8.png";
import image9 from "../assets/images/image9.png";
import profile4 from "../assets/images/profile4.png";
import profile5 from "../assets/images/profile5.png";
import profile6 from "../assets/images/profile6.png";


const SectionFive = () => {
  const secData = [
    {
      image: image10,
      body: "Pitch termsheet backing validation focus release.",
      name: "Chandler Bing",
      profile: profile4,
    },
    {
      image: image8,
      body: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      name: "Rachel Green",
      profile: profile5,
    },
    {
      image: image9,
      body: "Beta prototype sales iPad gen-z marketing network effects value proposition",
      name: "Monica Geller",
      profile: profile6,
    },
  ];
    
  return (
    <div className="sectionFive container wrapper">
      <div className="head">
        <span>Our Blog</span>
        <h1>Value proposition accelerator product management venture</h1>
      </div>
      <div className="cardWrapper">
        {secData.map((card, idx) => (
          <div key={idx}>
            <div>
              <img src={card.image} alt="card image" />
            </div>
            <span>
              <strong>Category</strong> <span>November 22, 2021</span>
            </span>
            {/* <h3>{card.heading}</h3> */}
            <p>{card.body}</p>
            <div className="profile">
              <div>
                <img src={card.profile} alt="card image" />
              </div>
              <div>
                <span>{card.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button>Load more</button>
    </div>
  );
};

export default SectionFive;
