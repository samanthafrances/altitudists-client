import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/chats" component={Chat} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
