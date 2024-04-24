import React from "react";
import "./HomeAboutStyle.css";
import aboutimage from "../../imgs/products.png";

const HomeAbout = () => {
  return (
    <div className="homeabout-holder">
      <div>
        <img src={aboutimage} alt="" className="homeAbout-image" />
      </div>
      <div>
        <h1>We provide you and your family with diffirent type of food</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          ipsam cum exercitationem mollitia maiores doloribus nisi in quis,
          voluptatibus, dicta dignissimos. Nesciunt, voluptatem voluptatum
          minima iste dolore a rerum ipsam?
        </p>
        <button className="homeabout-btn">Know More About Us</button>
      </div>
    </div>
  );
};

export default HomeAbout;
