import React from "react";
import KidMissionCard from "../Kids/KidMissionCard";

function ParentMissions(props) {
  return (
    <div>
      <div className="d-flex gap-4 flex-wrap justify-content-center p-4">
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." img="" date="Monday" time="7:30 pm" state="available" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." img="" date="Monday" time="7:30 pm" state="completed" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." img="" date="Monday" time="7:30 pm" state="approved" />
      </div>
    </div>
  );
}

export default ParentMissions;
