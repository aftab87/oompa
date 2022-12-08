import { userContext } from "App";
import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import DashboardTabButton from "Components/Dashboard/DashboardTabButton";
import SectionHeader from "Components/Dashboard/SectionHeader";
import StarCounter from "Components/Dashboard/Kids/StarCounter";
import { Button } from "react-bootstrap";

function KidOverview(props) {
  const [user] = useContext(userContext);
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

      {/* tab content */}
      <Outlet />
    </section>
  );
}

export default KidOverview;
