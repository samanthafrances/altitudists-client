import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;