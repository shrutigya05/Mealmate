import React, { useState, useContext } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import './LoginPopup.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  
  const onLogin = async (event) => {
  event.preventDefault();
  console.log("Form submitted"); // Add this

  let newUrl = `${url}/api/user`;

  if (currState === "Login") {
    newUrl += "/login";
  } else {
    newUrl += "/register";
  }

  console.log("Sending request to:", newUrl); // Debug log
  console.log("Payload:", data); // Debug log

  try {
    const response = await axios.post(newUrl, data);
    console.log("Response:", response); // Debug log

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  } catch (err) {
    alert("Something went wrong. Please try again.");
    console.error("Axios error:", err);
  }
};

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin}  className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='Close' />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <input
              name='name'
              onChange={onChangeHandler}
              value={data.name}
              type='text'
              placeholder='Your Name'
              required
            />
          )}
          <input
            name='email'
            onChange={onChangeHandler}
            value={data.email}
            type='email'
            placeholder='Your Email'
            required
          />
          <input
            name='password'
            onChange={onChangeHandler}
            value={data.password}
            type='password'
            placeholder='Password'
            required
          />
        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type='checkbox' required />
          <p>By continuing, I agree to the Terms and Conditions</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
