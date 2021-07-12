import { createSlice } from "@reduxjs/toolkit";
import { brandColors } from "../../styles/brandPalette";

const getLocalUserCanvases = () => {
  const userCanvases = window.localStorage.getItem("userCanvases");
  if (!userCanvases) {
    window.localStorage.setItem("userCanvases", JSON.stringify({}));
    return {};
  } else {
    return JSON.parse(userCanvases);
  }
};

const fabricOverlaySlice = createSlice({
  name: "fabricOverlay",
  initialState: {
    activeTool: null,
    activeUserCanvas: "",
    color: brandColors[0],
    fabricOverlay: null,
    isToolbarVisible: true,
    isToolSettingsVisible: false,
    userCanvases: getLocalUserCanvases(),
    viewer: null,
    username: "",
    roomName: "",
  },
  reducers: {
    toggleToolbarVisible: (state, action) => {
      state.isToolSettingsVisible = action.payload;
    },
    toggleToolSettingsVisible: (state) => {
      state.isToolSettingsVisible = !state.isToolSettingsVisible;
    },
    updateActiveUserCanvas: (state, action) => {
      state.activeUserCanvas = action.payload;
    },
    updateColor: (state, action) => {
      state.color = action.payload;
    },
    updateOverlay: (state, action) => {
      state.fabricOverlay = action.payload.fabricOverlay;
      state.viewer = action.payload.viewer;
    },
    updateTool: (state, action) => {
      state.activeTool = action.payload.tool;
    },
    updateUserCanvases: (state, action) => {
      state.activeUserCanvas = action.payload.activeUserCanvas;
      state.userCanvases = action.payload.userCanvases;
    },
    updateSocketDetails: (state, action) => {
      state.username = action.payload.username;
      state.roomName = action.payload.roomName;
    },
  },
});

export const {
  toggleToolbarVisible,
  toggleToolSettingsVisible,
  updateActiveUserCanvas,
  updateColor,
  updateOverlay,
  updateTool,
  updateUserCanvases,
  updateSocketDetails,
} = fabricOverlaySlice.actions;

export default fabricOverlaySlice.reducer;
