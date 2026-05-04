import Navigation from './Navigation';
import Hero from './Hero';
import Footer from './Footer';

function LandingPage() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      
      <main className="flex-grow-1">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default LandingPage;
