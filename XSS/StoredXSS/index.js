const express = require("express");
const fs = require("fs");
const app = express();

const posts = [];
let id = 0;
app.use(express.json());
app.use(express.static("public"));

// POST
app.get("/js", (req, res) => {
  res.sendFile(__dirname + "/src.js");
});

app.get("/", (req, res) => {
  let ind = fs.readFileSync(__dirname + "/index.html");
  const s = posts.reduce((a, c) => {
    return (
      a +
      `<div class="post"><a href=http://localhost:8080/posts/${c.id}>${c.title}</a></div>`
    );
  }, "");
  ind = ind.toString().replace("<!-- posts -->", s);
  res.send(ind);
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.get("/posts/:id", (req, res) => {
  let ind = fs.readFileSync(__dirname + "/post.html");
  let post = posts.findIndex((obj) => obj.id == req.params.id);
  console.log("postID: ", req.params.id);
  let s =
    "<div><h1>" +
    req.params.id +
    "-" +
    posts[post].title +
    "</h1><p>" +
    posts[post].content +
    "</p></div>";

  ind = ind.toString().replace("<!-- post -->", s);

  res.send(ind);
});

app.post("/posts", (req, res) => {
  console.log("body: ", req.body);

  posts.push({
    title: req.body.title,
    content: req.body.content,
    id: id++,
  });

  res.send({ success: true });
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
