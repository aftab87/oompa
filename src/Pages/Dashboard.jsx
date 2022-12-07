import React, { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { userContext } from "App";
import ParentDashNav from "Components/Dashboard/Parents/ParentDashNav";
import KidDashNav from "Components/Dashboard/Kids/KidDashNav";

function Dashboard(props) {
  const [user] = useContext(userContext);

  return (
    <main className="dashboard container">
      <section className="row">
        <div className="sidebar col-3 ">{user.type === "parent" ? <ParentDashNav /> : <KidDashNav />}</div>

        <div className="mainArea col-9">
          <h1> {user.username}</h1>
          <p> {user.type}</p>
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
