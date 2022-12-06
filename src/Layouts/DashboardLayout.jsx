import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

function DashboardLayout(props) {
  return (
    <main className="dashboard container">
      <section className="row">
        <div className="sidebar col-3 ">
          <div className="kid_user d-flex flex-column gap-1">
            <h3>kids</h3>
            <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard/endpoint"}>
              {"label"}
            </Button>
            <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard/endpoint"}>
              {"label"}
            </Button>
            <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard/endpoint"}>
              {"label"}
            </Button>
            <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard/endpoint"}>
              {"label"}
            </Button>
          </div>

          <div className="kid_user d-flex flex-column gap-3">
            <h3>parents</h3>
            <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard/endpoint"}>
              {"label"}
            </Button>
            <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard/endpoint"}>
              {"label"}
            </Button>
            <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard/endpoint"}>
              {"label"}
            </Button>
            <Button as={NavLink} variant="primary" className="m-2" to={"/dashboard/endpoint"}>
              {"label"}
            </Button>
          </div>
        </div>

        <div className="mainArea col-9">
          <p>testing main area</p>
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default DashboardLayout;
