import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/page";

const App: React.FC = () => {
  return (
      <div className="App font-inter">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
  );
};

const About = () => <h1>About</h1>;
const Contact = () => <h1>Contact</h1>;

export default App;
