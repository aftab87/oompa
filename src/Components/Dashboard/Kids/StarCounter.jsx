import React, { useContext, useState } from "react";
import { userContext } from "App";

function StarCounter({ numStars }) {
  const [user, setUser] = useContext(userContext);

  return (
    <div className="d-flex gap-1 justify-content-end align-items-start">
      <img className="img-fluid" src="../images/star.svg" alt="button icon" /> x <p className="fw-bold h2">{user.points}</p>
    </div>
  );
}

export default StarCounter;
