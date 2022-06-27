import React from 'react';
import aboutImage from "../../assets/headshot.jpg";

function About() {
    return (
<section className="my-5">
  <h1 id="about">Who am I?</h1>
  <p id="about" > Welcome to my portfolio, and thank you for visiting!  My name is Nicole Barkley and a new full stack web developer and almost graduate.  </p>
  <img src={aboutImage} className="my-2" style={{ width: "100%" }} alt="cover" />
</section>
      
    );
  }
  
  export default About;