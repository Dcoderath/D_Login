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
import LoginDashboard from "./components/LoginDashboard/LoginDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginDashboard />} />
        <Route path="/login" element={<ChatGPTLogin />} />
        <Route path="/instagram" element={<Instagram />} />
      </Routes>
    </Router>
  );
};

export default App;
