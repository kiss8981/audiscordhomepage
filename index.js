const http = require("http");
const settings = require("./settings.json");
const express = require("express");
const app = express();
const server = http.createServer(app);
const port = process.env.PORT;
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render('index', { bot: settings.website })
})

app.get("/commands", (req, res) => {
  res.render("commands", {bot: settings.website, commands: settings.commands })
})
app.get("/donate", (req, res) => {
  res.render("donate", {bot: settings.website })
})

const listener = server.listen(port, function() {
    console.log("Your app is listening on port " + port);
})
