import { Socket } from "socket.io-client";
import React, { useEffect, useState } from "react";
import { Route, Routes, NavLink, useParams } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

const socket = Socket("https://altitudists-backend-bd7306004527.herokuapp.com/m");

function App() {
  useEffect(() => {
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <ChakraProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home socket={socket} />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;