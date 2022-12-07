import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import React from "react";

function ParentDashNav(props) {
  return (
    <div className="d-flex flex-column gap-1">
      <h3>parent</h3>
      <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard"}>
        {"kids"}
      </Button>
      <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard/missions"}>
        {"missions"}
      </Button>
      <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard/rewards"}>
        {"rewards"}
      </Button>
      <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard/settings"}>
        {"settings"}
      </Button>
    </div>
  );
}

export default ParentDashNav;
