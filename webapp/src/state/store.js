import { configureStore } from "@reduxjs/toolkit";
import socketReducer from "./reducers/socketReducer";
import fabricOverlayReducer from "./reducers/fabricOverlayReducer";
import textReducer from "./reducers/textReducer";
import drawReducer from "./reducers/drawReducer";
import shapeReducer from "./reducers/shapeReducer";
import colorReducer from "./reducers/colorReducer";
import drawerReducer from "./reducers/drawerReducer";

const store = configureStore({
  reducer: {
    socketState: socketReducer,
    fabricOverlayState: fabricOverlayReducer,
    textState: textReducer,
    drawState: drawReducer,
    shapeState: shapeReducer,
    colorState: colorReducer,
    drawerState: drawerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
