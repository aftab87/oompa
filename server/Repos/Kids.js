const kidsModel = require("../Models/Kids");
const parentsModel = require("../Models/Parents");

const createKidsPaths = (app, validator, bcrypt, saltRounds) => {
  // *********UPDATE KID*******************
  // *********GET KIDS*******************
  app.get("/kids/:parent_uid", async (req, res) => {
    const parent_uid = req.params.parent_uid;
    const kids = await kidsModel.find({}).where("parent_uid").equals(parent_uid);
    res.send(kids);
  });

  app.get("/kid/:uid", async (req, res) => {
    const uid = req.params.uid;
    const kids = await kidsModel.findById(uid)
    res.send(kids);
  });

  //*********ADD KID ******************* */
  app.post("/kids", async (req, res) => {
    console.log('post', 'Creating user')
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
          res.send({ success: false, msg: `Username ${username} is already taken` });
          return;
        } else {
          const hashedPassword = await bcrypt.hash(password, saltRounds);
          console.log("Registering username " + username);
          // const kid = {
          //   parent_uid: parent_uid,
          //   username: username,
          //   password: hashedPassword,
          //   first_name: first_name,
          //   avatar: avatar,
          //   points: points,
          // };
          // await kidsModel.create(kid);
          // await parentsModel.findOneAndUpdate({ _id: parent_uid }, { $addToSet: parent });
          let kid = new kidsModel()
          kid.parent_uid = parent_uid
          kid.username = username
          kid.password = hashedPassword
          kid.first_name = first_name
          kid.avatar = avatar
          kid.points = points
          kid.save((err, insertedKid) => {
            if (err) {
              res.send({ success: false, msg: err.message })
              return;
            }
            const parent = {
              kids: [insertedKid._id],
            };
            parentsModel.findOneAndUpdate({ _id: parent_uid }, { $addToSet: parent });
            res.send({ success: true, kid: insertedKid })
          })
          return;
        }
      }
    } catch (err) {
      console.log(err.message);
    }
    res.send({ success: false });
  });

  app.put("/kids/:id", async (req, res) => {
    const parent_uid = req.body.parent_uid;
    const username = req.body.username;
    const password = req.body.password;
    const first_name = req.body.first_name;
    const avatar = req.body.avatar;
    const points = req.body.points;

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    let kid = {}

    if (parent_uid)
      kid.parent_uid = parent_uid
    if (username)
      kid.username = username
    if (password && hashedPassword)
      kid.password = hashedPassword
    if (first_name)
      kid.first_name = first_name
    if (avatar)
      kid.avatar = avatar
    if (points)
      kid.points = points

    console.log(kid)

    try {
      await kidsModel.findByIdAndUpdate(req.params.id, kid)
      res.send({ success: true })
    } catch (err) {
      console.log(err);
      res.send({ success: false });
    }
    // kid.save((err, insertedKid) => {
    //   if (err) {
    //     res.send({ success: false, msg: err.message })
    //     return;
    //   }
    //   const parent = {
    //     kids: [insertedKid._id],
    //   };
    //   // parentsModel.findOneAndUpdate({ _id: parent_uid }, { $addToSet: parent });
    //   res.send({ success: true, kid: insertedKid })
    // })



    // if (username && validator.isAlphanumeric(username) && password) {
    //   // Check to see if the user already exists. If not, then create it.
    //   const user = await kidsModel.findOne({ username: username });
    //   if (user) {
    //     console.log("Invalid registration - username " + username + " already exists.");
    //     res.send({ success: false });
    //     return;
    //   } else {
    //     const hashedPassword = await bcrypt.hash(password, saltRounds);
    //     console.log("Registering username " + username);

    //     const update = {
    //       parent_uid: parent_uid,
    //       username: username,
    //       password: hashedPassword,
    //       first_name: first_name,
    //       avatar: avatar,
    //       points: points,
    //     };

    //     await kidsModel.findOneAndUpdate(filter, update);
    //     return;
    //   }
    // }
  });

  //*********DELETE KID******************* */

  app.delete("/kids/:id", async (req, res) => {
    const results = await kidsModel.findByIdAndRemove(req.params.id)
    res.send({ success: true, kid: results });
  });
};

module.exports = createKidsPaths;
