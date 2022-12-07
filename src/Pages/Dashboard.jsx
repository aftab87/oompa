import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { userContext } from "App";
import DashboardNav from "Components/Dashboard/DashboardNav";

function Dashboard(props) {
  const [user] = useContext(userContext);

  return (
    <main className="dashboard bg-light">
      <section className="row container-fluid">
        <div className="sidebar col-auto">
          <DashboardNav />
        </div>

        <div className="mainArea col">
          <h1> {user.username}</h1>
          <p> {user.type}</p>
          <div className="border p-5">
            <p>
              <b>Outlet area</b>
            </p>
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
