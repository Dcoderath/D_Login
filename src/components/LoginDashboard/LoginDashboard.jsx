// src/components/LoginDashboard/LoginDashboard.jsx
import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import './LoginDashboard.css';
import { FaInstagram, FaRedditAlien, FaFacebookF, FaSnapchatGhost, FaLinkedinIn, FaGithub, FaTwitter, FaSpotify } from 'react-icons/fa';
import { SiOpenai, SiTiktok, SiFirebase, SiNetflix, SiDiscord } from 'react-icons/si';
import "@fontsource/press-start-2p";

const icons = [
  { icon: <FaInstagram color="#E1306C" />, route: "/instagram", label: "Instagram" },
  { icon: <FaFacebookF color="#1877F3" />, route: "/facebook", label: "Facebook" },
  { icon: <SiOpenai color="#10a37f" />, route: "/login", label: "ChatGPT" },
  { icon: <FaRedditAlien color="#FF4500" />, route: "/reddit", label: "Reddit" },
  { icon: <FaTwitter color="#1DA1F2" />, route: "/twitter", label: "Twitter/X" },
  { icon: <FaSnapchatGhost color="#FFFC00" />, route: "/snapchat", label: "Snapchat" },
  { icon: <FaLinkedinIn color="#0077B5" />, route: "/linkedin", label: "LinkedIn" },
  { icon: <SiTiktok color="#000" />, route: "/tiktok", label: "TikTok" },
  { icon: <FaGithub color="#181717" />, route: "/github", label: "GitHub" },
  { icon: <SiFirebase color="#ffb300" />, route: "/firebase", label: "Firebase" },
  { icon: <SiNetflix color="#e50914" />, route: "/netflix", label: "Netflix" },
  { icon: <SiDiscord color="#5865F2" />, route: "/discord", label: "Discord" },
  { icon: <FaSpotify color="#1DB954" />, route: "/spotify", label: "Spotify" },
  { icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#00b8f4"/>
        <path d="M16 5l1.7 5.2h5.5l-4.4 3.2 1.7 5.2-4.5-3.2-4.4 3.2 1.7-5.2-4.4-3.2h5.5z" fill="#fff"/>
      </svg>
    ), route: "/hotstar", label: "Hotstar" },
  { icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#00A8E1"/>
        <path d="M6 22c3 2.3 7.1 3.7 10 3.7s7-1.4 10-3.7c.4-.3.4-.8 0-1.1-.3-.3-.8-.3-1.1 0-2.3 1.8-5.6 3-8.9 3s-6.6-1.2-8.9-3c-.3-.3-.8-.3-1.1 0-.4.3-.4.8 0 1.1zm20-9c0-5.5-4.5-10-10-10S6 7.5 6 13c0 4 2.4 7.5 6 9.1.4.2.9 0 1.1-.4.2-.4 0-.9-.4-1.1-3-1.3-5-4.3-5-7.6C8 8.1 11.1 5 15 5s7 3.1 7 7c0 3.3-2 6.3-5 7.6-.4.2-.6.7-.4 1.1.2.4.7.6 1.1.4 3.6-1.6 6-5.1 6-9.1zm-10 3.1c-1.8 0-3.1-1.3-3.1-3.1s1.3-3.1 3.1-3.1 3.1 1.3 3.1 3.1-1.3 3.1-3.1 3.1z" fill="#fff"/>
      </svg>
    ), route: "/primevideo", label: "Prime Video" },
  { icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#ff0080"/>
        <circle cx="16" cy="16" r="10" fill="#fff"/>
        <rect x="10" y="10" width="12" height="8" rx="2" fill="#ff0080"/>
        <rect x="13" y="13" width="6" height="2" rx="1" fill="#fff"/>
      </svg>
    ), route: "/jiocinema", label: "JioCinema" },
];

const LoginDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <div className="dashboard-main-heading">Choose a Login Platform</div>
      <div className="dashboard-icons-3d">
        {icons.map((item, i) => (
          <motion.div
            key={i}
            className="dashboard-icon-3d"
            whileHover={{ scale: 1.18, boxShadow: "0 0 32px #ffe08299" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(item.route)}
            title={item.label}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LoginDashboard;
