import React from "react";

function SectionHeader({ title, text }) {
  return (
    <div className="d-flex flex-column ">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default SectionHeader;
