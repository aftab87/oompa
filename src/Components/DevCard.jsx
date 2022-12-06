import React, { useContext } from "react";
import { DarkModeContext } from "../App";

function DevCard(props) {
  const [darkMode] = useContext(DarkModeContext);
  const col = " col-12 col-md-6 col-lg-3 ";
  // TODO : Extract the Card into a Component for DarkMode
  return (
    <div className={"custom_card" + col}>
      <div className={"drop-shadow p-3 rounded-4 gap-3 d-flex d-flex flex-column"}>
        <div className="position-relative">
          <img src={`/images/${props.img}`} className="devImages img-fluid" alt="Developers Heroes" />
          <div className="inner-shadow"></div>
        </div>
        <div className={"card-body text-center" + (darkMode ? " bg-dark" : "")}>
          <h5 className="card-title">
            <b>{props.title}</b>
          </h5>
          <p className="card-text fst-italic small">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default DevCard;
