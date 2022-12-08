import React, { useState, useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DashboardTabButton from "Components/Dashboard/DashboardTabButton";
import MissionCard from "Components/Dashboard/MissionCard";
import { userContext } from "App";

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
  useEffect(() => {
    if (firstRun) {
      setFirstRun(false);
      callGetAllChores();
    }
  }, [firstRun, chores]);

  // {chores && chores.map((chores) => <h1 key={chores._id}>{chores.title}</h1>)}</>
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

      <div className="row g-3">{chores && chores.map((chores) => <MissionCard key={chores._id} stars={chores.points} title={chores.title} img="" date="Monday" time="7:30 pm" kids={chores.kids} state="available" description={chores.description} />)}</div>

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
