import React, { useState, useContext, useEffect } from "react";
import MissionCard from "../../MissionCard";
import { userContext } from "App";

function KidMissionsAvailable(props) {
  const [chores, setChores] = useState(null);
  const [user, setUser] = useContext(userContext);
  const [firstRun, setFirstRun] = useState(true);

  async function callGetAllChores() {
    await fetch("http://localhost:3001/Chores/kids/" + user.id, { method: "GET" })
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

  return (
    <div className="d-flex gap-4 flex-wrap justify-content-center p-4">
      {chores && chores.map((chores) => <MissionCard key={chores._id} stars={chores.points} title={chores.title} img="" date="Monday" time="7:30 pm" kids={chores.kids} state="available" description={chores.description} />)}
      {/* <MissionCard stars="1" title="Brush Teeth" img="" date="Monday" time="7:30 pm" state="available" description="short description..." />
      <MissionCard stars="2" title="Brush Hair" img="" date="Tuesday" time="7:30 pm" state="completed" description="short description..." />
      <MissionCard stars="2" title="Brush Hair" img="" date="Tuesday" time="7:30 pm" state="approved" description="short description..." /> */}
    </div>
  );
}

export default KidMissionsAvailable;
