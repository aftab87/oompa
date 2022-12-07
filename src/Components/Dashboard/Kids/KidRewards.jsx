import React from "react";
import { Outlet } from "react-router-dom";
import DashboardTabButton from "../DashboardTabButton";
import SectionHeader from "./SectionHeader";
import StarCounter from "./StarCounter";

function KidRewards(props) {
  return (
    <section className="missions">
      <div className="d-flex justify-content-between">
        <SectionHeader title={"Rewards yeyy!"} text={"Exchange your stars to get rewards. Be thoughtful! If you wait you can get a bigger rewards"} />
        <StarCounter numStars={16} />
      </div>

      {/* tab buttons */}
      <div className="d-flex justify-content-center gap-3 p-4">
        <DashboardTabButton label={"Available"} section={"rewards"} endpoint={"available"} />
        <DashboardTabButton label={"Claimed"} section={"rewards"} endpoint={"claimed"} />
        <DashboardTabButton label={"Received"} section={"rewards"} endpoint={"received"} />
      </div>

      {/* tab content */}
      <Outlet />
    </section>
  );
}

export default KidRewards;
