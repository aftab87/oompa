import React from "react";


function DevCard(props) {

    return (
        <div className="cards">
            <div class="card" style={{width:"18rem"}}>
                <img src={`/images/${props.img}`} class="devImages" alt="Developers Heroes" />
                    <div class="card-body text-center">
                        <h5 class="card-title"><b>{props.title}</b></h5>
                        <p class="card-text">{props.description}</p>
                    </div>
            </div>
        </div>
    )
}

export default DevCard;