const completedChoresModel = require("../Models/Chores_completed");
const kidsModel = require("../Models/Kids");
const choresModel = require("../Models/Chores");

const createChoresCompletedPaths = (app) => {
  //***************CHORE COMPLETED ADD****************** */
  app.post("/completedchores", async (req, res) => {
    console.log("/completedchores", JSON.stringify(req.body))
    const chores_completed = {
      ...req.body,
      date_completed: new Date(),
      verified: false,
    };
    try {
      const choreCompleted = await completedChoresModel.create(chores_completed);
      res.send(choreCompleted);
    } catch (err) {
      console.log(err);
      res.send({ error: err.message });
    }
  });

  //***************CHORE COMPLETED UPDATE****************** */
  app.put("/completedchores/:id/approve", async (req, res) => {
    const choreCompleted = await completedChoresModel.findById(req.params.id);
    // console.log({ choreCompleted });
    const chore = await choresModel.findById(choreCompleted.chores_uid);
    choreCompleted.verified = true;
    const kid = await kidsModel.findById(choreCompleted.kids_uid);
    kid.points = kid.points + chore.points;

    // const newScore{
    //     points: //////////////TODO

    // };
    try {
      await choreCompleted.save();
      await kid.save();
      res.send(choreCompleted);
    } catch (err) {
      console.log(err);
      res.send({ error: err.message }).status(400);
    }
  });

  // *********GET CHORES COMPLETED*******************
  app.get("/completedchores", async (req, res) => {
    // console.log({ query: req.query });
    const completedChores = await completedChoresModel.find({ parent_uid: req.query.parent_uid });
    const populatedData = await Promise.all(
      completedChores
        .map((c) => c.toObject())
        .map(async (completedChore) => {
          return {
            ...completedChore,
            kid: await kidsModel.findById(completedChore.kids_uid),
            chore: await choresModel.findById(completedChore.chores_uid),
          };
        })
    );
    res.send(populatedData);
  });
};

module.exports = createChoresCompletedPaths;
