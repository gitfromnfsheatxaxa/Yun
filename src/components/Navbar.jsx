import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Prices', path: '/prices' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-glass-strong backdrop-blur-xl border-b border-neon-red/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative"
              >
                <svg viewBox="0 0 60 60" className="w-14 h-14">
                  <defs>
                    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B0000" />
                      <stop offset="100%" stopColor="#3B0000" />
                    </linearGradient>
                  </defs>
                  {/* Outer pentagon */}
                  <motion.path
                    d="M30 5L55 22L45 52L15 52L5 22Z"
                    fill="none"
                    stroke="url(#logoGrad)"
                    strokeWidth="1.5"
                    className="drop-shadow-[0_0_10px_rgba(139,0,0,0.5)]"
                  />
                  {/* Inner pentagon */}
                  <motion.path
                    d="M30 12L45 22L40 42L20 42L15 22Z"
                    fill="none"
                    stroke="#8B0000"
                    strokeWidth="1"
                    opacity="0.7"
                  />
                  {/* Dragon eye */}
                  <motion.circle 
                    cx="30" 
                    cy="28" 
                    r="5" 
                    fill="#8B0000"
                    className="drop-shadow-[0_0_15px_rgba(139,0,0,0.8)]"
                  />
                  <motion.circle 
                    cx="30" 
                    cy="28" 
                    r="2" 
                    fill="#EDEDED"
                  />
                </svg>
              </motion.div>
              <div className="flex flex-col">
                <span className="font-gothic text-xl font-bold text-soft-white tracking-[0.2em] group-hover:text-neon-red transition-colors duration-500 text-glow">
                  DRAGON INK
                </span>
                <span className="text-[0.65rem] text-neon-red tracking-[0.4em] uppercase font-serif italic">
                  Tattoo Sanctuary
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative font-serif text-[0.95rem] tracking-[0.25em] text-soft-white/80 hover:text-neon-red transition-all duration-500 py-2 group"
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-deep-red via-neon-red to-deep-red group-hover:w-full transition-all duration-500"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive(item.path) ? 1 : 0 }}
                  />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-12 h-12 flex flex-col items-center justify-center space-y-1.5 group"
            >
              <motion.span
                animate={{ 
                  rotate: isMobileMenuOpen ? 45 : 0, 
                  y: isMobileMenuOpen ? 6 : 0,
                  backgroundColor: isMobileMenuOpen ? '#8B0000' : '#EDEDED'
                }}
                transition={{ duration: 0.4 }}
                className="w-6 h-[1px] bg-soft-white transition-colors duration-300"
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-[1px] bg-soft-white"
              />
              <motion.span
                animate={{ 
                  rotate: isMobileMenuOpen ? -45 : 0, 
                  y: isMobileMenuOpen ? -6 : 0,
                  backgroundColor: isMobileMenuOpen ? '#8B0000' : '#EDEDED'
                }}
                transition={{ duration: 0.4 }}
                className="w-6 h-[1px] bg-soft-white transition-colors duration-300"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-pure-black md:hidden"
          >
            {/* Atmospheric Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-deep-red/20 rounded-full blur-3xl" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-red/15 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-gothic text-3xl tracking-[0.3em] transition-all duration-500 hover:text-glow ${
                      isActive(item.path) ? 'text-neon-red' : 'text-soft-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;