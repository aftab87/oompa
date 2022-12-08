import React, { useState, useEffect } from "react";

function DisplayRewards() {
  async function callGetAllRewards() {
    await fetch("http://localhost:3001/rewards/26", { method: "GET" })
      .then((data) => data.json())
      .then((json) => json)
      .then((json) => setRewards(json));
  }

  const [rewards, setRewards] = useState(null);
  useEffect(() => {
    callGetAllRewards();
  }, [rewards]);

  return <>{rewards && rewards.map((rewards) => <h1 key={rewards._id}>{rewards.title}</h1>)}</>;
}

export default DisplayRewards;

// Reward GET
// app.get("/rewards/:id", async (req, res) => {
//     // const parent_uid = req.body.parent_uid;
//     const id = req.params.id;

//     try {
//       const reward = await rewardsModel.findById(id);

//       res.send(reward);
//     } catch (err) {
//       console.log(err);
//       res.status(400).send({ message: err.message });
//     }
//   });
