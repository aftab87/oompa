import React from "react";
import { Outlet } from "react-router-dom";
import DashboardTabButton from "../DashboardTabButton";
import SectionHeader from "../SectionHeader";
import StarCounter from "./StarCounter";

function KidMissions(props) {
  return (
    <section className="missions">
      <div className="d-flex justify-content-between">
        <SectionHeader title={"Your next Missions"} text={"Complete missions to collect stars and exchange them for rewards"} />
        <StarCounter numStars={16} />
      </div>

      {/* tab buttons */}
      <div className="d-flex justify-content-center gap-3 p-4">
        <DashboardTabButton label={"Available"} section={"missions"} endpoint={"available"} />
        <DashboardTabButton label={"Completed"} section={"missions"} endpoint={"completed"} />
        <DashboardTabButton label={"Approved"} section={"missions"} endpoint={"approved"} />
      </div>

      {/* tab content */}
      <Outlet />
    </section>
  );
}

export default KidMissions;
