require("dotenv").config();

const bcrypt = require("bcrypt");
const validator = require("validator");
const saltRounds = 10;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors"); //cross-origin resource sharing

// +++++++++++++++++++++++++++++++++++++++++ Chores Constants+++++++++++++++++++++++++++++++++

const choresModel = require("./Models/Chores");
const kidsModel = require("./Models/Kids");
const parentsModel = require("./Models/Parents");
const completedChoresModel = require("./Models/Chores_completed");


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

// *********GET CHORE*******************
app.get("/chores", async (req, res) => {
  const chores = await choresModel.find({}).where("parent_uid").equals("26");
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
  } catch (err) {
    console.log(err);
  }
  res.send(chores);
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

// *********GET KIDS*******************
app.get("/kids", async (req, res) => {
  const kids = await kidsModel.find({}).where("parent_uid").equals("26");
  res.send(kids);
});

//*********ADD KID ******************* */
app.post("/kids", async (req, res) => {
  const parent_uid = req.body.parent_uid;
  const username = req.body.username;
  const password = req.body.password;
  const first_name = req.body.first_name;
  const avatar = req.body.avatar;
  const points = req.body.points;
  try {
    if (username && validator.isAlphanumeric(username) && password) {
      // Check to see if the user already exists. If not, then create it.
      const user = await kidsModel.findOne({ username: username });
      if (user) {
        console.log("Invalid registration - username " + username + " already exists.");
        res.send({ success: false });
        return;
      } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Registering username " + username);
        const parent = {
          kids: [username],
        };
        const kid = {
          parent_uid: parent_uid,
          username: username,
          password: hashedPassword,
          first_name: first_name,
          avatar: avatar,
          points: points,
        };
        await parentsModel.findOneAndUpdate({ _id: parent_uid }, { $addToSet: parent });
        await kidsModel.create(kid);
        return;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
  res.send({ success: false });
});

//***************CHORE COMPLETED ADD****************** */
app.post("/completedchores", async (req, res) => {
  const chores_uid = req.body.chores_uid;
  const parents_uid = req.body.parents_uid;
  const kids_uid = req.body.kids_uid;
  const date_completed = req.body.date_completed;
  const verified = req.body.verified;
  const chores_completed = {
    chores_uid: chores_uid,
    parents_uid: parents_uid,
    kids_uid: kids_uid,
    date_completed: date_completed,
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

// *********UPDATE KID*******************
app.put("/kids", async (req, res) => {
  const filter = { _id: "638f78b0654917c51566c027" };
  const parent_uid = req.body.parent_uid;
  const username = req.body.username;
  const password = req.body.password;
  const first_name = req.body.first_name;
  const avatar = req.body.avatar;
  const points = req.body.points;
  try {
    if (username && validator.isAlphanumeric(username) && password) {
      // Check to see if the user already exists. If not, then create it.
      const user = await kidsModel.findOne({ username: username });
      if (user) {
        console.log("Invalid registration - username " + username + " already exists.");
        res.send({ success: false });
        return;
      } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Registering username " + username);

        const update = {
          parent_uid: parent_uid,
          username: username,
          password: hashedPassword,
          first_name: first_name,
          avatar: avatar,
          points: points,
        };

        await kidsModel.findOneAndUpdate(filter, update);
        return;
      }
    }
  } catch (err) {
    console.log(err);
  }
  res.send({ success: false });
});

//*********DELETE KID******************* */

app.delete("/kids", async (req, res) => {
  const results = await kidsModel.deleteOne({ _id: "638e4ab2f990c22c9c69b549" });
  res.send(results);
});

// *********GET Parents*******************
app.get("/parents", async (req, res) => {
  const chores = await parentsModel.find({}).where("email").equals("elmo@gmail.com");
  res.send(chores);
});

//*********ADD Parent ******************* */
app.post("/Parents", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const isVerified = req.body.isVerified;
  const appellation = req.body.appellation;
  const avatar_uid = req.body.avatar_uid;

  try {
    if (email && validator.isEmail(email) && password && validator.isStrongPassword(password)) {
      // Check to see if the user already exists. If not, then create it.
      const user = await parentsModel.findOne({ email: email });
      if (user) {
        console.log("Invalid registration - email " + email + " already exists.");
        res.send({ success: false });
        return;
      } else {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log("Registering email " + email);

        const parent = {
          email: email,
          password: hashedPassword,
          isVerified: isVerified,
          avatar_uid: avatar_uid,
          appellation: appellation,
        };

        await parentsModel.create(parent);
        return;
      }
    }
  } catch (err) {
    console.log(err.message);
  }
  res.send({ success: false });
});

//*********UPDATE Parent ******************* */
app.put("/parents", async (req, res) => {
  const filter = { _id: "638f902ea634d211e1791f28" };
  const password = req.body.password;
  const isVerified = req.body.isVerified;
  const appellation = req.body.appellation;
  const avatar_uid = req.body.avatar_uid;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log("updating username " + (await parentsModel.findOne(filter)).email);

    const update = {
      password: hashedPassword,
      isVerified: isVerified,
      avatar_uid: avatar_uid,
      appellation: appellation,
    };

    await parentsModel.findOneAndUpdate(filter, update);
    return;
  } catch (err) {
    console.log(err);
  }
  res.send({ success: false });
});

//*********DELETE Parent******************* */

app.delete("/parents", async (req, res) => {
  const results = await parentsModel.deleteOne({ email: "elmo@gmail.com" });
  res.send(results);
});

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
    res.status(400).send({ message: err.message })
  }

});

// Reward PUT 
app.put("/rewards/:id", async (req, res) => {
  // const parent_uid = req.body.parent_uid;
  const id = req.params.id
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
    const reward = await rewardsModel.findById(id)
    await reward.update(rewardData);
    res.send(reward.populate());
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message })
  }

});

// Reward GET 
app.get("/rewards/:id", async (req, res) => {
  // const parent_uid = req.body.parent_uid;
  const id = req.params.id

  try {
    const reward = await rewardsModel.findById(id)

    res.send(reward);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message })
  }

});


app.get("/rewards/", async (req, res) => {



  try {
    const rewards = await rewardsModel.find()

    res.send(rewards);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message })
  }

});




app.delete("/rewards/:id", async (req, res) => {
  try {
    const id = req.params.id
    const reward = await rewardsModel.findById(id)
    await reward.delete();
    res.send(reward);

  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message })
  }
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
