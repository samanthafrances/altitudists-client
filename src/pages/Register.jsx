import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Client from "../services/api";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUserInfo = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      await Client.post("/auth/register", newUserInfo);
      navigate("/auth/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="signin flex-col max-container">
      <h1>
        Create <br /> Your Altitudists Account
      </h1>
      <div className="form-wrapper centered">
        <form className="wrapper" onSubmit={handleFormSubmit}>
          <div className="input-wrapper">
            <input
              onChange={handleInputChange}
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleInputChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={formData.email}
              required
            />
          </div>

          <div className="input-wrapper">
            <input
              onChange={handleInputChange}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
              onChange={handleInputChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              required
            />
          </div>
          <button
            className="btn-primary"
            type="submit"
            disabled={
              !formData.email ||
              (!formData.password &&
                formData.confirmPassword === formData.password)
            }
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;