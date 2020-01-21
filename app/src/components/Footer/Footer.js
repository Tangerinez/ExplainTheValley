import React from "react";
import "./Footer.scss";

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="job-number">{props.jobs} Jobs</div>
      <div className="like-icon">Heart</div>
    </div>
  );
}

export default Footer;
