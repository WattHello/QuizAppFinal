import React from 'react';
import './Auth.css';
import { useAuth } from '../../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function AuthLogin() {
  const navigate = useNavigate();
  const { email, password, token, AuthDispatch } = useAuth();
  console.log('Auth context values:', { email, password, token });
  console.log('AuthDispatch:', AuthDispatch);

  const handleEmail = (e) => {
    AuthDispatch({
      type: "EMAIL",
      payload: e.target.value
    });
  };

  const handlePassword = (e) => {
    AuthDispatch({
      type: "PASSWORD",
      payload: e.target.value
    });
  };

  const handleLoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email: email,
        password: password
      });

      const { data, status } = response;
      if (data && data.token && data.username) {
        const { token, username } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        if (status === 200) {
          navigate('/');
          notify();
        }
        AuthDispatch({ type: "TOKEN", payload: token });
        AuthDispatch({ type: "USERNAME", payload: username });
      } else {
        console.error('Unexpected response structure:', data);
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        const message = err.response.data.message;
        Invalid(message);
      } else {
        console.error('Error occurred:', err);
        Invalid('An unknown error occurred');
      }
    }
  };

  const notify = () => {
    toast.success("Login Successfully", {
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
    <div className='Auth-form-container'>
      <h2 className="login-head">Login</h2>
      <form className='form-element' onSubmit={handleLoginForm}>
        <div className="form-container">
          <label htmlFor="email" id="email-label">
            <span className="input-name">Email</span>
          </label>
          <input type="email" id="email" className='form-input' placeholder='email@example.com' value={email} onChange={handleEmail} />
        </div>
        <div className="form-container">
          <label htmlFor="password" id="password-label">
            <span className="input-name">Password</span>
          </label>
          <input type="password" id="password" className='form-input' placeholder='Enter Password' value={password} onChange={handlePassword} />
        </div>
        <button className='form-button'>Login</button>
        <ToastContainer />
      </form>
    </div>
  );
}

export default AuthLogin;
