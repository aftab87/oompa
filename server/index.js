require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors"); //cross-origin resource sharing
const choresModel = require("./Models/Chores");

const app = express();
const port = 3001; // Must be different from the port of the React app

app.use(cors()); // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

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

// API POST

app.post("/chores", async (req, res) => {
  const parent_uid = req.body.parent_uid;
  const title = req.body.title;
  const points = req.body.points;
  const image = req.body.image;
  const kids = req.body.kid;
  const start_date = req.body.start_date;
  const end_date = req.body.endDate;
  const repetition = req.body.repetition;
  const chore = {
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
    await choresModel.create(chore);
  } catch (err) {
    console.log(err);
  }
  res.send(chore);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
