import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Hero from './Hero';
import Footer from './Footer';
import { get_products, get_testimonials } from '../serviceApi';

function LandingPage() {
  const [productsData, setProductsData] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState([]);

  // Load products + testimonials from the database when the page opens.
  useEffect(() => {
    async function load() {
      const products = await get_products();
      setProductsData(products);
      const testimonials = await get_testimonials();
      setTestimonialsData(testimonials);
    }
    load();
  }, []);

  // Only show first 6 featured products on the landing page
  const featuredProducts = productsData.slice(0, 6);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      
      {/* Section 1: Hero Carousel */}
      <Hero />

      {/* Section 2: Features */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold fs-1 mb-3">Why Choose Yaqeen?</h2>
          <p className="text-muted fs-5 mb-5">We provide a trusted marketplace experience built on security, authenticity, and exceptional service.</p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 p-4 shadow-sm">
                <h5 className="fw-bold">Secure Payments</h5>
                <p className="text-muted">Every transaction is protected with end-to-end encryption and fraud detection to keep your money safe.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4 shadow-sm">
                <h5 className="fw-bold">Verified Sellers</h5>
                <p className="text-muted">All sellers undergo a rigorous verification process ensuring genuine products and reliable service.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-4 shadow-sm">
                <h5 className="fw-bold">24/7 Support</h5>
                <p className="text-muted">Our dedicated support team is available around the clock to help resolve any issues instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Products — rendered with .map() from JSON */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-1 mb-3">Featured Products</h2>
            <p className="text-muted fs-5">Explore our hand-picked selection of top-rated products from verified sellers.</p>
          </div>
          <div className="row g-4">
            {featuredProducts.map((product) => (
              <div className="col-md-4" key={product.id}>
                <Link to={`/products/${product.id}`} className="text-decoration-none">
                  <div className="card h-100 shadow-sm">
                    <img src={product.image} className="card-img-top" alt={product.title} style={{height: '200px', objectFit: 'cover'}} />
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span className="badge bg-light text-dark">{product.category}</span>
                        <span className="text-warning">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
                      </div>
                      <h5 className="card-title fw-bold text-dark">{product.title}</h5>
                      <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="text-primary fw-bold fs-5">Rs. {Number(product.price).toLocaleString()}</span>
                        <small className="text-muted">by {product.seller}</small>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary btn-lg px-5 fw-semibold rounded-pill">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold fs-1 mb-3">How It Works</h2>
          <p className="text-muted fs-5 mb-5">Getting started on Yaqeen is simple. Follow these three easy steps to begin.</p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold fs-3 mb-3" style={{width: '60px', height: '60px'}}>1</div>
              <h5 className="fw-bold">Create Your Account</h5>
              <p className="text-muted">Sign up for free and set up your buyer or seller profile in just a few minutes.</p>
            </div>
            <div className="col-md-4">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold fs-3 mb-3" style={{width: '60px', height: '60px'}}>2</div>
              <h5 className="fw-bold">Browse or List Products</h5>
              <p className="text-muted">Explore thousands of verified listings or create your own product listing to start selling.</p>
            </div>
            <div className="col-md-4">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold fs-3 mb-3" style={{width: '60px', height: '60px'}}>3</div>
              <h5 className="fw-bold">Complete Your Transaction</h5>
              <p className="text-muted">Make secure payments, receive your products, and leave reviews for the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Testimonials — rendered with .map() from JSON */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-1 mb-3">What Our Users Say</h2>
            <p className="text-white-50 fs-5">Real feedback from real people who trust Yaqeen Marketplace.</p>
          </div>
          <div className="row g-4">
            {testimonialsData.map((t) => (
              <div className="col-md-6" key={t.id}>
                <div className="card p-4 shadow-sm">
                  <p className="text-muted mb-3">"{t.text}"</p>
                  <div className="d-flex align-items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="rounded-circle border border-primary border-2" style={{width: '50px', height: '50px', objectFit: 'cover'}} />
                    <div>
                      <h6 className="fw-bold mb-0">{t.name}</h6>
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
      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="fw-bold fs-1 mb-3">Ready to Start Selling?</h2>
          <p className="lead mb-4">Join thousands of sellers on Yaqeen Marketplace and grow your business today.</p>
          <Link to="/register" className="btn btn-warning btn-lg fw-bold px-5">Create Free Account</Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default LandingPage;
