import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import KidMissionCard from "../Kids/KidMissionCard";

function ParentMissions(props) {
  return (
    <div>
      <div className="d-flex gap-4 flex-wrap justify-content-center p-4">
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." img="" date="Monday" time="7:30 pm" state="available" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." img="" date="Monday" time="7:30 pm" state="completed" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." img="" date="Monday" time="7:30 pm" state="approved" />
      </div>
      <div className="p-4 bg-white border m-4 rounded-4">
        <h3>Testing Add Reward Object</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <Button variant="primary" as={NavLink} to="/dashboard/missions/add">Add New Mission</Button>
      </div>
      <div className="p-4 bg-white border m-4 rounded-4">
        <h3>Testing Edit Reward Object</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

        <Button variant="primary" as={NavLink} to="/dashboard/missions/34/edit">Edit Mission</Button>

      </div>
    </div>
  );
}

export default ParentMissions;
