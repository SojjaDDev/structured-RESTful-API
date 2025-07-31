
const express = require("express");
const control = require("../controller/array-controller.js");
const router = express.Router();


router.get("/", control.getArray);
router.get("/:id", control.getArrayByID);
router.post("/", control.postArray)
router.put("/:id", control.putArray);
router.delete("/:id",control.deleteArray);

module.exports = router;
