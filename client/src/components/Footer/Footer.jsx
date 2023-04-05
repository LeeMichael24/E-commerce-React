import "./Footer.scss";

import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title"> About </div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
            cum ratione dolorem quia provident nemo. Maiores impedit enim
            repellat aspernatur similique atque minus odio odit? Cupiditate
            laboriosam, iste assumenda consequuntur eaque iure ratione ab totam,
            quae nulla quos minus mollitia officia provident quidem qui.
            Voluptates, quos? Obcaecati tempore eaque similique.
          </div>
        </div>
        <div className="col">
            <div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow />
                <div className="text">
                    kayene rd, Pummanda, peru, sivar 9304-32
                </div>
            </div>
            <div className="c-item">
                <FaMobileAlt />
                <div className="text">
                    Phone: 62087916 
                </div>
            </div>
            <div className="c-item">
                <FaEnvelope />
                <div className="text">
                    Email: leemichaeln24@gmail.com
                </div>
            </div>
        </div>
        {/* here depence of how many categories does you have in the e-commerce */}
        <div className="col">
            <div className="title"> Categories </div>
            <span className="text"> Headphones </span>
            <span className="text"> Smart Watches </span>
            <span className="text"> Blueetooth Speakers </span>
            <span className="text"> Wireless Earbuds </span>
            <span className="text"> Home Theatre </span>
            <span className="text"> Projectors </span>
        </div>
        <div className="col">
            <div className="title"> Pages </div>
            <span className="text"> Home </span>
            <span className="text"> About </span>
            <span className="text"> Privacy Policy </span>
            <span className="text"> Returns </span>
            <span className="text"> Terms & Conditions </span>
            <span className="text"> Contact Us </span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
            <div className="text">
                APPEX 2023 CREATED BY WEBGENIUS SOLUTIONS
            </div>
            <img src={ Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
