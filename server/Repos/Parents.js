const parentsModel = require("../Models/Parents");

const createParentPaths = (app, validator, bcrypt, saltRounds) => {
  // *********GET Parents*******************
  app.get("/parents", async (req, res) => {
    res.send(await parentsModel.find({}).where("email").equals(req.params.email))
  });

  app.get("/parent/:uid", async (req, res) => {
    const uid = req.params.uid;
    const parent = await parentsModel.findById(uid)
    res.send(parent);
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
          res.send({ success: false, msg: `${email} is already registered!` });
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
          res.send({ success: true, parent: parent })
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
  app.put("/parents/:id", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const isVerified = req.body.isVerified;
    const appellation = req.body.appellation;
    const avatar_uid = req.body.avatar_uid;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let parent = {}

    if (email)
      parent.email = email
    if (password && hashedPassword)
      parent.password = hashedPassword
    if (isVerified)
      parent.isVerified = isVerified
    if (appellation)
      parent.appellation = appellation
    if (avatar_uid)
      parent.avatar_uid = avatar_uid

    try {
      await parentsModel.findByIdAndUpdate(req.params.id, parent)

      res.send({ success: true })
    } catch (err) {
      console.log(err);
      res.send({ success: false });
    }
  });

  //*********DELETE Parent******************* */

  app.delete("/parents/:id", async (req, res) => {
    const results = await parentsModel.findByIdAndRemove(req.params.id)
    res.send({ success: true, parent: results });
  });
};

module.exports = createParentPaths;
