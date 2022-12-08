import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function ParentRewards(props) {
  return (
    <>
      <div className="p-4 bg-white border m-4 rounded-4">
      <h3>Testing Add Reward Object</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <Button variant="primary" as={NavLink} to="/dashboard/rewards/add">Add New Reward</Button>
      </div>
      <div className="p-4 bg-white border m-4 rounded-4">
        <h3>Testing Edit Reward Object</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <Button variant="primary" as={NavLink} to="/dashboard/rewards/63912e8d5d9afcff48f748d3/edit">Edit Test Reward</Button>
      </div>
    </>
  )
}

export default ParentRewards;
