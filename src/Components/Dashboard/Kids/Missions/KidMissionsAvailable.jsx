import React from "react";
import KidMissionCard from "../../MissionCard";

function KidMissionsAvailable(props) {
  return (
    <div className="d-flex gap-4 flex-wrap justify-content-center p-4">
      <KidMissionCard stars="1" title="Brush Teeth" img="" date="Monday" time="7:30 pm" state="available" description="short description..." />
      <KidMissionCard stars="2" title="Brush Hair" img="" date="Tuesday" time="7:30 pm" state="completed" description="short description..." />
      <KidMissionCard stars="2" title="Brush Hair" img="" date="Tuesday" time="7:30 pm" state="approved" description="short description..." />
    </div>
  );
}

export default KidMissionsAvailable;
