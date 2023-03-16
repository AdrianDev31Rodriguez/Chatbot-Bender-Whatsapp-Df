const express = require("express");
const {
  verifyToken,
  receivedMessage,
} = require("../controllers/whatsappController");
const router = express.Router();

router.get("/", verifyToken).post("/", receivedMessage);

module.exports = router;
