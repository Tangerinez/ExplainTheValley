import React from "react";
import "./CompanyInfo.scss";

function CompanyInfo(props) {
  return (
    <div className="company-info">
      <div className="name">{props.name}</div>
      <div className="industry">{props.industry}</div>
      <div className="location">{props.location}</div>
      <div className="employees">From {props.employees} employees</div>
    </div>
  );
}

export default CompanyInfo;
