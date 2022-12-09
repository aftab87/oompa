import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { DarkModeContext, userContext } from "../../App";
import Image from "./Cards/Image";
import ProgressBar from "./Cards/ProgressBar";
import TitleAndDescription from "./Cards/TitleAndDescription";
import StarBadge from "./Kids/StarBadge";

function RewardCard({ reward, date, time, refresh, _id }) {
  console.log(reward);
  const { description, image, kids, points, title, parent_uid, claimed_kids } = reward;

  const [user, setUser] = useContext(userContext);
  const [darkMode] = useContext(DarkModeContext);
  const col = " col-12 col-md-6 col-xl-4 col-xxl-3";
  const state = claimed_kids.find((k) => k._id === user._id) ? "claimed" : "available";

  const claimReward = async () => {
    await fetch(`http://localhost:3001/dashboard/rewards/${reward._id}/claim`, {
      body: JSON.stringify({ kid_uid: user.id }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      method: "put",
    });
    setUser({ ...user, points: user.points - points });
    if (refresh) {
      refresh();
    }
  };
  // TODO : Extract the Card into a Component for DarkMode
  return (
    <div className={"custom_card" + col}>
      <div className={"drop-shadow bg-white p-3 rounded-4 gap-3 d-flex d-flex flex-column h-100"}>
        <StarBadge className="text-dark" numStars={points} />
        <Image image={image} />
        <div className={"card-body bg-white text-dark text-center d-flex flex-column gap-3" + (darkMode ? " bg-dark" : "")}>
          <TitleAndDescription title={title} description={description} />

          {user.type === "kid" && (
            //Possible Missions Card states for Kids
            <>
              {state === "available" && <ProgressBar points={points} />}
              {state === "available" && user.points > points && (
                <div className="d-flex justify-content-center">
                  {" "}
                  <Button onClick={claimReward}>Claim</Button>
                </div>
              )}
              {state === "claimed" && (
                <div>
                  <p className="text-success fw-bold h5 mb-0">CLAIMED</p>
                </div>
              )}
            </>
          )}

          {user.type === "parent" && (
            //Possible Missions Card states for Parents

            <>
              <div className="text-center">
                <p className="text-secondary  fst-italic small mb-0 ">assigned to:</p>
                <h5 className="text-center mb-0">
                  {kids.forEach((element) => {
                    console.log(element);
                  })}
                </h5>
              </div>

              {(claimed_kids.length < kids.length || kids.length === 0) && (
                <div className="d-flex justify-content-center gap-3">
                  {console.log("IDDDD" + reward._id) /* <Button>Edit</Button> */}

                  <Button as={NavLink} to={"/dashboard/rewards/edit?id=" + reward._id}>
                    Edit
                  </Button>
                </div>
              )}
              <div>
                {claimed_kids.length}/ {kids.length} kids claimed
              </div>

              {/* {state === "claimed" && (
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
                  <p className="text-warning fw-bold h5 mb-0">FULFILLED</p>
                </div>
              )} */}
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
