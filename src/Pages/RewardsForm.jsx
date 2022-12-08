import RewardsCRUDForm from "Assets/Forms/RewardCRUDForm";
import React, { useRef, useState } from 'react';


function RewardsForm() {
  // const reward_uidRef = useRef(value);
  // const kids_uidRef = useRef();
  // const date_redeemedRef = useRef();
  // const date_deliveredRef = useRef();
  
  const reward_uidRef = "testing";
  const kids_uidRef = "Hello";
  const date_redeemedRef = "2022-12-09";
  const date_deliveredRef = "2022-11-09";

  const [rewardHistoryId, setRewardHistoryId] = useState()

  const registeringRewardHistory = (event) => {
    const url = "http://localhost:3001/rewards/kids";


    event.preventDefault(); // prevent page reload
    // to fill in based on callPostBody
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        reward_uid: reward_uidRef,
        kids_uid: kids_uidRef,
        date_redeemed: date_redeemedRef,
        date_delivered: date_deliveredRef,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json()).then(data=>setRewardHistoryId(data._id))
  };



const modifyReward = ()=>{
  
  const url = "http://localhost:3001/rewards/kids/"+ rewardHistoryId;

  fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      should_persist:true
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((data) => data.json())
}


  return (
    <>
      <div>
        <RewardsCRUDForm title="Add Reward" />
      </div>
      <button onClick={registeringRewardHistory}>Create Reward</button>
      <button onClick={modifyReward}>Modify Reward</button>
    </>
  );
}

export default RewardsForm;