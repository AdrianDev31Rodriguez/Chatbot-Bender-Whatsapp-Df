# Chatbot "Bender" con Whatsapp Cloud Api y Dialogflow

Este es un proyecto de Node JS version 18 y Express donde se hace uso de la api de Whatsapp oficial para crear un chatbot. Para la parte de la inteligencia artificial utilice la api de Dialogflow.

Pasos para utilizarlo:

1.- Clone el proyecto o descarguelo desde mi repositorio.

2.- Una vez descargado mediante su terminal escriba el comando npm i para que se cree la carpeta node_modules.

3.- Entre en la plataforma de Meta Developers para hacer uso de la api de whatsapp. Lo unico que necesita es el token y el identificador del telefono de prueba que brinda el equipo de Meta.

4.- Cree su chatbot en la plataforma de Dialogflow y descargue sus credenciales en formato json de la plataforma de google, y en el archivo chatbotConfig, reemplace los campos con los que le trae su archivo.json.

5.- Necesitará que su api rest de su aplicacion de Node JS sea publica, utilice ngrok para que luego pueda ingresarlo en la configuracion de webhook en la plataforma de Meta Developers junto con un token suyo, este puede ser cualquiera que desees y se coloca en la variable accessToken en el archivo whatsappController.js y este mismo token se coloca en la configuracion del webhook al momento de ingresar la url publica para que cuando dé click en el boton pueda hacer el match con su proyecto.

6.- Listo. Ya puede conversar con su chatbot. OJO: debe haber creado sus intents en la plataforma de Dialogflow para luego hacer sus pruebas.
