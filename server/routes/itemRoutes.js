const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController");
const upload = require("../middleware/upload");

router.post(
"/create",
upload.single("image"),
itemController.createItem
);


router.get("/", itemController.getItems);

router.delete("/:id", itemController.deleteItem);


module.exports = router;