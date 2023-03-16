const getUserText = require("../utils/getUserText");
const sendMessageByWhatsapp = require("../services/whatsappServices");
const detectedIntent = require("../services/dialogflowServices");

const verifyToken = (req, res) => {
  try {
    let accessToken = process.env.TOKEN;
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    if (challenge !== null && token !== null && token === accessToken) {
      res.send(challenge);
    } else {
      res.status(400).send();
    }
  } catch (error) {
    res.status(400).send();
  }
};

const receivedMessage = async (req, res) => {
  try {
    let entry = req.body["entry"][0];
    let changes = entry["changes"][0];
    let value = changes["value"];
    let messageObj = value["messages"];

    if (typeof messageObj !== "undefined") {
      let messages = messageObj[0];
      let number = messages["from"];
      let numberUser = number.replace("1", "");
      let textUser = getUserText(messages);

      const resultApiDf = await detectedIntent(textUser);

      sendMessageByWhatsapp(numberUser, resultApiDf);
    }

    res.send("EVENT_RECEIVED");
  } catch (error) {
    res.send("EVENT_RECEIVED");
  }
};

module.exports = { verifyToken, receivedMessage };
