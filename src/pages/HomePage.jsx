import Hero from '../components/Hero';
import FeaturedWorks from '../components/FeaturedWorks';
import ArtistPhilosophy from '../components/ArtistPhilosophy';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <main className="relative">
      {/* Atmospheric Background Overlays */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="grain-overlay" />
        <div className="vhs-noise" />
        <div className="red-ambient" />
        <div className="dark-particles" />
        <div className="gothic-fog" />
      </div>
      
      <div className="relative z-10">
        <Hero />
        <FeaturedWorks />
        <ArtistPhilosophy />
        <Testimonials />
      </div>
    </main>
  );
};

export default HomePage;