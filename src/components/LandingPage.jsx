import { Link } from 'react-router-dom';
import Hero from './Hero';
import productsData from '../data/productsData.json';
import testimonialsData from '../data/testimonialsData.json';

function LandingPage() {
  // Only show first 6 featured products on the landing page
  const featuredProducts = productsData.slice(0, 6);

  return (
    <div>
      {/* Section 1: Hero Carousel */}
      <Hero />

      {/* Section 2: Features */}
      <section className="yq-section text-center">
        <div className="container">
          <h2 className="yq-section-title">Why Choose Yaqeen?</h2>
          <p className="yq-section-subtitle">We provide a trusted marketplace experience built on security, authenticity, and exceptional service.</p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="yq-card card h-100 p-4">
                <div className="yq-feature-icon">🔒</div>
                <h5 className="fw-bold">Secure Payments</h5>
                <p className="text-muted">Every transaction is protected with end-to-end encryption and fraud detection to keep your money safe.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="yq-card card h-100 p-4">
                <div className="yq-feature-icon">✅</div>
                <h5 className="fw-bold">Verified Sellers</h5>
                <p className="text-muted">All sellers undergo a rigorous verification process ensuring genuine products and reliable service.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="yq-card card h-100 p-4">
                <div className="yq-feature-icon">💬</div>
                <h5 className="fw-bold">24/7 Support</h5>
                <p className="text-muted">Our dedicated support team is available around the clock to help resolve any issues instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Products — rendered with .map() from JSON */}
      <section className="yq-section" style={{ background: '#f3f4f6' }}>
        <div className="container">
          <div className="text-center">
            <h2 className="yq-section-title">Featured Products</h2>
            <p className="yq-section-subtitle">Explore our hand-picked selection of top-rated products from verified sellers.</p>
          </div>
          <div className="row g-4">
            {featuredProducts.map((product) => (
              <div className="col-md-4" key={product.id}>
                <div className="yq-card card h-100">
                  <img src={product.image} className="card-img-top" alt={product.title} />
                  <div className="card-body d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <span className="yq-badge bg-light text-dark">{product.category}</span>
                      <span className="yq-stars">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
                    </div>
                    <h5 className="card-title fw-bold">{product.title}</h5>
                    <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="yq-price">Rs. {product.price.toLocaleString()}</span>
                      <small className="text-muted">by {product.seller}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary btn-lg px-5 fw-semibold" style={{ borderRadius: '50px' }}>View All Products</Link>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="yq-section text-center">
        <div className="container">
          <h2 className="yq-section-title">How It Works</h2>
          <p className="yq-section-subtitle">Getting started on Yaqeen is simple. Follow these three easy steps to begin.</p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="yq-step-number">1</div>
              <h5 className="fw-bold">Create Your Account</h5>
              <p className="text-muted">Sign up for free and set up your buyer or seller profile in just a few minutes.</p>
            </div>
            <div className="col-md-4">
              <div className="yq-step-number">2</div>
              <h5 className="fw-bold">Browse or List Products</h5>
              <p className="text-muted">Explore thousands of verified listings or create your own product listing to start selling.</p>
            </div>
            <div className="col-md-4">
              <div className="yq-step-number">3</div>
              <h5 className="fw-bold">Complete Your Transaction</h5>
              <p className="text-muted">Make secure payments, receive your products, and leave reviews for the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials — rendered with .map() from JSON */}
      <section className="yq-section yq-section-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="yq-section-title">What Our Users Say</h2>
            <p className="yq-section-subtitle" style={{ color: 'rgba(255,255,255,.6)' }}>Real feedback from real people who trust Yaqeen Marketplace.</p>
          </div>
          <div className="row g-4">
            {testimonialsData.map((t) => (
              <div className="col-md-6" key={t.id}>
                <div className="yq-testimonial">
                  <p className="text-muted mb-3">"{t.text}"</p>
                  <div className="d-flex align-items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="yq-testimonial-avatar" />
                    <div>
                      <h6 className="fw-bold mb-0 text-dark">{t.name}</h6>
                      <small className="text-muted">{t.role}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA Banner */}
      <section className="yq-cta">
        <div className="container">
          <h2>Ready to Start Selling?</h2>
          <p className="lead mb-4" style={{ opacity: 0.9 }}>Join thousands of sellers on Yaqeen Marketplace and grow your business today.</p>
          <Link to="/register" className="btn btn-warning btn-lg fw-bold px-5">Create Free Account</Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
