import { configureStore } from "@reduxjs/toolkit";
import socketReducer from "./reducers/socketReducer";
import fabricOverlayReducer from "./reducers/fabricOverlayReducer";
import textReducer from "./reducers/textReducer";
import drawReducer from "./reducers/drawReducer";
import shapeReducer from "./reducers/shapeReducer";
import colorReducer from "./reducers/colorReducer";
import drawerReducer from "./reducers/drawerReducer";
import feedReducer from "./reducers/feedReducer";
import shareReducer from "./reducers/shareReducer";
import paletteReducer from "./reducers/paletteReducer";
import zoomReducer from "./reducers/zoomReducer";
import chatReducer from "./reducers/chatReducer";
import viewerReducer from "./reducers/viewerReducer";
import projectReducer from "./reducers/projectReducer";
import newProjectReducer from "./reducers/newProjectReducer";
import medicalApiSlice from "./api/medicalApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import authReducer from "./reducers/authReducer";
import dashboardReducer from "./reducers/dashboardReducer";

const store = configureStore({
  reducer: {
    socketState: socketReducer,
    // fabricOverlay_A: fabricOverlayReducer_A,
    // fabricOverlay_B: fabricOverlayReducer_B,
    fabricOverlayState: fabricOverlayReducer,
    textState: textReducer,
    drawState: drawReducer,
    shapeState: shapeReducer,
    colorState: colorReducer,
    drawerState: drawerReducer,
    feedState: feedReducer,
    shareState: shareReducer,
    paletteState: paletteReducer,
    zoomState: zoomReducer,
    chatState: chatReducer,
    viewerState: viewerReducer,
    newProjectState: newProjectReducer,
    projectState: projectReducer,
    authState: authReducer,
    [medicalApiSlice.reducerPath]: medicalApiSlice.reducer,
    dashboardState: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(medicalApiSlice.middleware),
});

export default store;
