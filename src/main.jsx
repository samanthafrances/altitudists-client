import { io } from "socket.io-client";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Index from "./pages/index";

const socket = io("http://localhost:5000");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Index socket={socket} /> {}
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);