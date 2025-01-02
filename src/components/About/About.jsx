import React, { useState } from 'react';
import './about.css'; 

const About = () => {
  


  return (
    <>

<div className="about-container">
<div className="heading">
  <img src="/images/grid.png" alt="Grid" className="grid-image" />
  <h1> ABOUT US </h1>
  <img src="/images/star.png" alt="Star" className="star-left" />
  <img src="/images/star.png" alt="Star" className="star-right" />
</div>

 {/* New Section with Circle and Text */}
 <div className="circle-text-container">
          <div className="circle"></div>
          </div>

          <div className="text-right">
            <h2>OUR VISION</h2>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.
            </p>
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



  <div className="about-container1">
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
