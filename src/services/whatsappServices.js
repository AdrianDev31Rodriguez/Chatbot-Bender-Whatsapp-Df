const axios = require("axios");

const tokenWhatsapp = process.env.TOKEN_WHATSAPP;

async function sendMessageByWhatsapp(number, response) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenWhatsapp}`,
    },
  };

  const data = {
    messaging_product: "whatsapp",
    to: number,
    text: {
      body: response,
    },
    type: "text",
  };

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v15.0/112991084932519/messages`,
      data,
      config
    );

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    return `Error: ${error}`;
  }
}

module.exports = sendMessageByWhatsapp;
