const express = require("express");
const app = express();
const SERVER_PORT = 3000;
app.use(express.static("public"));
app.use(express.json());
app.listen(SERVER_PORT, function () {
    console.log("listening on : " + SERVER_PORT);
});

// Datas....
const messagesData = [];
const userName = [
    {username:'sothoun',password: "1234"},
    {username:'somoun',password: "1111"}
]

// get input  from client send push to datas..
app.post("/messages", (req, res) => {
    let item = req.body;
    messagesData.push(item);
    res.send(messagesData);
    console.log(messagesData);

})

// send data to client 
app.get("/messages", (req, res) => {
    res.send(messagesData)
})

// use to login......
app.post("/login",(req,res)=>{
    let name = req.body.name;
    let password = req.body.password;
    let isValid = false;
    for (user of userName) {
        if (user.username === name && user.password === password) {
            isValid = true;
        }
    }
    res.send(isValid);
})