const express = require("express");
const { createUser } = require("../controller/usercontrol");
const router=express.Router();


router.post('/register',createUser);
module.exports=router;