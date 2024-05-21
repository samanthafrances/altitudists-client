import { io } from "socket.io-client";

const URL = process.env.NODE_ENV === "production" ? "https://altitudists-backend-bd7306004527.herokuapp.com/" : "http://localhost:4000";

export const socket = io(URL, {
  transports: ["websocket"],
  upgrade: false,
  secure: true,
});

socket.on("connect", () => {
  console.log("Connected to socket server");
});

socket.on("disconnect", () => {
  console.log("Disconnected from socket server");
});