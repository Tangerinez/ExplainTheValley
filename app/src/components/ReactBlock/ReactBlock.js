import React from "react";
import "./ReactBlock.scss";

function ReactBlock() {
  return (
    <div className="react-block">
      <img
        src={require("../../images/react.png")}
        alt="react"
        className="react-logo"
      />
    </div>
  );
}

export default ReactBlock;
