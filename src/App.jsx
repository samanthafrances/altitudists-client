import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./App.css";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={Home} exact />
        <Route path="/chats" component={Chat} />
      </div>
    </Router>
  );
}


export default App;