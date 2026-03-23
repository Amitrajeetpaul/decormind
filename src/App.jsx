import React, { useState, useEffect } from 'react';
import { 
  Upload, 
  Map, 
  Settings, 
  ShoppingBag, 
  Zap, 
  Layout, 
  Compass, 
  Maximize2,
  ChevronRight,
  Menu,
  X,
  Mic
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <div className="grain"></div>
      
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <div className="nav-logo-icon">D</div>
          <span>DecorMind</span>
        </div>
        <div className="nav-center">
          <a href="#features" className="nav-link">Features</a>
          <div className="nav-divider"></div>
          <a href="#pricing" className="nav-link">Pricing</a>
        </div>
        <button className="nav-cta">GET APP</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-left">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="hero-tags"
            >
              <span className="tag">AI</span>
              <span className="tag">Interior Design</span>
              <span className="tag-dot">✦</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="hero-headline"
            >
              Shape Your<br /><em>Dream</em> Space
            </motion.h1>

            <div className="hero-bottom">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="hero-subtext"
              >
                <p>Begin Turning<br />Dreams into<br />Reality</p>
                <button className="btn-primary">
                  Get Started <ChevronRight size={16} />
                </button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="hero-image"
              >
                <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1400" alt="Beautiful interior" />
              </motion.div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="hero-right"
          >
            <div className="stat-card">
              <span className="stat-card-label">LIGHT ANALYSIS</span>
              <div className="stat-card-visual">
                <div className="lamp">
                  <div className="lamp-arm"></div>
                </div>
              </div>
              <div className="stat-number">
                92<span className="suffix">%</span>
              </div>
              <div className="stat-desc">Optimal placement for natural vibes</div>
            </div>

            <div className="style-card">
              <div className="style-dots">
                <div className="style-dot active"></div>
                <div className="style-dot"></div>
                <div className="style-dot"></div>
              </div>
              <div className="style-card-text">
                <strong>Modern Minimalist</strong>
                <span>Currently Selected</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="feature-strip"
        >
          <div className="feature-item">
            <div className="feature-icon"><Zap size={16} /></div>
            <span>AI Rendering</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><Compass size={16} /></div>
            <span>Vastu Score</span>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><ShoppingBag size={16} /></div>
            <span>Marketplace</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
