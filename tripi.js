const express = require("express");
const app = express();

app.get("/sweet", (req, res) => {
res.send("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvIw1KhDlFr6_Y-KWJB3uJ9RjKraBgbRgwfQ&s'>")
})

app.listen(4000, () => {
console.log("App is working <3")
})
