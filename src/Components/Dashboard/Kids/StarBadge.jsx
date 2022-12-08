import React from "react";

function StarBadge({ numStars }) {
  return (
    <div className="d-flex gap-1 justify-content-center align-items-start my-n2">
      <img className="img-fluid" src="../images/star.svg" alt="button icon" />
      <p className="fw-bold text-dark position-absolute text-center pt-2">{numStars}</p>
    </div>
  );
}

export default StarBadge;
