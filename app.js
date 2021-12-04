const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");
const path = require("path");
const { spawn } = require("child_process");

app.use(cors());
//app.options('*', cors()) 

let guestList = [];

io.on("connection", (socket) => {
  console.log("Socket ID: " + socket.id);

  socket.on("join_room", (data) => {
    guestList.push(data.guest);
    socket.join(data.room);
    console.log("A User Joined Room: ", data.room);
    console.log("Guest List", guestList);
    socket.to(data.roomName).emit("receive_guest_list", guestList);
  });

  socket.on("leave_room", (data) => {
    socket.leave(data.roomName);
    guestList = guestList.filter((guest) => guest.username !== data.username);
    console.log("User: ", data.username, "leaved Room: " + data.roomName);
    console.log("Guest List", guestList);
    socket.to(data.roomName).emit("receive_guest_list", guestList);
  });

  socket.on("count_guests", (data) => {
    let room = io.sockets.adapter.rooms.get(data);
    if (room) {
      let guestCount = room.size;
      socket.to(data).emit("get_count", guestCount);
    }
  });

  socket.on("send_guest_list", (data) => {
    console.log("received guest list request for room: ", data.roomName);
    console.log("sent to: ", data.alias, "guest list ", guestList);
    io.in(data.roomName).emit("receive_guest_list", guestList);
  });

  socket.on("send_annotations", (data) => {
    data = JSON.parse(data);
    const { username, content, feed } = data;
    console.log("annotations received: ", data);
    socket
      .to(data.roomName)
      .emit("receive_annotations", { username, content, feed });
  });

  socket.on("send_message", (data) => {
    data = JSON.parse(data);
    console.log("message received: ", data);
    socket.to(data.roomName).emit("receive_message", data.messages);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(8080, () => {
  console.log("listening on port 8080");
});
