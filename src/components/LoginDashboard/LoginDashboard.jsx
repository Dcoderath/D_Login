// src/components/LoginDashboard/LoginDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginDashboard.css';
import { FaInstagram, FaRedditAlien, FaFacebookSquare, FaSnapchatGhost, FaLinkedin } from 'react-icons/fa';
import { SiOpenai, SiTiktok } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';

const LoginDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="login-dashboard-radial-outer">
      <div className="login-dashboard-radial-center">
        <div className="login-dashboard-radial-title">D.login</div>
        {/* Lines for each icon */}
        <div className="login-dashboard-radial-line to" />
        <div className="login-dashboard-radial-line right" />
        <div className="login-dashboard-radial-line bottom" />
        <div className="login-dashboard-radial-line left" />
        <div className="login-dashboard-radial-line topleft" />
        <div className="login-dashboard-radial-line topright" />
        <div className="login-dashboard-radial-line bottomleft" />
        <div className="login-dashboard-radial-line bottomright" />
        {/* Icons at ends of lines */}
        <button className="login-icon-button radial top" onClick={() => navigate('/login')} title="ChatGPT Login">
          <SiOpenai size={40} />
          <span className="login-icon-label">ChatGPT</span>
        </button>
        <button className="login-icon-button radial right" onClick={() => navigate('/instagram')} title="Instagram Login">
          <FaInstagram size={40} color="#E1306C" />
          <span className="login-icon-label">Instagram</span>
        </button>
        <button className="login-icon-button radial bottom" onClick={() => navigate('/facebook')} title="Facebook Login">
          <FaFacebookSquare size={40} color="#1877F3" />
          <span className="login-icon-label">Facebook</span>
        </button>
        <button className="login-icon-button radial left" onClick={() => navigate('/reddit')} title="Reddit Login">
          <FaRedditAlien size={40} color="#FF4500" />
          <span className="login-icon-label">Reddit</span>
        </button>
        {/* Diagonals */}
        <button className="login-icon-button radial topright" onClick={() => navigate('/twitter')} title="Twitter Login">
          <FaXTwitter size={40} color="#1da1f2" />
          <span className="login-icon-label">Twitter</span>
        </button>
        <button className="login-icon-button radial bottomright" onClick={() => navigate('/snapchat')} title="Snapchat Login">
          <FaSnapchatGhost size={40} color="#FFFC00" />
          <span className="login-icon-label">Snapchat</span>
        </button>
        <button className="login-icon-button radial bottomleft" onClick={() => navigate('/linkedin')} title="LinkedIn Login">
          <FaLinkedin size={40} color="#0077b5" />
          <span className="login-icon-label">LinkedIn</span>
        </button>
        <button className="login-icon-button radial topleft" onClick={() => navigate('/tiktok')} title="TikTok Login">
          <SiTiktok size={40} color="#fff" />
          <span className="login-icon-label">TikTok</span>
        </button>
      </div>
    </div>
  );
};

export default LoginDashboard;
