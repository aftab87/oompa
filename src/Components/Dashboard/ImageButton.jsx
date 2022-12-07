import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ImageButton({ imgSrc, label, link }) {
  return (
    // <Button as={NavLink} variant="primary" to={"/dashboard/missions"} className="m-2" >
    <Button as={NavLink} variant="outline-primary" to={link} className="p-3 btn-square border rounded-4 d-flex flex-column justify-content-center align-items-center gap-2 fw-bold shadow">
      <img className="img-fluid" src={imgSrc} alt="button icon" />
      {label}
    </Button>
  );
}

export default ImageButton;
