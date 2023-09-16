// Création et configuration du serveur HTTP avec express
const express = require('express');
const app = express();
require('dotenv').config();


app.use(express.urlencoded({ extended: true }));


// On affiche une page de test
app.get('/', (request, response) => {
    response.send('Hello World!')
        });


// On met le serveur en mode écoute sur le port défini dans le .env 
const port = process.env.EXPRESS_SERVER_PORT || 8080;
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});