// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import VCMessage from './pages/VCMessage';
import HODMessage from './pages/HODMessage';
import Faculty from './pages/Faculty';
import Programs from './pages/Programs';
import News from './pages/News';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<VCMessage />} />
        <Route path="/hod" element={<HODMessage />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
