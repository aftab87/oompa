import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DashboardTabButton from "Components/Dashboard/DashboardTabButton";
import MissionCard from "Components/Dashboard/MissionCard";
import { userContext } from "App";
import { getByDisplayValue } from "@testing-library/react";

function ParentMissions(props) {
  const [chores, setChores] = useState(null);
  const [completedChores, setCompletedChores] = useState(null);
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
  async function getAllCompletedChores() {
    await fetch("http://localhost:3001/completedchores/" + user.id, { method: "GET" })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => setChores(json));
  }
  //toggles between chores and completed chores
  function completedChoresTab() {
    getAllCompletedChores();
  }
  function choresTab() {
    callGetAllChores();
  }

  useEffect(() => {
    if (firstRun) {
      // setFirstRun(false);
      // callGetAllChores();
      getAllCompletedChores();
      console.log(user);
    }
  }, []);

  // {chores && chores.map((chores) => <h1 key={chores._id}>{chores.title}</h1>)}</>
  return (
    <div>
      <Button variant="primary" as={NavLink} to="/dashboard/missions/add">
        Add New Mission
      </Button>

      <div className="d-flex justify-content-center gap-3 p-4">
        <Button variant="primary-outline" as={NavLink} onClick={choresTab}>
          Available
        </Button>
        <Button variant="primary-outline" as={NavLink} onClick={completedChoresTab}>
          Completed
        </Button>
        {/* <DashboardTabButton label={"Available"} section={"rewards"} endpoint={"available"} />
        <DashboardTabButton label={"Completed"} section={"rewards"} endpoint={"claimed"} />
        <DashboardTabButton label={"Approved"} section={"rewards"} endpoint={"received"} /> */}
      </div>

      <div className="row g-3">{chores && chores.map((chore) => <MissionCard key={chore._id} chore={chore} date="" time="" state="available" />)}</div>
      {/* <div className="row g-3">{completedChores && completedChores.map((chore) => <MissionCard key={chore._id} chore={chore} date="" time="" state="available" />)}</div> */}
      <div className="p-4 bg-white border m-4 rounded-4">
        <h3>Edit Missions</h3>
        <p>Make changes and/or delete missions.</p>

        <Button variant="primary" as={NavLink} to="/dashboard/missions/34/edit">
          Edit Mission
        </Button>
      </div>
    </div>
  );
}

export default ParentMissions;
