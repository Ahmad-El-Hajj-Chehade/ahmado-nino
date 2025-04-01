import React from "react";
import "./About.css";

const About = () => (
  <section id="about" className="about-section">
    {/* Title and introductory paragraph */}
    <div className="about-header">
      <h2>About Me</h2>

    </div>



    {/* Text on the left, image on the right */}
    <div className="about-row">
      <div className="about-text">
        <h3>Hey, I'm Ahmad</h3>
        <p>
          My Name is Ahmad and I live in Dottikon Aargau. I'm a bachelor student and software developer. After the covid-lockdowns, me and my friends started to organize partys. In 2022 we created the partylabel dyoevents, which was the leading party label for 16+ events in Aarau and Basel. I was always interested in aiming for perfection in everything I do. Although I've always liked taking pictures with my phone, I picked up a professional camera to capture the emotions of my events. I learned a lot about photography and was very lucky to meet a lot of people who asked me to capture the emotion and story of their event. Let's connect and capture the emotions of your event together!
        </p>
      </div>
      <div className="about-image reverse">
        <img src="SWI-47.jpg" alt="Our Work" />
      </div>
    </div>
  </section>
);

export default About;
