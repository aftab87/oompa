const completedChoresModel = require("../Models/Chores_completed");
const kidsModel = require("../Models/Kids");
const choresModel = require("../Models/Chores");

const createChoresCompletedPaths = (app) => {
  //***************CHORE COMPLETED ADD****************** */
  app.post("/completedchores", async (req, res) => {
    const chores_uid = req.body.chores_uid;
    const parent_uid = req.body.parent_uid;
    const title = req.body.title;
    const points = req.body.points;
    const image = req.body.image;
    const kids = req.body.kids_uid;
    const completed_date = new Date();
    const verified = req.body.verified;
    const chores_completed = {
      chores_uid: chores_uid,
      parent_uid: parent_uid,
      title: title,
      points: points,
      image: image,
      kids_uid: kids,
      completed_date: completed_date,
      verified: verified,
    };
    try {
      await completedChoresModel.create(chores_completed);
    } catch (err) {
      console.log(err);
    }
    res.send(chores_completed);
  });

  //***************CHORE COMPLETED UPDATE****************** */
  app.put("/completedchores", async (req, res) => {
    const completedChoreFilter = { _id: "638fc3fe0c705dfbfc2dbab6" };
    const kidsFilter = { _id: "638f78b0654917c51566c027" };
    const chore = await choresModel.findById({ _id: "638ec59468ff75d89808c139" });
    const kid = await kidsModel.findById(kidsFilter);

    const newScore = kid.points + chore.points;
    const update = {
      verified: true,
    };
    // const newScore{
    //     points: //////////////TODO

    // };
    try {
      await kidsModel.findOneAndUpdate(kidsFilter, { points: newScore });
      await completedChoresModel.findOneAndUpdate(completedChoreFilter, update);
    } catch (err) {
      console.log(err);
    }
    res.send(update);
  });

  // *********GET CHORES COMPLETED*******************
  app.get("/completedchores", async (req, res) => {
    const CompletedChores = await completedChoresModel.find({}).where("parent_uid").equals("638f90e7a634d211e1791f2c");
    res.send(CompletedChores);
  });
};

module.exports = createChoresCompletedPaths;
