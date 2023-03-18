# Chatbot "Bender" with Whatsapp Cloud Api and Dialogflow Api

This is a Node JS version 18 and Express project where the official WhatsApp api is used to create a chatbot. For the artificial intelligence part use the Dialogflow api.

Steps to use it:

1.- Clone the project or download it from my repository.

2.- Once downloaded through your terminal type the npm i command to create the node_modules folder.

3.- Enter the Meta Developers platform to make use of the whatsapp api. All you need is the token and test phone identifier provided by the Meta team.

4.- In the whatsappServices.js file, put a = in the tokenWhatsapp variable and paste the token you obtained from the Meta Developers platform.

5.- Create your chatbot on the Dialogflow platform and download your credentials in json format from the google platform, and in the chatbotConfig file, replace the fields with the ones your .json file brings you.

6.- You will need your rest api of your Node JS application to be public, use ngrok so that you can then enter it in the webhook configuration on the Meta Developers platform along with a token of yours, this can be whatever you want and is placed in the variable accessToken in the whatsappController.js file and this same token is placed in the webhook configuration when entering the public url so that when you click on the button you can match with your project.

7.- Ready. You can now chat with your chatbot. NOTE: you must have created your intents in the Dialogflow platform to then do your tests.
