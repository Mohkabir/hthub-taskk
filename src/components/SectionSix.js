import React from 'react'
import vector2 from "../assets/images/vector2.png";

const SectionSix = () => {
  return (
    <div className="sectionSix wrapper">
      <div className="wrap">
        <img className='vector2' src={vector2} alt="" />
        <h1>An enterprise template to ramp up your company website</h1>
        <div>
          <input type="text" placeholder="Your email address" />
          <button> Start now</button>
        </div>
      </div>
    </div>
  );
}

export default SectionSix