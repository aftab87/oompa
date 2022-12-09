import React from "react";

function Image({ image }) {
  return (
    <div className="position-relative text-center">
      <img src={`${image ? image : "/images/gift.svg"}`} className="devImages img-fluid" alt="Gift" />
    </div>
  );
}

export default Image;
