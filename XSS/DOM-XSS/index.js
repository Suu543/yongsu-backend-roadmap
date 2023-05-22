const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  let ind = fs.readFileSync(__dirname + "/index.html");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(ind);
});

app.get("/js", (req, res) => {
  res.sendFile(__dirname + "/src.js");
});

app.get("/:hash", (req, res) => {
  console.log("Hash");
  res.send("<h1>Hello</h1>");
});

app.listen(8080);

console.log("Listen to 8080");

//res.setHeader("Content-Security-Policy", "script-src http://localhost:8080")
