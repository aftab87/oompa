import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DashboardTabButton from "Components/Dashboard/DashboardTabButton";
import MissionCard from "Components/Dashboard/MissionCard";
import { userContext } from "App";
import { getByDisplayValue } from "@testing-library/react";
import SectionHeader from "../SectionHeader";
// import ParentMissionCard from "./ParentMissionCard";

function ParentMissions(props) {
  const [chores, setChores] = useState(null);
  const [user, setUser] = useContext(userContext);
  const [firstRun, setFirstRun] = useState(true);

  async function callGetAllChores() {
    await fetch("http://localhost:3001/Chores/" + user.id, { method: "GET" })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => setChores(json));
  }

  const deleteHandler = () => {
    callGetAllChores();
  };

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false);
      callGetAllChores();
    }
  }, [firstRun, chores]);

  // {chores && chores.map((chores) => <h1 key={chores._id}>{chores.title}</h1>)}</>
  return (
    <div>
      <div className="d-flex justify-content-between align-items-start pb-5">
        <SectionHeader title={"Assign Missions"} text={"Here you can create assign and approve missions"} />
        <Button variant="primary" as={NavLink} to="/dashboard/missions/add">
          Add New Mission
        </Button>
      </div>

      {/* 
      <div className="d-flex justify-content-center gap-3 p-4">
        <DashboardTabButton label={"Available"} section={"missions"} endpoint={"available"} />
        <DashboardTabButton label={"Completed"} section={"missions"} endpoint={"completed"} />
        <DashboardTabButton label={"Approved"} section={"missions"} endpoint={"received"} />
      </div> */}

      <div className="row g-3">{chores && chores.map((chore) => <MissionCard key={chore._id} chore={chore} onDelete={deleteHandler} />)}</div>

      {/* <div className="p-4 bg-white border m-4 rounded-4">
        <h3>Edit Missions</h3>
        <p>Make changes and/or delete missions.</p>

        <Button variant="primary" as={NavLink} to="/dashboard/missions/34/edit">
          Edit Mission
        </Button>
      </div> */}
    </div>
  );
}

export default ParentMissions;
