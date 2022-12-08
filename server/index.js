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

    try {
        const kid = await kidsModel.findOne({ username: email })
        const kidMatch = kid && await bcrypt.compare(password, kid.password);

        const parent = await parentsModel.findOne({ email: email })
        const parentMatch = parent && await bcrypt.compare(password, parent.password);

        // FIXME: send hashed password to validated login
        if (kidMatch)
            res.send({ success: true, user: kid, isParent: false })
        else if (parentMatch) {
            res.send({ success: true, user: parent, isParent: true })
        } else {
            res.send({ success: false, msg: "Invalid login" })
        }
    } catch (err) {
        res.send({ success: false, msg: 'error: ' + err.message })
    }
});

createChoresCompletedPaths(app)
createChoresPaths(app)
createKidsPaths(app, validator, bcrypt, saltRounds)
createParentPaths(app, validator, bcrypt, saltRounds)
createRewardsPaths(app)



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
