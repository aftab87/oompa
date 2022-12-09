import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { userContext } from "App";
import MissionCard from "../MissionCard";
import RewardCard from "../RewardCard";

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

  return (
    <>
      <Button variant="primary" as={NavLink} to="/dashboard/rewards/add">
        Add New Reward
      </Button>
      <div className="row g-3">
        {/*!!!!!!!!!!! Temp mapping multiple times to pass missing data as props. Once we know what we need, we can adjust the model */}
        <div className="row g-3">{rewards && rewards.map((reward) => <RewardCard key={reward._id} reward={reward} date="" time=""  />)}</div>
        {/* <div className="row g-3">{rewards && rewards.map((reward) => <RewardCard key={reward._id} reward={reward} date="" time="" state="claimed" />)}</div>
        <div className="row g-3">{rewards && rewards.map((reward) => <RewardCard key={reward._id} reward={reward} date="" time="" state="approved" />)}</div>
        <div className="row g-3">{rewards && rewards.map((reward) => <RewardCard key={reward._id} reward={reward} date="" time="" state="" />)}</div> */}
      </div>

      <div className="p-4 bg-white border m-4 rounded-4">
        <h3>Test Edit Rewards</h3>
        <p>Make changes and/or delete rewards.</p>
        <Button variant="primary" as={NavLink} to="/dashboard/rewards/edit?reward=63912e8d5d9afcff48f748d3">
          Edit Test Reward
        </Button>
      </div>
    </>
  );
}

export default ParentRewards;
