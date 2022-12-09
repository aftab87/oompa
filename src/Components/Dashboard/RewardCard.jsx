import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { DarkModeContext, userContext } from "../../App";
import StarBadge from "./Kids/StarBadge";

function RewardCard({ reward, date, time, state }) {
  console.log(reward);
  const { description, image, kids, points, title, parent_uid } = reward;

  const [user] = useContext(userContext);
  const [darkMode] = useContext(DarkModeContext);
  const col = " col-12 col-md-6 col-xl-4 col-xxl-3";
  // TODO : Extract the Card into a Component for DarkMode
  return (
    <div className={"custom_card" + col}>
      <div className={"drop-shadow bg-white p-3 rounded-4 gap-3 d-flex d-flex flex-column h-100"}>
        <StarBadge className="text-dark" numStars={1} />
        <div className="position-relative text-center">
          <img src={`${image ? image : "/images/mission.svg"}`} className="devImages img-fluid" alt="Developers Heroes" />
          {image && <div className="inner-shadow"></div>}
        </div>
        <div className={"card-body bg-white text-dark text-center d-flex flex-column gap-3" + (darkMode ? " bg-dark" : "")}>
          <div>
            <h5 className="card-title">
              <b>{title}</b>
            </h5>
            <p className="card-text fst-italic small mb-0">{description}</p>
          </div>
          <div className="meta fw-bold d-flex justify-content-center gap-4">
            <div className="date d-flex align-items-center gap-1">
              <img src="/images/calendar.svg" alt="calendar icon" className="" />
              <span>{date}</span>
            </div>
            <div className="time d-flex align-items-center gap-1">
              <img src="/images/clock.svg" alt="calendar icon" className="" />
              <span>{time}</span>
            </div>
          </div>
          {user.type === "kid" && (
            //Possible Missions Card states for Kids
            <>
              {state === "available" && <Button onClick={markCompleteHandler}>Mark Complete</Button>}
              {state === "claimed" && (
                <div>
                  <p className="text-success fw-bold h5 mb-0">CLAIMED</p>
                  <p className="text-secondary fw-light fst-italic small mb-0 ">now you wait :)</p>
                </div>
              )}
              {state === "approved" && (
                <div>
                  <p className="text-warning fw-bold h5 mb-0">RECEIVED</p>
                </div>
              )}
            </>
          )}

          {user.type === "parent" && (
            //Possible Missions Card states for Parents

            <>
              <div className="text-center">
                <p className="text-secondary  fst-italic small mb-0 ">assigned to:</p>
                <h5 className="text-center mb-0">{kids}</h5>
              </div>

              {state === "available" && (
                <div className="d-flex justify-content-center gap-3">
                  <Button>Edit</Button>
                </div>
              )}
              {state === "claimed" && (
                <div className="d-flex justify-content-center gap-3">
                  <Button variant="success" className="text-light">
                    Mark Fulfilled
                  </Button>
                  <Button variant="danger" className="text-light w-45">
                    Break promise
                  </Button>
                </div>
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

export default RewardCard;

function markCompleteHandler() {
  //write logic for what happend when CHILD clicks mark complete
  alert("TODO:execute mark complete logic");
}