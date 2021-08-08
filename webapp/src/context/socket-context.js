import React, { createContext, useReducer, useContext } from "react";
import socketClient from "socket.io-client";
// const SERVER = "http://127.0.0.1:8080";
const SERVER = "wss://path.prr.ai/ws";

const SocketStateContext = createContext();
const SocketDispatchContext = createContext();
const socket = socketClient(SERVER, { transports: ["websocket"] });

const defaultState = {
  username: "",
  alias: "",
  roomName: "",
  guestCount: 1,
  guestList: [],
  annotations: {},
  socket: socket,
  color: "",
};

const SocketReducer = (state, action) => {
  switch (action.type) {
    case "updateSocketDetails": {
      return {
        ...state,
        username: action.username,
        roomName: action.roomName,
      };
    }
    case "updateAnnotations": {
      return {
        ...state,
        annotations: action.annotations,
      };
    }
    case "updateGuestDetails": {
      return {
        ...state,
        guestCount: action.guestCount,
        guestList: action.guestList,
      };
    }
    default: {
      throw new Error(`Unhandled action type ${action.type}`);
    }
  }
};

const SocketProvider = ({ initialState = defaultState, children }) => {
  const [state, dispatch] = useReducer(SocketReducer, initialState);
  return (
    <SocketStateContext.Provider value={state}>
      <SocketDispatchContext.Provider value={dispatch}>
        {children}
      </SocketDispatchContext.Provider>
    </SocketStateContext.Provider>
  );
};

const useSocketState = () => {
  const context = useContext(SocketStateContext);
  if (context === undefined) {
    throw new Error(
      "useSocketState must be used within a FabricOverlayProvider"
    );
  }
  return context;
};

const useSocketDispatch = () => {
  const context = useContext(SocketDispatchContext);
  if (context === undefined) {
    throw new Error("useSocketDispatch must be used within SocketProvider");
  }
  return context;
};

export { SocketProvider, useSocketState, useSocketDispatch };
