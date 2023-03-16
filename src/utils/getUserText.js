const getUserText = (messages) => {
  let text = "";

  let typeMessage = messages["type"];

  if (typeMessage === "text") {
    text = messages["text"]["body"];
  } else if (typeMessage === "interactive") {
    let interactiveObj = messages["interactive"];
    let typeInteractive = interactiveObj["type"];

    if (typeInteractive === "button_reply") {
      text = interactiveObj["button_reply"]["title"];
    } else if (typeInteractive === "list_reply") {
      text = interactiveObj["list_reply"]["title"];
    } else {
      console.log("No hay mensaje");
    }
  } else {
    console.log("No hay mensaje");
  }

  return text;
};

module.exports = getUserText;
