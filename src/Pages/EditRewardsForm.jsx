import RewardsCRUDForm from "Assets/Forms/RewardCRUDForm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";




function RewardsForm() {
  const {id} = useParams();
  
  const [reward,setReward ] = useState();
 

  useEffect(() => {
 // to fill in based on callPostBody
   fetch("http://localhost:3001/rewards/"+id, {
    method: "GET",

    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
  })
  .then((data) => data.json()).then((data)=>{setReward(data)})
  },[id])

   



  return (
    <div>
        <h1>Edit Reward: {id} </h1>
      
        <RewardsCRUDForm reward={reward} />
    </div>
  );
}

export default RewardsForm;