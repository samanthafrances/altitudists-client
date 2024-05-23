import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import { io } from "socket.io-client";
//const socket = io("http://localhost:5000");

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element= {< Home />} exact />
        <Route path="/chats" component={ < Chat /> } />
    </Routes>
      </div>
  );
}

export default App;