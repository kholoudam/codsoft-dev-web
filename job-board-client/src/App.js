// job-board-client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import JobList from "./components/JobList";
import JobDetail from "./components/JobDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/job/:id" element={<JobDetail />} />
      </Routes>
    </Router>
  );
}

export default App;