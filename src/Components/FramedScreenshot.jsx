import React from "react";

function FramedScreenshot({ path, altText }) {
  return (
    <div className="p-3 drop-shadow rounded-3 bg-white">
      <div className="position-relative">
        <img className="img-fluid rounded-3" src={path} alt={altText} />
        <div className="inner-shadow"></div>
      </div>
    </div>
  );
}

export default FramedScreenshot;
