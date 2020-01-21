import React from "react";
import "./CompanyInfo.scss";

function CompanyInfo(props) {
  return (
    <div className="company-info">
      <div className="name">{props.name}</div>
      <div className="info-wrap">
        <img
          src={require("../../images/industry.png")}
          alt="industry"
          className="industry-img"
        />
        <div className="industry">{props.industry}</div>
      </div>
      <div className="info-wrap">
        <img
          src={require("../../images/location.png")}
          alt="location"
          className="location-img"
        />
        <div className="location">{props.location}</div>
      </div>
      <div className="info-wrap">
        <img
          src={require("../../images/employee.png")}
          alt="employee"
          className="employee-img"
        />
        <div className="employees">From {props.employees} employees</div>
      </div>
    </div>
  );
}

export default CompanyInfo;
