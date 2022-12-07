require("dotenv").config();

const bcrypt = require("bcrypt");
const validator = require("validator");
const saltRounds = 10;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors"); //cross-origin resource sharing
const parentsModel = require("./Models/Parents");
const kidsModel = require("./Models/Kids");

const createChoresCompletedPaths = require('./Repos/Chores_completed');
const createChoresPaths = require('./Repos/Chores');
const createKidsPaths = require('./Repos/Kids');
const createParentPaths = require('./Repos/Parents');
const createRewardsPaths = require('./Repos/Rewards');

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


app.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword)
    try {
        let promises = [];
        // FIXME: send hashed password to validated login
        promises.push(kidsModel.findOne({ username: email }));
        promises.push(parentsModel.findOne({ email: email }));
        // promises.push(parentsModel.find({}).where("email").equals(email));
        // const isSame = await bcrypt.compare(password, user.password);
        await Promise.all(promises).then(results => {
            results.forEach(result => {
                if (result && bcrypt.compare(password, result['password'])) {
                    res.send('yoyo')
                }
            })
            // results.(result => {
            //     // const isSame = bcrypt.compare(password, user.password);
            //     if (result)
            //         res.send({ results: results })
            // })
        })
    } catch (error) {
        res.send({ "error": error })
    }
});


// app.post("/login", async (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     try {
//         const hashedPassword = await bcrypt.hash(password, saltRounds);

//         // promises.push(kidsModel.find({}).where("username").equals(email));
//         const test = await parentsModel.find({

//         }).where("email").equals(email)

//         res.send(test)
//     } catch (err) {
//         res.send({ success: false, msg: err.message })
//     }
// });


createChoresCompletedPaths(app)
createChoresPaths(app)
createKidsPaths(app, validator, bcrypt, saltRounds)
createParentPaths(app, validator, bcrypt, saltRounds)
createRewardsPaths(app)



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
