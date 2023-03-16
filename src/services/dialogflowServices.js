const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");
const config = require("../config/chatbotConfig");

const projectId = config.project_id;

CONFIGURATION = {
  credentials: {
    private_key: config.private_key,
    client_email: config.client_email,
  },
};

const sessionClient = new dialogflow.SessionsClient(CONFIGURATION);

const detectedIntent = async (queryText) => {
  const sessionId = uuid.v4();
  const sessionPath = sessionClient.projectAgentSessionPath(
    projectId,
    sessionId
  );

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: queryText,
        languageCode: "en-US",
      },
    },
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;

  return result.fulfillmentText;
};

module.exports = detectedIntent;
