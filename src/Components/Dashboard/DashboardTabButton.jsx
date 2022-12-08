import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function DashboardTabButton({ label, section, endpoint }) {
  return (
    <Button as={NavLink} variant="outline-primary" to={"/dashboard/" + section + "/" + endpoint}>
      {label}
    </Button>
  );
}

export default DashboardTabButton;
