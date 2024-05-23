import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Client from "../services/api";
import { Link } from "react-router-dom";
import { SignInUser } from "../services/Auth";

const LoginForm = (props) => {
  const navigation = useNavigate();
  const [userInfo, setUserInfo] = useState();

  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChanges = (event) => {
    setLoginCredentials({ ...loginCredentials, [event.target.name]: event.target.value });
  };

  const handleFormSubmission = async (event) => {
    event.preventDefault();
    try {
      const userLoginData = {
        email: loginCredentials.email,
        password: loginCredentials.password,
      };

      const response = await SignInUser(userLoginData);

      props.setUser(response);
      navigation("/");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div className="signin flex-col max-container">
      <h1>Sign In</h1>
      <div className="card-overlay flex-col centered">
        <form className="wrapper flex-col" onSubmit={handleFormSubmission}>
          <div className="input-wrapper">
            <input
              onChange={handleInputChanges}
              name="email"
              type="email"
              placeholder="Your Email"
              value={loginCredentials.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleInputChanges}
              type="password"
              name="password"
              placeholder="Password"
              value={loginCredentials.password}
              required
            />
          </div>
          <button
            className="btn-primary"
            disabled={!loginCredentials.email || !loginCredentials.password}
          >
            Sign In
          </button>
        </form>
        <Link to="/auth/register">
          <button className="btn-primary">Create Account</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;