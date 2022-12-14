import { userContext } from "App";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import DashboardTabButton from "Components/Dashboard/DashboardTabButton";
import SectionHeader from "Components/Dashboard/SectionHeader";
import { Button } from "react-bootstrap";
import KidsCard from "Components/Dashboard/KidsCard";

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

  const deleteHandler = () => {
    callGetAllKids();
  };

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false);
      callGetAllKids();
    }
  }, [firstRun, kids]);

  return (
    <section className="overview">
      <div className="d-flex justify-content-between align-items-start pb-5">
        <SectionHeader title={"Let's See how your kids are doing"} text={"Here you can ..."} />
        <Button as={NavLink} to={"/dashboard/kids/add"}>
          Add Kid
        </Button>
      </div>
      {/* tab buttons */}
      {/* <div className="d-flex justify-content-center gap-3 p-4">
        <DashboardTabButton label={"Tommy"} section={"missions"} endpoint={"available"} />
        <DashboardTabButton label={"John"} section={"missions"} endpoint={"completed"} />
        <DashboardTabButton label={"Jane"} section={"missions"} endpoint={"approved"} />
      </div> */}
      <div className="row g-3">
        {kids &&
          kids.map((kids) => (
            <KidsCard
              key={kids._id}
              id={kids._id}
              stars={kids.points}
              title={kids.username}
              img={kids.avatar}
              date="Monday"
              time="7:30 pm"
              kids={kids.first_name}
              state="available"
              description={kids.description}
              onDelete={deleteHandler}
            />
          ))}
      </div>
      {/* /* tab content */}
      <Outlet />
    </section>
  );
}

export default KidOverview;
