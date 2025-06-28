// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ChatGPTLogin from "./components/ChatGPTLogin/ChatGPTLogin";
// import Instagram from "./components/Instagram/Instagram";
// import LoginDashboard from "./components/LoginDashboard/LoginDashboard";

// const App = () => {
//   return (
//     <Router basename="/D_Login">
//       <Routes>
//         <Route path="/" element={<LoginDashboard />} />
//         <Route path="/login" element={<ChatGPTLogin />} />
//         <Route path="/instagram" element={<Instagram />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // ✅ Use HashRouter
import ChatGPTLogin from "./components/ChatGPTLogin/ChatGPTLogin";
import Instagram from "./components/Instagram/Instagram";
import FacebookLogin from "./components/Facebook/FacebookLogin";
import RedditLogin from "./components/Reddit/RedditLogin";
import TwitterLogin from "./components/Twitter/TwitterLogin";
import SnapchatLogin from "./components/Snapchat/SnapchatLogin";
import LinkedInLogin from "./components/LinkedIn/LinkedInLogin";
import TikTokLogin from "./components/TikTok/TikTokLogin";
import LoginDashboard from "./components/LoginDashboard/LoginDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginDashboard />} />
        <Route path="/login" element={<ChatGPTLogin />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/facebook" element={<FacebookLogin />} />
        <Route path="/reddit" element={<RedditLogin />} />
        <Route path="/twitter" element={<TwitterLogin />} />
        <Route path="/snapchat" element={<SnapchatLogin />} />
        <Route path="/linkedin" element={<LinkedInLogin />} />
        <Route path="/tiktok" element={<TikTokLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
