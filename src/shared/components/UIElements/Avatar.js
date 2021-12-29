import "./Avatar.css";
import React from "react";

const Avatar = (props) => {
  return (
    <div className={`avatar ${props.className}`}>
      <img
        src={props.image}
        alt={props.alt}
      />
    </div>
  );
};

export default Avatar;
