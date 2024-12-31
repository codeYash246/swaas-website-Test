import React, { useState } from 'react';
import './about.css'; 

const About = () => {
  


  return (
    <>





<div className="about-container">
<div className="heading">
  <img src="/images/grid.png" alt="Grid" className="grid-image" />
  <h1>ABOUT US</h1>
  <img src="/images/star.png" alt="Star" className="star-left" />
  <img src="/images/star.png" alt="Star" className="star-right" />
</div>


  <img
    src="/images/leaf.png"
    alt="Left Leaf"
    className="leaf-left-circle"
  />

  {/* Right Leaf Below Navbar */}
  <img
    src="/images/leaf.png"
    alt="Right Leaf"
    className="leaf-right-top"
  />
</div>



  <div className="about-container">
      {/* Left Leaf */}
      <div className="design-left">
        <img
          src="/images/design.png"
          alt="Left design"
          className="design-left"
        />
      </div>

      {/* Right Leaf */}
      <div className="design-right">
        <img
          src="/images/design.png"
          alt="Right design"
          className="design-right"
        />
      </div>
    </div>
    </>
  );
}

export default About;
