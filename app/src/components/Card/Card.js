import React from "react";
import "./Card.scss";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import Footer from "../Footer/Footer";

function Card(props) {
  return (
    <div className="card-wrap">
      <div className="img-container">
        <img
          src={require("../../images/wavely-about-page.png")}
          className="company-img"
          alt="company-img"
        />
      </div>
      <div className="content-wrap">
        <CompanyInfo />
        <Footer />
      </div>
    </div>
  );
}

export default Card;
