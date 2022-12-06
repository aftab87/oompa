import React from "react";

function MockRewardLandingPage() {
    function callDeleteParams() {
        fetch("http://localhost:3001/rewards/:id", { method: "DELETE" })
          .then((data) => data.json())
          .then((json) => alert(JSON.stringify(json)));
      }
      
  return (
    <div>
      <h1> This is the Email Confirmation Page</h1>
    <button id="abcd"  onClick={callDeleteParams}></button>
    </div>
  );
}

export default MockRewardLandingPage;

// DELETE Reward
