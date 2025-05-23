import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AboutMarx from './pages/AboutMarx';
import Quotes from './pages/Quotes';
import Ideas from './pages/Ideas';
import Engage from './pages/Engage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutMarx />} />
            <Route path="/quotes" element={<Quotes />} />
            <Route path="/ideas" element={<Ideas />} />
            <Route path="/engage" element={<Engage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
