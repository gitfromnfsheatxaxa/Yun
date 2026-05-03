import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './i18n/config';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import PricesPage from './pages/PricesPage';
import ContactPage from './pages/ContactPage';
import { ChainBorders, MoonBackground, RosesDecor, CandelebraDecor } from './components/Decorations';
import LoadingScreen from './components/LoadingScreen';
import { defaultLanguage } from './i18n/config';

function ScrollToTop() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  return null;
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      {/* Decorative Elements */}
      <ChainBorders />
      <MoonBackground />
      <RosesDecor />
      <CandelebraDecor />
      
      <div className="min-h-screen bg-pure-black">
        <Navbar />
        <Routes>
          {/* Root redirect to default language */}
          <Route path="/" element={<Navigate to={`/${defaultLanguage}/`} replace />} />
          
          {/* Russian routes */}
          <Route path="/ru" element={<HomePage />} />
          <Route path="/ru/about" element={<AboutPage />} />
          <Route path="/ru/works" element={<WorksPage />} />
          <Route path="/ru/prices" element={<PricesPage />} />
          <Route path="/ru/contact" element={<ContactPage />} />
          
          {/* English routes */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/about" element={<AboutPage />} />
          <Route path="/en/works" element={<WorksPage />} />
          <Route path="/en/prices" element={<PricesPage />} />
          <Route path="/en/contact" element={<ContactPage />} />
          
          {/* Uzbek routes */}
          <Route path="/uz" element={<HomePage />} />
          <Route path="/uz/about" element={<AboutPage />} />
          <Route path="/uz/works" element={<WorksPage />} />
          <Route path="/uz/prices" element={<PricesPage />} />
          <Route path="/uz/contact" element={<ContactPage />} />

          {/* Fallback: redirect invalid paths to default language home */}
          <Route path="/*" element={<Navigate to={`/${defaultLanguage}/`} replace />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;