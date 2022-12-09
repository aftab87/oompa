import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DashboardTabButton from "Components/Dashboard/DashboardTabButton";
import MissionCard from "Components/Dashboard/MissionCard";
import { userContext } from "App";
import ParentMissionCard from "./ParentMissionCard";


export default function ParentMissionsCompleted(props) {
  const [choreCompleted, setChoresCompleted] = useState(null);
  const [user] = useContext(userContext);
  const [firstRun, setFirstRun] = useState(true);

  async function callGetAllChores() {
    await fetch("http://localhost:3001/completedchores/?parent_uid=" + user.id, { method: "GET" })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => setChoresCompleted(json));
  }



  useEffect(() => {
    if (firstRun) {
      setFirstRun(false);
      callGetAllChores();
    }
  }, [firstRun, choreCompleted]);

  // {chores && chores.map((chores) => <h1 key={chores._id}>{chores.title}</h1>)}</>
  return (
    <div>
      <Button variant="primary" as={NavLink} to="/dashboard/missions/add">
        Add New Mission
      </Button>

      <div className="d-flex justify-content-center gap-3 p-4">
        <DashboardTabButton label={"Available"} section={"missions"} endpoint={"available"} />
        <DashboardTabButton label={"Completed"} section={"missions"} endpoint={"completed"} />
        <DashboardTabButton label={"Approved"} section={"missions"} endpoint={"received"} />
      </div>

    <h2>Completed Missions</h2>
      <div className="row g-3">
        {choreCompleted && choreCompleted.map((choreCompleted) => <ParentMissionCard key={choreCompleted._id} choreCompleted={choreCompleted} />)}
      </div>

      
    </div>
  );
}

