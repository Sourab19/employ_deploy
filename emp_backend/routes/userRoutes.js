const express = require("express");
const router = express.Router();
const jwt =require('jsonwebtoken');
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const userModel = require("../model/userData");
router.post('/login', async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      if (user.password == req.body.password) {
        const payload={email:user.email,password:user.password}
        const token2=jwt.sign(payload,'empApp2');
        res.status(200).send({message:"User login successfull",token:token2})

      } else {
        res.status(404).send({message:'Invalid credentials'});
      }
    }
  } catch (error) {
    res.status(404).send("Error");
  }


});

module.exports = router;
