const router = require("express").Router();
const Note = require("./models/note");
const Transformer = require("./transformers");
const JsonApi = require("./jsonApi");
// req.protocol + "://" + req.get("host") + req.originalUrl;
router.get("/note", async (req, res) => {
  const notes = await Note.find();
  const response = JsonApi(Transformer.note(notes), Note);
  res.json(response);
});

router.get("/note/:id", async ({ params: { id } }, res) => {
  const notes = await Note.findOne({ _id: id });
  const response = JsonApi(Transformer.note(notes), Note);

  res.json(response);
});

router.post("/note", async ({ body }, res) => {
  const note = await Note.create(body);
  const response = JsonApi(Transformer.note(note), Note);
  res.json(response);
});

router.put("/note/:id", async ({ params: { id }, body }, res) => {
  const opts = {
    runValidators: true,
    new: true
  };
  const note = await Note.findByIdAndUpdate(id, body, opts);
  const response = JsonApi(Transformer.note(note), Note);
  res.json(response);
});

// router.patch("/note/:id");

module.exports = router;
