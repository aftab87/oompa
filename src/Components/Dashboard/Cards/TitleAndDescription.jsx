import React from "react";

function TitleAndDescription({ title, description }) {
  return (
    <div>
      <h5 className="card-title">
        <b>{title}</b>
      </h5>
      <p className="card-text fst-italic small mb-0">{description}</p>
    </div>
  );
}

export default TitleAndDescription;
