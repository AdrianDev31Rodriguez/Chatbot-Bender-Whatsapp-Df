const axios = require("axios");

const tokenWhatsapp = process.env.TOKEN_WHATSAPP;
const id_telefono = process.env.ID_TELEFONO;

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
      `https://graph.facebook.com/v15.0/${id_telefono}/messages`,
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
