const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    pictures: [{ type: String, required: true }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Gallery = mongoose.model("gallery", gallerySchema);
module.exports = Gallery;
//  first_name last_name profile_pic ( can be 1 only )
