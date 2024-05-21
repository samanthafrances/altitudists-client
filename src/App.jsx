import React from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import { Route, Routes, NavLink, useParams } from "react-router-dom";
import "./App.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ChakraProvider } from "@chakra-ui/react";
import { Socket } from "socket.io-client";
import Home from "./pages/Home";
import Nav from "./components/Nav";


export default App;