const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  profile_pic: { type: String, required: true },
},{
  timestamps:true,
  versionKey:false
});
const User = mongoose.model("user", userSchema);
module.exports = User;
//  first_name last_name profile_pic ( can be 1 only )
