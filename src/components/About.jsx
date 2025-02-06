import React from "react";
import "./About.css";

const About = () => (
  <section id="about" className="about-section">
    {/* Title and introductory paragraph */}
    <div className="about-header">
      <h2>About Us</h2>
      <p>
        We are Ahmado & Nino, passionate photographers specializing in nightlife and event photography. Our journey has been all about capturing the raw energy and vibrant moments of every event we shoot.
      </p>
    </div>

    {/* Image on the left, text on the right */}
    <div className="about-row">
      <div className="about-image">
        <img src="about-image.jpg" alt="Ahmado & Nino" />
      </div>
      <div className="about-text">
        <h3>Hi, I'm Nino</h3>
        <p>
          My name is Nino. I live in Suhr Aargau and work as a gardener. I met Ahmad at a party he organized with his team and quickly got interested in the behind the scenes of partys. From 2022 till today I am part of his team where I lead projects and organzie events. Since I was a kid I liked taking pictures of everything around me and to capture the moment with all it's emotions. I thrive to tell a story with the pictures I take and lead the viewer in an adventure. Contact us and let's capture the story of your event! 
        </p>
      </div>
    </div>

    {/* Text on the left, image on the right */}
    <div className="about-row">
      <div className="about-text">
        <h3>Hey, I'm Ahmad</h3>
        <p>
          My Name is Ahmad and I live in Dottikon Aargau. I'm a bachelor student and software developer. After the covid-lockdowns, me and my friends started to organize partys. In 2022 we created the partylabel dyoevents, which was the leading party label for 16+ events in Aarau and Basel. At such an event I met Nino and he became a very good friend of mine and part of my team. I was always interested in aiming for perfection in everything I do. Although I've always liked taking pictures with my phone, I picked up a professional camera to capture the emotions of my events. I learned a lot about photography and was very lucky to meet a lot of people who asked me to capture the emotion and story of their event. Contact us and let's capture the emotions of your event together!
        </p>
      </div>
      <div className="about-image">
        <img src="SWI-47.jpg" alt="Our Work" />
      </div>
    </div>
  </section>
);

export default About;
