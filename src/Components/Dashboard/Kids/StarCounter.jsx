import React from "react";

function StarCounter({ numStars }) {
  return (
    <div className="d-flex gap-1 justify-content-end align-items-start">
      <img className="img-fluid" src="../images/star.svg" alt="button icon" /> x <p className="fw-bold h2">{numStars}</p>
    </div>
  );
}

export default StarCounter;
