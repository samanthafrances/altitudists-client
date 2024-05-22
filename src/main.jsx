import { io } from "socket.io-client";
import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./pages/index.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const socket = io("http://localhost:3001");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Index socket={socket} />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);