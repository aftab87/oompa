import RewardsCRUDForm from "Components/Forms/RewardCRUDForm";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RewardsForm() {
  const { id } = useParams();

  const [reward, setReward] = useState();

  function callDeleteParams() {
    fetch("http://localhost:3001/rewards/" + id, { method: "DELETE" })
      .then((data) => data.json())
      .then((json) => alert(JSON.stringify(json)));
  }

  useEffect(() => {
    // to fill in based on callPostBody
    fetch("http://localhost:3001/dashboard/rewards/" + id, {
      method: "GET",

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setReward(data);
      });
  }, [id]);

  return (
    <>
      <RewardsCRUDForm reward={reward} title="Edit Reward" />
      <button onClick={callDeleteParams}>Delete Button </button>
    </>
  );
}

export default RewardsForm;
