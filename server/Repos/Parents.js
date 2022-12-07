
const parentsModel = require("../Models/Parents");

const createParentPaths = (app, validator, bcrypt, saltRounds) => {
    // *********GET Parents*******************
    app.get("/parents", async (req, res) => {
        res.send(await parentsModel.find({}).where("email").equals(req.params.email))
    });

    //*********ADD Parent ******************* */
    app.post("/parents", async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        const isVerified = req.body.isVerified;
        const appellation = req.body.appellation;
        const avatar_uid = req.body.avatar_uid;

        try {
            // TODO: if (email && validator.isEmail(email) && password && validator.isStrongPassword(password)) {
            if (email && validator.isEmail(email)) {
                // Check to see if the user already exists. If not, then create it.
                const user = await parentsModel.findOne({ email: email });
                if (user) {
                    console.log("Invalid registration - email " + email + " already exists.");
                    res.send({ success: false, msg: "Invalid registration - email " + email + " already exists." });
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
            } else {
                res.send({ success: false, msg: "something went wrong" });
            }
        } catch (err) {
            res.send({ success: false, msg: err.message })
        }
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