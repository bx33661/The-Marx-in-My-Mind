import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import AboutMarx from './pages/AboutMarx';
import Quotes from './pages/Quotes';
import Ideas from './pages/Ideas';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import BackgroundPattern from './components/BackgroundPattern';

// 调试组件，用于查看当前路由
function RouteDebugger() {
  const location = useLocation();
  
  useEffect(() => {
    console.log('Current pathname:', location.pathname);
  }, [location]);
  
  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <RouteDebugger />
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
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
