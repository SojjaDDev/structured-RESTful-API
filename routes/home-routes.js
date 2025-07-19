const express = require("express");
const router = express.Router();
const control = require("../controller/home-controller");

router.get("/", control.printHelloWorld);

module.exports = router;
