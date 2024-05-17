import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
    return (
    <div className="App">
        <Route path="/" component={Home} />
        <Route path="/chats" />
        </div>
    );
  }

export default App;