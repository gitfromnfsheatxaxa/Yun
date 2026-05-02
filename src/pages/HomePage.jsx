import Hero from '../components/Hero';
import FeaturedWorks from '../components/FeaturedWorks';
import ArtistPhilosophy from '../components/ArtistPhilosophy';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <main className="relative">
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