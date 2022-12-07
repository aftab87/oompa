const rewardsModel = require("../Models/Rewards");

const createRewardsPaths = (app) => {
  // ==========================  REWARDS CRUD ==========================================
  // Reward POST
  app.post("/rewards", async (req, res) => {
    // const parent_uid = req.body.parent_uid;
    const kids = req.body.kids;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const points = req.body.points;
    //const parentuid = req.user_id
    const rewards = {
      // parent_uid: parent_uid,
      kids: kids,
      title: title,
      description: description,
      image: image,
      points: points,
      //parent_uid: parentuid
    };
    try {
      await rewardsModel.create(rewards);
      res.send(rewards);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  });

  // Reward PUT
  app.put("/rewards/:id", async (req, res) => {
    // const parent_uid = req.body.parent_uid;
    const id = req.params.id;
    const kids = req.body.kids;
    const title = req.body.title;
    const description = req.body.description;
    const image = req.body.image;
    const points = req.body.points;
    //const parentuid = req.user_id
    const rewardData = {
      // parent_uid: parent_uid,
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

  // Reward GET
  app.get("/rewards/:id", async (req, res) => {
    // const parent_uid = req.body.parent_uid;
    const id = req.params.id;

    try {
      const reward = await rewardsModel.findById(id);

      res.send(reward);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  });

  app.get("/rewards/", async (req, res) => {
    try {
      const rewards = await rewardsModel.find();

      res.send(rewards);
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  });

  app.delete("/rewards/:id", async (req, res) => {
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
};

module.exports = createRewardsPaths;
