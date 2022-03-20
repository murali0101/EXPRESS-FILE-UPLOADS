const express = require("express");
const Gallery = require("../models/gallery.model");
const router = express.Router();
const uploadDoc = require("../middleware/upload");
router.get("/", async (req, res) => {
  try {
    const gallery = await Gallery.find()
      .populate({ path: "user", select: { first_name: 1, _id: 0 } })
      .lean()
      .exec();
    return res.status(200).send(gallery);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post(
  "/multiple/user_id/:id",
  uploadDoc.any("pictures"),
  async (req, res) => {
    try {
      const filePaths = req.files.map((file) => {
        return file.path;
      });

      const gallery = await Gallery.create({
        pictures: filePaths,
        user: req.params.id,
      });

      return res.status(200).send(gallery);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  }
);

module.exports = router;
