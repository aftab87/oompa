import React, { useContext } from "react";
import { DarkModeContext } from "../App";


function DevCard(props) {

    const [darkMode] = useContext(DarkModeContext);

    // TODO : Extract the Card into a Component for DarkMode
    return (
        <div className="cards">
            <div className="card" style={{ width: "18rem" }}>
                <img src={`/images/${props.img}`} className="devImages" alt="Developers Heroes" />
                <div className={"card-body text-center" + (darkMode ? " bg-dark" : "")}>
                    <h5 className="card-title"><b>{props.title}</b></h5>
                    <p className="card-text">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default DevCard;