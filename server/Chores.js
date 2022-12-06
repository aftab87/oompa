export async function addChore(req, res, choresModel) {
  const parent_uid = req.body.parent_uid;
  const title = req.body.title;
  const points = req.body.points;
  const image = req.body.image;
  const kids = req.body.kids;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;
  const repetition = req.body.repetition;
  const funny = req.body.funny;
  const chore = {
    parent_uid: parent_uid,
    title: title,
    points: points,
    image: image,
    kids: kids,
    start_date: start_date,
    end_date: end_date,
    repetition: repetition,
    funny: funny,
  };
  try {
    await choresModel.create(chore);
  } catch (err) {
    console.log(err);
  }
  res.send(chore);
}
