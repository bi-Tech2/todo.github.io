import React from "react";
import "./Tag.css"; // Ensure this CSS file exists

const Tag = (props) => {
  return <button className="tag">{props.label}</button>;
};

export default Tag;
