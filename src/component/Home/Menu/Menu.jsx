import React from "react";
import "./MenuStyle.css";
import productImg from "../../imgs/abuheiba.png";

const Menu = () => {
  const menuProduct = [
    {
      id: 1,
      name: "Splited Beans",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: productImg,
    },
    {
      id: 1,
      name: "Splited Beans",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: productImg,
    },
    {
      id: 1,
      name: "Splited Beans",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: productImg,
    },
    {
      id: 1,
      name: "Splited Beans",
      desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: productImg,
    },
  ];

  return (
    <div className="menuHolder">
      <h1>Our Product</h1>
      <div className="menuContainer">
        {menuProduct?.map((m) => (
          <div className="menuCard">
            <img src={m.img} alt="" className="productImg" />
            <h3>{m.name}</h3>
            <p>{m.desc}</p>
            <button>Discover</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Menu;
