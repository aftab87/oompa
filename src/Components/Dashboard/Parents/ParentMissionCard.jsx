import { DarkModeContext } from "App";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import StarBadge from '../Kids/StarBadge';

function ParentMissionCard(props) {

  const {choreCompleted: { date_completed, verified, _id,  chore:{ img, description, title, repitition: date,points: stars, time="7:00PM"}, kid  } }= props
  const [darkMode] = useContext(DarkModeContext);

  const col = " col-12 col-md-6 col-xl-4 col-xxl-3";
  async function markApprovedHandler() {
    //write logic for what happens when CHILD clicks mark complete
   const response = await fetch(`http://localhost:3001/completedchores/${_id}/approve`, {
    method: "PUT", 

    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
   }).then(data=>data.json())
   console.log({response})


  }

  let state = verified ? "approved": "pending"

  // TODO : Extract the Card into a Component for DarkMode
  return (
    <div className={"custom_card" + col}>
      <div className={"drop-shadow bg-white p-3 rounded-4 gap-3 d-flex d-flex flex-column h-100"}>
        <StarBadge className="text-dark" numStars={1} />
        <div className="position-relative text-center">
          <img src={`${img ? img : "/images/mission.svg"}`} className="devImages img-fluid" alt="Developers Heroes" />
          {img && <div className="inner-shadow"></div>}
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
       
            
            <>
              {state === "pending" && <Button onClick={markApprovedHandler}>Approve</Button>}
              {state === "approved" && (
                <div>
                  <p className="text-success fw-bold h5 mb-0">Approved</p>
                 
                </div>
              )}
             
            </>


         
        </div>
      </div>
    </div>
  );
}

export default ParentMissionCard;


