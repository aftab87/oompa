
const kidsModel = require("../Models/Kids");
const parentsModel = require("../Models/Parents");

const createKidsPaths = (app, validator, bcrypt, saltRounds) => {// *********UPDATE KID*******************
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

}

module.exports = createKidsPaths;