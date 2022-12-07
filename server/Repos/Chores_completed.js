const completedChoresModel = require("../Models/Chores_completed");
const kidsModel = require("../Models/Kids");
const choresModel = require("../Models/Chores");

const createChoresCompletedPaths = (app) => {
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
}

module.exports = createChoresCompletedPaths;