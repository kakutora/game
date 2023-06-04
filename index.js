var express = require("express");
const fs = require("fs");
var app = express();
var http = require("http").Server(app);
const io = require("socket.io")(http);
const PORT = process.env.PORT || 7000;

http.listen(PORT, function () {
  console.log("server listening. Port:" + PORT);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/");
});

app.get("/room", function (req, res) {
  res.sendFile(__dirname + "/views/room/");
});

app.get("/canvas", function (req, res) {
  res.sendFile(__dirname + "/views/canvas/");
});


app.use("/js", express.static(__dirname + "/js/"));

app.use(
  "/io",
  express.static(__dirname + "/node_modules/socket.io/client-dist/")
);

io.on("connection", function (socket) {
  socket.on("msg", function (val) {
    io.emit("msg", val);
  });
});
io.on("connection", function (socket) {
  let room = "";
  let name = "";
  socket.on("join", function (data) {
    room = data;
    socket.join(room);
  });
  socket.on("tw", function (data) {
    io.to(room).emit("tw_res", data);
    console.log(data);
  });
});
/*--------------------*/
