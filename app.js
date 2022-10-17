// const express = require("express");
// const server = express();
//
// server.use(express.static(__dirname + "/public"));
//
// server.get("/", (req, res) => {
//
//     res.sendFile(__dirname + "/index.html");
// });
//
// server.get("/about", (req, res) => {
//     res.sendFile(__dirname + "/about.html");
// });
//
// server.listen(3000, (err) => {
//     if (err) return console.log(err);
//     console.log("The server is listening on port 3000");
// });

const mongoose = require("mongoose");
const MONGODB_URL =
    "mongodb+srv://test:test1234@education.wnf4ybm.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(
MONGODB_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connect to database successfully");
        }
    }
);

