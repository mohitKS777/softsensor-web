import { createSlice } from "@reduxjs/toolkit";
import socketClient from "socket.io-client";

const SERVER = "http://127.0.0.1:8080";

const socket = socketClient(SERVER, { transports: ["websocket"] });

const socketSlice = createSlice({
  name: "socket",
  initialState: {
    username: "",
    alias: "",
    roomName: "",
    guestCount: 1,
    guestList: [],
    annotations: {},
    socket: socket,
    color: "",
  },
  reducers: {
    updateSocketDetails: (state, action) => {
      state.username = action.payload.username;
      state.roomName = action.payload.roomName;
      state.alias = action.payload.alias;
    },
    updateAnnotations: (state, action) => {
      state.annotations = action.payload.annotations;
    },
    updateGuestDetails: (state, action) => {
      state.guestCount = action.payload.guestCount;
      state.guestList = action.payload.guestList;
    },
  },
});

export const {
  updateSocketDetails,
  updateAnnotations,
  updateGuestDetails,
} = socketSlice.actions;

export default socketSlice.reducer;
