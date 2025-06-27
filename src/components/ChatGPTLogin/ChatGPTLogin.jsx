import React from 'react';
import './ChatGPTLogin.css';

const ChatGPTLogin = () => {
  return (
    <div className="chatgpt-login-container">
      <div className="chatgpt-login-box">
        <h2 className="chatgpt-login-title">Welcome back</h2>
        <p className="chatgpt-login-subtitle">Log in to your ChatGPT account</p>
        <form className="chatgpt-login-form">
          <input
            type="email"
            placeholder="Email address"
            className="chatgpt-login-input"
          />
          <input
            type="password"
            placeholder="Password"
            className="chatgpt-login-input"
          />
          <button type="submit" className="chatgpt-login-button">
            Log in
          </button>
        </form>
        <div className="chatgpt-login-footer">
          <a href="#">Forgot password?</a>
          <span>·</span>
          <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTLogin;
