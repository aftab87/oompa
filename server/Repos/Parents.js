
const parentsModel = require("../Models/Parents");

const createParentPaths = (app, validator, bcrypt, saltRounds) => {
    // *********GET Parents*******************
    app.get("/parents", async (req, res) => {
        const chores = await parentsModel.find({}).where("email").equals("elmo@gmail.com");
        res.send(chores);
    });

    //*********ADD Parent ******************* */
    app.get("/parents", async (req, res) => {
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
}

module.exports = createParentPaths;