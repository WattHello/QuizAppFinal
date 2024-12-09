import React, { useState } from 'react';
import './Auth.css';
import { useAuth } from '../../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const { username, email, password, AuthDispatch } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInput = (type, value) => {
    AuthDispatch({ type, payload: value });
  };

  const handleSignform = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      Invalid("All fields are required.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        username,
        email,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);

      if (response.status === 200) {
        AuthDispatch({ type: "TOKEN", payload: token });
        notify();
        navigate('/');
      }
    } catch (err) {
      const message = err.response?.data?.message || "Something went wrong. Please try again.";
      Invalid(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const notify = () => {
    toast.success("Signup Successful", {
      position: toast.POSITION.TOP_CENTER,
      theme: "dark",
      autoClose: 1000,
    });
  };

  const Invalid = (text) => {
    toast.error(text, {
      position: toast.POSITION.TOP_CENTER,
      theme: "dark",
      autoClose: 1000,
    });
  };

  return (
    <div className="Auth-form-container">
      <ToastContainer />
      <h2 className="login-head">Sign Up</h2>
      <form className="form-element" onSubmit={handleSignform}>
        <div className="form-container">
          <label htmlFor="username" className="input-name">Username</label>
          <input
            type="text"
            id="username"
            className="form-input"
            placeholder="Username"
            value={username || ''}
            onChange={(e) => handleInput("USERNAME", e.target.value)}
            aria-label="Username"
          />
        </div>
        <div className="form-container">
          <label htmlFor="email" className="input-name">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="example@gmail.com"
            value={email || ''}
            onChange={(e) => handleInput("EMAIL", e.target.value)}
            aria-label="Email"
          />
        </div>
        <div className="form-container">
          <label htmlFor="password" className="input-name">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Password"
            value={password || ''}
            onChange={(e) => handleInput("PASSWORD", e.target.value)}
            aria-label="Password"
          />
        </div>
        <button
          type="submit"
          className="form-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
