import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { userContext } from "App";
import DashboardNav from "Components/Dashboard/DashboardNav";

function Dashboard(props) {
  const [user] = useContext(userContext);
  let date = new Date().toLocaleDateString("fr-US");

  return (
    <main className="dashboard bg-light justify-content-start py-5">
      <section className="row container-fluid">
        <div className="sidebar col-auto">
          <DashboardNav />
        </div>

        <div className="mainArea col">
          <div className="text-center">
            <h1>Welcome {user.first_name}!</h1>
            <p>{date}</p>
          </div>

          <div className="border p-5 ">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
