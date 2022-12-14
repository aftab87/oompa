import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { DarkModeContext, userContext } from "../../App";
import StarBadge from "./Kids/StarBadge";

function MissionCard(props) {
  console.log(props);
  const {chore: { title, description, img, time="7:00PM", kids, _id, points: stars, repitition: date, completedChore  }, onDelete, }= props
  const [user] = useContext(userContext);
  const [darkMode] = useContext(DarkModeContext);
  console.log(user.id);

  function addCompletedChores() {
    alert("so it begins...");
    fetch("http://localhost:3001/completedchores", {
      method: "POST",
      body: JSON.stringify({
        chores_uid: _id,
        parent_uid: parent_uid,
        title: title,
        points: points,
        image: image,
        kids_uid: user.id,
        completed_date: new Date(),
        verified: false,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
  }

  function updateCompletedChores() {
    fetch("http://localhost:3001/completedchores", { method: "PUT" })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
  }
  //ADDS COMPLETED CHORE TO CHORES COMPLETE
  function markCompleteHandler() {
    addCompletedChores();
  }
  //MAKES VERIFIED TRUE AND ADDS POINTS TO KIDS TOTAL
  function verificationHandler() {
    updateCompletedChores();
  }

  const col = " col-12 col-md-6 col-xl-4 col-xxl-3";
  async function markCompleteHandler() {
    //write logic for what happend when CHILD clicks mark complete
   const response = await fetch("http://localhost:3001/completedchores", {
    method: "POST", 
    body: JSON.stringify({
      parent_uid: user.parent_uid,
      chores_uid: _id,
      kids_uid: user.id,
        
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
   }).then(data=>data.json())
   console.log({response})


  }

  let state="available"
  if(completedChore){
    if(!completedChore.verified){
      state ="completed"
    }else
    {
      state="approved"
    }
  }
  // TODO : Extract the Card into a Component for DarkMode
  return (
    <div className={"custom_card" + col}>
      <div className={"drop-shadow bg-white p-3 rounded-4 gap-3 d-flex d-flex flex-column h-100"}>
        <StarBadge className="text-dark" numStars={points} />
        <div className="position-relative text-center">
          <img src={`${image ? image : "/images/mission.svg"}`} className="devImages img-fluid" alt="Developers Heroes" />
          {image && <div className="inner-shadow"></div>}
        </div>
        <div className={"card-body bg-white text-dark text-center d-flex flex-column gap-3" + (darkMode ? " bg-dark" : "")}>
          <div>
            <h5 className="card-title">
              <b>{title}</b>
            </h5>
            <p className="card-text fst-italic small mb-0">{points}</p>
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
              <div className="text-center">
                <p className="text-secondary  fst-italic small mb-0 ">assigned to:</p>
                <h5 className="text-center mb-0">{kids}</h5>
              </div>

              {state === "available" && (
                <div className="d-flex justify-content-center gap-3">
                  <Button as={NavLink} to={"/dashboard/missions/edit?id=" + _id}>Edit</Button>
                </div>
              )}
              {state === "completed" && (
                <div className="d-flex justify-content-center gap-3">
                  <Button variant="success" className="text-light">
                    Approve
                  </Button>
                  <Button onClick={verificationHandler} variant="danger" className="text-light w-45">
                    Reject
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

export default MissionCard