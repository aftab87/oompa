import { userContext } from "App";
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import DashboardTabButton from "../DashboardTabButton";
import SectionHeader from "../SectionHeader";
import StarCounter from "./StarCounter";

function KidOverview(props) {
  const [user] = useContext(userContext);
  return (
    <section className="overview">
      <div className="d-flex justify-content-between">
        <SectionHeader title={"Welcome back " + user.first_name + "!"} text={"Complete missions to collect stars and exchange them for rewards"} />
        <StarCounter numStars={16} />
      </div>

      {/* prettier-ignore */}
      <div className="row">
        <div className="col-12 col-md-6 text-center">
        <img src={`/images/avatar${user.avatar}.svg`} alt="main avatar" width="250" className="img-fluid" />
        <h2></h2>
        </div>
        <div className=" col-12 col-md-6 d-flex justify-content-start">
          <div className="row">

         
        </div>
          </div>
      </div>
    </section>
  );
}

export default KidOverview;
