import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AboutMarx from './pages/AboutMarx';
import Quotes from './pages/Quotes';
import Ideas from './pages/Ideas';
import Engage from './pages/Engage';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import BackgroundPattern from './components/BackgroundPattern';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟加载时间
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <BackgroundPattern />
          <Navbar />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<AboutMarx />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/engage" element={<Engage />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
