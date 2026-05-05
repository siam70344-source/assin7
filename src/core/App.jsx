import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { TimelineProvider } from '../context/TimelineContext.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Home from '../pages/Home.jsx';
import FriendDetails from '../pages/FriendDetails.jsx';
import Timeline from '../pages/Timeline.jsx';
import Stats from '../pages/Stats.jsx';
import NotFound from '../pages/NotFound.jsx';
import './App.css';

export default function App() {
  return (
    <TimelineProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </Router>
    </TimelineProvider>
  );
}