const choresModel = require("../Models/Chores");

const createChoresPaths = (app) => {
  // *********GET CHORE*******************
  app.get("/Chores/:parent_uid", async (req, res) => {
    const parent_uid = req.params.parent_uid;
    const chores = await choresModel.find({}).where("parent_uid").equals(parent_uid);
    res.send(chores);
  });
  app.get("/Chores/kids/:kids_uid", async (req, res) => {
    const kids_uid = req.params.kids_uid;
    const chores = await choresModel.find({ kids: kids_uid });
    res.send(chores);
  });

  // *********ADD CHORE*******************

  app.post("/chores", async (req, res) => {
    const parent_uid = req.body.parent_uid;
    const title = req.body.title;
    const points = req.body.points;
    const image = req.body.image;
    const kids = req.body.kids;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const repetition = req.body.repetition;
    const chores = {
      parent_uid: parent_uid,
      title: title,
      points: points,
      image: image,
      kids: kids,
      start_date: start_date,
      end_date: end_date,
      repetition: repetition,
    };
    try {
      await choresModel.create(chores);
      res.send({ success: true, chores });
      return;
    } catch (err) {
      console.log(err);
    }
    res.send({ success: false });
  });

  // *********UPDATE CHORE*******************
  app.put("/chores", async (req, res) => {
    const filter = { _id: "638ec59468ff75d89808c139" };
    const parent_uid = req.body.parent_uid;
    const title = req.body.title;
    const points = req.body.points;
    const image = req.body.image;
    const kids = req.body.kids;
    const start_date = req.body.start_date;
    const end_date = req.body.end_date;
    const repetition = req.body.repetition;
    const update = {
      parent_uid: parent_uid,
      title: title,
      points: points,
      image: image,
      kids: kids,
      start_date: start_date,
      end_date: end_date,
      repetition: repetition,
    };
    try {
      await choresModel.findOneAndUpdate(filter, update);
    } catch (err) {
      console.log(err);
    }
    res.send(update);
  });
  //*********DELETE CHORE******************* */

  app.delete("/chores", async (req, res) => {
    const results = await choresModel.deleteOne({ _id: "638e50e3f865950f20bf73f0" });
    res.send(results);
  });
};

module.exports = createChoresPaths;
