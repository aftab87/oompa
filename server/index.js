require("dotenv").config();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors"); //cross-origin resource sharing

// +++++++++++++++++++++++++++++++++++++++++ Chores Constants+++++++++++++++++++++++++++++++++

const choresModel = require("./Models/Chores");
const kidsModel = require("./Models/Kids");
const Kids = require("./Models/Kids");
const ChoresCompletedModel = require("./Models/Chores_completed");


// +++++++++++++++++++++++++++++++++++++++++ Rewards Constants+++++++++++++++++++++++++++++++++
const rewardsModel = require("./Models/Rewards");


const app = express();
const port = 3001; // Must be different from the port of the React app

app.use(cors()); // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(express.json()); // Allows express to read a request body
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//mongodb+srv://aftab514:<password>@cluster0.zljjuju.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://<username>:<password>@cluster0.ke8kg2c.mongodb.net/OompaDb?retryWrites=true&w=majority
mongoose.connect("mongodb+srv://" + process.env.MONGODB_USERNAME + ":" + process.env.MONGODB_PWD + "@cluster0.ke8kg2c.mongodb.net/OompaDb?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// *********ADD CHORE*******************

app.post("/chores/add", async (req, res) => {
  const parent_uid = req.body.parent_uid;
  const title = req.body.title;
  const points = req.body.points;
  const image = req.body.image;
  const kids = req.body.kids;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;
  const repetition = req.body.repetition;
  const funny = req.body.funny;
  const chores = {
    parent_uid: parent_uid,
    title: title,
    points: points,
    image: image,
    kids: kids,
    start_date: start_date,
    end_date: end_date,
    repetition: repetition,
    funny: funny,
  };
  try {
    await choresModel.create(kids);
  } catch (err) {
    console.log(err);
  }
  res.send(chores);
});

// *********UPDATE CHORE*******************
app.post("/chores/update", async (req, res) => {
  const filter = { _id: "638e50e3f865950f20bf73f0" };
  const parent_uid = req.body.parent_uid;
  const title = req.body.title;
  const points = req.body.points;
  const image = req.body.image;
  const kids = req.body.kids;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;
  const repetition = req.body.repetition;
  const funny = req.body.funny;
  const update = {
    parent_uid: parent_uid,
    title: title,
    points: points,
    image: image,
    kids: kids,
    start_date: start_date,
    end_date: end_date,
    repetition: repetition,
    funny: funny,
  };
  try {
    await choresModel.findOneAndUpdate(filter, update);
  } catch (err) {
    console.log(err);
  }
  // res.send(update);
});

//*********ADD KID TEST******************* */
app.post("/kids/addkid", async (req, res) => {
  const name = req.body.name;

  const kid = {
    name: name,
  };
  try {
    await kidsModel.create(kid);
  } catch (err) {
    console.log(err);
  }
  res.send(kid);
});

//***************CHORE COMPLETED ADD****************** */
app.post("/chores/completed", async (req, res) => {
  const chores_uid = req.body.chores_uid;
  // const title = req.body.title;
  // const points = req.body.points;
  // const image = req.body.image;
  const kids_uid = req.body.kids_uid;
  const date_completed = req.body.date_completed;
  const verified = req.body.verified;
  const chores_completed = {
    //   title: title,
    //   points: points,
    //   image: image,
    chores_uid: chores_uid,
    kids_uid: kids_uid,
    date_completed: date_completed,
    verified: verified,
  };
  try {
    await choresModel.create(chores_completed);
  } catch (err) {
    console.log(err);
  }
  res.send(chores_completed);
});

//                                                 ==========================  REWARDS CRUD ==========================================

app.post("/rewards/add", async (req, res) => {
  const parent_uid = req.body.parent_uid;
  const kids = req.body.kids;
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;
  const points = req.body.points;
  const should_persist = req.body.should_persist;

  const rewards = {
    parent_uid: parent_uid,
    kids: kids,
    title: title,
    description: description,
    image: image,
    points: points,
    should_persist: should_persist,
  };
  try {
    await rewardsModel.create(rewards);
  } catch (err) {
    console.log(err);
  }
  res.send(rewards);
});




app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
