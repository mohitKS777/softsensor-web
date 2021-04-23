// import { createContext } from 'react';
// import socketClient from 'socket.io-client';
// const SERVER = 'http://127.0.0.1:8080';

// export const socket = socketClient(SERVER, {transports: ['websocket']});
// export const SocketContext = createContext();

import React from "react";
import { SocketProvider } from "../context/socket-context";

export default function SocketWrapper({ children }) {
  return <SocketProvider>{children}</SocketProvider>;
}
