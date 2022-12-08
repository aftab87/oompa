import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { DarkModeContext, userContext } from "../../../App";
import StarBadge from "./StarBadge";

function KidMissionCard({ title, description, img, date, time, state }) {
  const [user] = useContext(userContext);
  const [darkMode] = useContext(DarkModeContext);
  const col = " col-12 col-md-6 col-lg-3 ";
  // TODO : Extract the Card into a Component for DarkMode
  return (
    <div className={"custom_card" + col}>
      <div className={"drop-shadow bg-white p-3 rounded-4 gap-3 d-flex d-flex flex-column"}>
        <StarBadge className="text-dark" numStars={1} />
        <div className="position-relative text-center">
          <img src={`/images/${img ? img : "mission.svg"}`} className="devImages img-fluid" alt="Developers Heroes" />
          {img && <div className="inner-shadow"></div>}
        </div>
        <div className={"card-body bg-white text-dark text-center d-flex flex-column gap-3" + (darkMode ? " bg-dark" : "")}>
          <div>
            <h5 className="card-title">
              <b>{title}</b>
            </h5>
            <p className="card-text fst-italic small mb-0">{description}</p>
          </div>
          <div className="meta fw-bold d-flex justify-content-between">
            <div className="date d-flex align-items-center gap-1">
              <img src="/images/calendar.svg" alt="calendar icon" className="" />
              <span>{date}</span>
            </div>
            <div className="time d-flex align-items-center gap-1">
              <span>{time}</span>
              <img src="/images/clock.svg" alt="calendar icon" className="" />
            </div>
          </div>
          {user.type === "kid" && (
            //Possible Missions Card states for Kids
            <>
              {state === "available" && <Button>Mark Complete</Button>}
              {state === "completed" && (
                <div>
                  <p className="text-success fw-bold h5 mb-0">COMPLETED</p>
                  <p className="text-secondary fw-light fst-italic small mb-0 ">awaiting approval</p>
                </div>
              )}
              {state === "approved" && (
                <div>
                  <p className="text-warning fw-bold h5 mb-0">APPROVED</p>
                </div>
              )}
            </>
          )}

          {user.type === "parent" && (
            //Possible Missions Card states for Parents
            <>
              {state === "available" && <Button>Edit</Button>}
              {state === "completed" && (
                <>
                  <Button>Edit</Button>
                  <Button variant="success">Approve</Button>
                </>
              )}

              {state === "approved" && (
                <div>
                  <p className="text-warning fw-bold h5 mb-0">APPROVED</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default KidMissionCard;
