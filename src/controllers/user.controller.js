const express = require("express")
const User = require("../models/user")
const router=express.Router()

router.get("",async(req,res)=>{
   try {
        const user = await User.find().lean().exec();
        return res.status(200).send(user)
   } catch (error) {
         return res.status(500).send(error);
   }
})
router.post("",async(req,res)=>{
   try {
        const user = await User.create({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          profile_pic: req.file.path
        });
        return res.status(200).send(user)
   } catch (error) {
         return res.status(500).send(user);
   }
})