import { userContext } from "App";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";

function ProgressBar({ points }) {
  const [user, setUser] = useContext(userContext);
  console.log(user);
  const utp = user.points;
  let percent = (utp / points) * 100;
  let color = "bg-info";
  if (percent >= 100) {
    percent = 100;
    color = "bg-success";
    //a claim button
  }

  return (
    <>
      <div>
        <div class="progress">
          <div
            style={{ width: `${percent}%` }}
            class={`progress-bar ${color} mb-0`}
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow={points}
            aria-valuemin="0"
            aria-valuemax={points}
          ></div>
        </div>
        <p className="mb-0">
          <img className="me-1" src="/images/star.svg" alt="" width="18px" />
          <span className="pt-2" style={{ verticalAlign: "middle" }}>
            <b>{utp + "/" + points}</b>
          </span>
        </p>
      </div>
      <div className="d-flex justify-content-center">{percent >= 100 && <Button onClick={markCompleteHandler}>Claim</Button>}</div>
    </>
  );
}

export default ProgressBar;

function markCompleteHandler() {
  alert("Marked Complete");
}
