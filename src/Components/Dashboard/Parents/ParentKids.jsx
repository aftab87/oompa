import { userContext } from "App";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import DashboardTabButton from "Components/Dashboard/DashboardTabButton";
import SectionHeader from "Components/Dashboard/SectionHeader";
import StarCounter from "Components/Dashboard/Kids/StarCounter";
import { Button } from "react-bootstrap";
import MissionCard from "Components/Dashboard/MissionCard";

function KidOverview(props) {
  const [user] = useContext(userContext);
  const [kids, setKids] = useState(null);
  const [firstRun, setFirstRun] = useState(true);
  async function callGetAllKids() {
    await fetch("http://localhost:3001/kids/" + user.id, { method: "GET" })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => setKids(json));
  }
  useEffect(() => {
    if (firstRun) {
      setFirstRun(false);
      callGetAllKids();
    }
  }, [firstRun, kids]);

  return (
    <section className="overview">
      <div className="d-flex justify-content-between align-items-start">
        <SectionHeader title={"Let's See how your kids are doing"} text={"Here you can ..."} />
        <Button as={NavLink} to={"/dashboard/kids/add"}>
          Add Kid
        </Button>
      </div>

      {/* tab buttons */}
      <div className="d-flex justify-content-center gap-3 p-4">
        <DashboardTabButton label={"Tommy"} section={"missions"} endpoint={"available"} />
        <DashboardTabButton label={"John"} section={"missions"} endpoint={"completed"} />
        <DashboardTabButton label={"Jane"} section={"missions"} endpoint={"approved"} />
      </div>
      <div className="row g-3">
        {kids && kids.map((kids) => <MissionCard key={kids._id} stars={kids.points} title={kids.username} img="" date="Monday" time="7:30 pm" kids={kids.first_name} state="available" description={kids.description} />)}
        {/* <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Tommy"} img="" date="Monday" time="7:30 pm" state="completed" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Maria"} img="" date="Monday" time="7:30 pm" state="approved" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Tommy"} img="" date="Monday" time="7:30 pm" state="completed" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Tommy"} img="" date="Monday" time="7:30 pm" state="completed" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Tommy"} img="" date="Monday" time="7:30 pm" state="completed" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Maria"} img="" date="Monday" time="7:30 pm" state="approved" />
        <KidMissionCard stars="1" title="Brush Teeth" description="short description..." kids={"Maria"} img="" date="Monday" time="7:30 pm" state="approved" /> */}
      </div>

      {/* tab content */}
      <Outlet />
    </section>
  );
}

export default KidOverview;
