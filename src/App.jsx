import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import BuddyPass from "./pages/BuddyPass";
import DestinationDetails from "./pages/DestinationDetails";
import DestinationView from "./pages/DestinationView";
import PinnedDestinations from "./pages/PinnedDestinations";
import { CheckSession } from "./services/Auth";

function App() {
  const [user, setUser] = useState(null);

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
  };

  const handleLogOut = () => {
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkToken();
    }
  }, []);

  let app;

  if (user) {
    app = <Home />;
  } else {
    app = <Login setUser={setUser} />;
  }

  return (
    <div className="App">
      {/* {user ? <Nav user={user} handleLogout={handleLogOut} /> : null } */}
      <Nav user={user} handleLogOut={handleLogOut} />

      <Routes>
        <Route path="/auth/login" element={<Login setUser={setUser} />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/" element={app} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/destinations" element={<DestinationView />} />
        <Route path="/destinations/:id" element={<DestinationDetails />} />
        <Route path="/pinneddestinations" element={<PinnedDestinations />} />
        <Route path="/buddypass" element={<BuddyPass />} />
      </Routes>
    </div>
  );
}
export default App;
