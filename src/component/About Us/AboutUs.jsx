import React from "react";
import "./AboutUsStyle.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Information from "../Information/Information";
// import aboutImg from '../imgs/pic1.jpg'
const AboutUs = () => {
  return (
    <div className="about">
      <Information />
      <NavBar />

      <div className="about-holder">
        <div className="about-header">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            magni culpa non veritatis. Numquam distinctio eligendi vel,
            voluptatibus, enim consectetur, aliquid tempore rem tenetur nihil
            illum vero laudantium ratione quasi.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
