const rewardsModel = require("../Models/Rewards");
const parentsModel = require("../Models/Parents");
const kidsModel = require("../Models/Kids");

const createRewardsPaths = (app) => {
  // ==========================  REWARDS CRUD ==========================================
  // Reward POST
  app.post("/dashboard/rewards", async (req, res) => {
    const parent_uid = req.body.parent_uid;
    const kids = req.body.kids;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const points = req.body.points;
    //const parentuid = req.user_id
    const rewards = {
      parent_uid: parent_uid,
      kids: kids,
      title: title,
      description: description,
      image: image,
      points: points,
      //parent_uid: parentuid
    };
    try {
      await rewardsModel.create(rewards);
      res.send({ success: true, rewards: rewards });
    } catch (err) {
      console.log(err);
      res.status(400).send({ success: false, message: err.message });
    }
  });

  // Reward PUT
  app.put("/dashboard/rewards/:id", async (req, res) => {
    // const parent_uid = req.body.parent_uid;
    const id = req.params.id;
    const kids = req.body.kids;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const points = req.body.points;
    //const parentuid = req.user_id
    const rewardData = {
      // parent_uid: "26",
      kids: kids,
      title: title,
      description: description,
      image: image,
      points: points,
      //parent_uid: parentuid
    };
    try {
      const reward = await rewardsModel.findById(id);
      await reward.update(rewardData);
      res.send(reward.populate());
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  });

  // Reward GET by PARENT
  app.get("/dashboard/rewards/:id", async (req, res) => {
    // const parent_uid = req.body.parent_uid;
    const id = req.params.id;

    try {
      const reward = await rewardsModel.find({}).where("parent_uid").equals(id);

      res.send(reward);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  });

  // Reward GET by KIDS
  app.get("/dashboard/rewards/kids/:kid_uid", async (req, res) => {
    const kid_uid = req.params.kid_uid;

    try {
      const reward = await rewardsModel.find({ kids: kid_uid });

      res.send(reward);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  });
  app.get("/dashboard/reward/:reward_id", async (req, res) => {
    // const parent_uid = req.body.parent_uid;
    const reward_id = req.params.reward_id;

    try {
      const reward = await rewardsModel.find({}).where("_id").equals(reward_id);

      res.send(reward);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  });

  app.get("/dashboard/rewards/", async (req, res) => {
    try {
      const rewards = await rewardsModel.find();

      res.send(rewards);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  });

  app.delete("/dashboard/rewards/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const reward = await rewardsModel.findById(id);
      await reward.delete();
      res.send(reward);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  });
  app.put("/dashboard/rewards/:id/claim", async (req, res) => {
    // const parent_uid = req.body.parent_uid;
    const id = req.params.id;

    const kid_uid = req.body.kid_uid;

    //const parentuid = req.user_id

    try {
      const reward = await rewardsModel.findById(id);
      const kid = await kidsModel.findById(kid_uid);
      kid.points = kid.points - reward.points;
      if (reward.claimed_kids) {
        if (!reward.claimed_kids.includes(kid_uid)) {
          reward.claimed_kids.push(kid_uid);
        }
      } else {
        reward.claimed_kids = [kid_uid];
      }
      await reward.save();
      await kid.save();
      res.send(reward);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  });
};

module.exports = createRewardsPaths;
