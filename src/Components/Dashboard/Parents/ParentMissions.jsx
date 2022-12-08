import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ParentMissions(props) {
  <>
    <div className="p-4 bg-white border m-4 rounded-4">
      <h3>Testing Add Reward Object</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <Button variant="primary" as={NavLink} to="/dashboard/rewards/add">Add New Reward</Button>
    </div>
    <div className="p-4 bg-white border m-4 rounded-4">
      <h3>Testing Edit Reward Object</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

      <Button variant="primary" as={NavLink} to="/dashboard/rewards/6390d14d5c1327fd52b89ada/edit">Edit Test Reward</Button>

    </div>
  </>
}

export default ParentMissions;
