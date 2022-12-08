import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { userContext } from "App";

function ParentRewards(props) {
  async function callGetAllRewards() {
    await fetch("http://localhost:3001/dashboard/rewards/" + user.id, { method: "GET" })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => setRewards(json));
  }
  const [rewards, setRewards] = useState(null);
  const [user, setUser] = useContext(userContext);
  const [firstRun, setFirstRun] = useState(true);

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false);
      callGetAllRewards();
    }
  }, [firstRun, rewards]);

  // {rewards && rewards.map((rewards) => <h1 key={rewards._id}>{rewards.title}</h1>)}</>

  return (
    <>
      {rewards &&
        rewards.map((rewards) => (
          <div key={rewards._id} className="p-4 bg-white border m-4 rounded-4">
            <h3>{rewards.title}</h3>
            <p>{rewards.description}</p>
            <Button variant="primary" as={NavLink} to={"/dashboard/rewards/" + rewards._id + "/edit"}>
              edit this reward
            </Button>
          </div>
        ))}

      <div className="p-4 bg-white border m-4 rounded-4">
        <h3>Add Rewards</h3>
        <p>add a reward for your child</p>
        <Button variant="primary" as={NavLink} to="/dashboard/rewards/add">
          Add New Reward
        </Button>
      </div>
      <div className="p-4 bg-white border m-4 rounded-4">
        <h3>Edit Rewards</h3>
        <p>Make changes and/or delete rewards.</p>
        <Button variant="primary" as={NavLink} to="/dashboard/rewards/edit?reward=63912e8d5d9afcff48f748d3">
          Edit Test Reward
        </Button>
      </div>
    </>
  );
}

export default ParentRewards;
