import { io } from "socket.io-client";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import IndexPage from "./pages/IndexPage";
import Index from "./components/Index";

const socket = io("http://localhost:5000");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <IndexPage socket={socket} /> {/* render the IndexPage component */}
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);