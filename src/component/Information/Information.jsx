import React from "react";
import "./InformationStyle.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Information = () => {
  return (
    <div className="info-header">
      <div className="phone">
        <FaPhoneAlt />
        <h3>+20 123 456 7891</h3>
      </div>

      <div className="mail">
        <MdEmail />
        <h3>Info@abu-heiba.com</h3>
      </div>
    </div>
  );
};

export default Information;
