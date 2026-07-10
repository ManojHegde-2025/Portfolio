import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ClubAutomationProject from './Pages/Appscript';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pages/Appscript.jsx" element={<ClubAutomationProject />} />
      </Routes>
    </Router>
  );
}

export default App;