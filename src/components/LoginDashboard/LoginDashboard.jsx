// src/components/LoginDashboard/LoginDashboard.jsx
import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import './LoginDashboard.css';
import { FaInstagram, FaRedditAlien, FaFacebookF, FaSnapchatGhost, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiOpenai, SiTiktok, SiFirebase } from 'react-icons/si';
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
