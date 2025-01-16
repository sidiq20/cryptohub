import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AdminPage from './pages/AdminPage';
import WaitlistPage from './pages/WaitlistPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
      </Routes>
    </Router>
  );
}

export default App;