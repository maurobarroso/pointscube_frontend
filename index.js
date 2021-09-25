const express = require("express");
const path = require("path");
const app = express();

//definir el root de la aplicacion
app.use(express.static("build"));

app.get("*", function (req, res) {
  res.sendFile("index.html", {
    root: path.join(__dirname, "/build"),
  });
});

//Escuchar puerto 3000
app.listen(3000);
