import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DashboardTabButton from "Components/Dashboard/DashboardTabButton";
import KidMissionCard from "Components/Dashboard/MissionCard";

function ParentMissions(props) {
  return (
    <div>
      <Button variant="primary" as={NavLink} to="/dashboard/missions/add">
        Add New Mission
      </Button>

      <div className="d-flex justify-content-center gap-3 p-4">
        <DashboardTabButton label={"Available"} section={"rewards"} endpoint={"available"} />
        <DashboardTabButton label={"Completed"} section={"rewards"} endpoint={"claimed"} />
        <DashboardTabButton label={"Approved"} section={"rewards"} endpoint={"received"} />
      </div>

      <div className="row g-3">
        <KidMissionCard stars="1" title="Brush Teeth" img="" date="Monday" time="7:30 pm" kids={"Tommy, Maria"} state="available" description="short description..." />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Tommy"} img="" date="Monday" time="7:30 pm" state="completed" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Maria"} img="" date="Monday" time="7:30 pm" state="approved" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Tommy"} img="" date="Monday" time="7:30 pm" state="completed" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Tommy"} img="" date="Monday" time="7:30 pm" state="completed" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Tommy"} img="" date="Monday" time="7:30 pm" state="completed" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Maria"} img="" date="Monday" time="7:30 pm" state="approved" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Maria"} img="" date="Monday" time="7:30 pm" state="approved" />
      </div>

      <div className="p-4 bg-white border m-4 rounded-4">
        <h3>Testing Edit Reward Object</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

        <Button variant="primary" as={NavLink} to="/dashboard/mission/6390d14d5c1327fd52b89ada/edit">
          Edit Mission
        </Button>
      </div>
    </div>
  );
}

export default ParentMissions;
