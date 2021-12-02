const express = require('express');

const User = require("../models/user.model");
const Admin = require("../models/admin.model");
const sendMail = require("../utils/send-mail");

const router = express.Router();

router.post("", async (req, res) => {
    try {
      const user = await User.create(req.body);
      sendMail("abc.com",`${user.email}`,`Welcome to ABC system ${user.first_name} ${user.last_name}`,`Hi ${user.first_name}, Please confirm your email address`)

     const admins = await Admin.find().lean().exec();
     admins.forEach(admin =>{
         sendMail("abc.com",`${admin.email}`,
         `${user.first_name} ${user.last_name} has registered with us`,
         `Please welcome ${user.first_name} ${user.last_name}`)
     })
      return res.status(201).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.get("", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
  
      return res.send({ users });
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.status(200).send(user);
    } catch (e) {
      return res.status(500).json({ message: e.message, status: "Failed" });
    }
  });
  module.exports = router;