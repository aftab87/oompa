import { userContext } from "App";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import DashboardTabButton from "Components/Dashboard/DashboardTabButton";
import SectionHeader from "Components/Dashboard/SectionHeader";
import StarCounter from "Components/Dashboard/Kids/StarCounter";

function KidOverview(props) {
  const [user] = useContext(userContext);
  return (
    <section className="overview">
      <div className="d-flex justify-content-between">
        <SectionHeader title={"Let's See how your kids are doing"} text={"Here you can ..."} />
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
