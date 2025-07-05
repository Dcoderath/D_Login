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
import GitHubLogin from "./components/GitHub/GitHubLogin";
import FirebaseLogin from "./components/Firebase/FirebaseLogin";
import NetflixLogin from "./components/Netflix/NetflixLogin";
import JioCinemaLogin from "./components/JioCinema/JioCinemaLogin";
import HotstarLogin from "./components/Hotstar/HotstarLogin";
import PrimeVideoLogin from "./components/PrimeVideo/PrimeVideoLogin";
import SpotifyLogin from "./components/Spotify/SpotifyLogin";
import DiscordLogin from "./components/Discord/DiscordLogin";
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
        <Route path="/github" element={<GitHubLogin />} />
        <Route path="/firebase" element={<FirebaseLogin />} />
        <Route path="/netflix" element={<NetflixLogin />} />
        <Route path="/jiocinema" element={<JioCinemaLogin />} />
        <Route path="/hotstar" element={<HotstarLogin />} />
        <Route path="/primevideo" element={<PrimeVideoLogin />} />
        <Route path="/spotify" element={<SpotifyLogin />} />
        <Route path="/discord" element={<DiscordLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
