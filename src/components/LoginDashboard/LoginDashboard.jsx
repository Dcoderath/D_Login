// src/components/LoginDashboard/LoginDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginDashboard.css';
import { FaInstagram } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si'; // for ChatGPT icon (OpenAI logo)

const LoginDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="login-dashboard-container">
      <button
        className="login-icon-button"
        onClick={() => navigate('/login')}
        title="ChatGPT Login"
      >
        <SiOpenai size={40} />
      </button>

      <button
        className="login-icon-button"
        onClick={() => navigate('/instagram')}
        title="Instagram Login"
      >
        <FaInstagram size={40} color="#E1306C" />
      </button>
    </div>
  );
};

export default LoginDashboard;
