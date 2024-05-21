import "./App.css";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";

const App = () => {
    return (
    <div className="App">
        <Route path="/" component={Home} />
        <Route path="/chats" component={Chat} />
        </div>
    );
  }

export default App;