import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './sections/Navbar';
import MainPage from './pages/MainPage';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <div>
            <Navbar/>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/:projectId" element={<ProjectDetail />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
};
