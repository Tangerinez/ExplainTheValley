import React from "react";
import "./Footer.scss";

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="job-number">{props.jobs} Jobs</div>
      <div className="like-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 125"
          xmlSpace="preserve"
          className="heart"
        >
          <path d="M69.7,9.2c-8.5-0.3-15.6,7.3-20.4,14.8c-5.9-5.6-15-9.2-23.1-6.8c-8,2.4-11.3,12.3-10.9,19.9c0.4,9.7,6.2,17.4,12.1,24.6  c7.3,8.9,15,17.4,20.6,27.6c1.3,2.4,6.2,2,6.9-0.8c2.5-10.9,13.3-17.7,19-26.9c5.8-9.5,9.1-20.4,9.6-31.5  C83.7,21.1,80.5,9.5,69.7,9.2z M72.8,44.9c-2.7,8.7-7.3,16.4-13.3,23.1c-3.4,3.8-6.8,7.4-9.2,11.6c-3-4.5-6.1-8.9-9.7-12.9  C35.4,61,29.4,55.9,25.6,49.2c-3.5-6.1-6.2-14.7-2.9-21.4c4.9-9.9,16.9-6.9,23.5-0.7c0.2,0.2,0.5,0.3,0.8,0.4  c-0.7,1.2-1.4,2.4-1.9,3.6c-2,3.8,3.9,6,6.1,3c3.5-4.9,15.1-24.5,22-15.5C78.1,24.8,74.9,38,72.8,44.9z" />
        </svg>
      </div>
    </div>
  );
}

export default Footer;
