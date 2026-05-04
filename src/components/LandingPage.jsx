import Navigation from './Navigation';
import Hero from './Hero';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      
      {/* Main content area */}
      <main className="flex-grow-1">
        <Hero />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
