import React from "react";
import { Button } from "react-bootstrap";
function MetaForKids({ state }) {
  return (
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
  );
}

export default MetaForKids;

function markCompleteHandler() {
  //write logic for what happend when CHILD clicks mark complete
  alert("TODO:execute mark complete logic");
}
