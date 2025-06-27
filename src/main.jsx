import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Instagram from "./components/Instagram/Instagram";

const App = () => {
  return (
    <Router basename="/D_Login">
      <Routes>
        <Route path="/" element={<Instagram />} />
        <Route path="*" element={<Instagram />} />
      </Routes>
    </Router>
  );
};

export default App;
