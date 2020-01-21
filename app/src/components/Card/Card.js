import React from "react";
import "./Card.scss";
import ReactBlock from "../ReactBlock/ReactBlock";
import CompanyInfo from "../CompanyInfo/CompanyInfo";
import Footer from "../Footer/Footer";

function Card(props) {
  return (
    <div className="card-wrap">
      <div className="img-container">
        {/* <img
          src={require("../../images/wavely-about-page.png")}
          className="company-img"
          alt="company-img"
        /> */}
      </div>
      <ReactBlock />
      <div className="content-wrap">
        <CompanyInfo
          name={props.name}
          industry={props.industry}
          location={props.location}
          employees={props.employees}
        />
        <Footer jobs={props.jobs} />
      </div>
    </div>
  );
}

export default Card;
