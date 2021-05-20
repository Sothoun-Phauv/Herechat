const express = require("express");
const app = express();
const SERVER_PORT = 3000;

app.use(express.static("public"));

app.listen(SERVER_PORT, function () {
    console.log("listening on : " + SERVER_PORT);
});