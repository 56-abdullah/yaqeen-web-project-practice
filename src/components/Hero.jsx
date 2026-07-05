import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{height: '500px'}}>
          <img src="/images/1.jpg" className="d-block w-100 h-100" alt="Yaqeen Marketplace hero" style={{objectFit: 'cover'}} />
          <div className="carousel-caption d-none d-md-block">
            <div className="bg-dark bg-opacity-75 p-4 rounded">
              <h2 className="fw-bold">Welcome to Yaqeen Marketplace</h2>
              <p className="mb-3">Your trusted platform for buying and selling premium goods across Pakistan.</p>
              <Link to="/products" className="btn btn-warning btn-lg fw-semibold px-4">Browse Products</Link>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{height: '500px'}}>
          <img src="/images/2.jpg" className="d-block w-100 h-100" alt="Discover deals" style={{objectFit: 'cover'}} />
          <div className="carousel-caption d-none d-md-block">
            <div className="bg-dark bg-opacity-75 p-4 rounded">
              <h2 className="fw-bold">Discover Amazing Deals</h2>
              <p className="mb-3">Find the best products at unbeatable prices directly from verified sellers.</p>
              <Link to="/products" className="btn btn-warning btn-lg fw-semibold px-4">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="carousel-item" style={{height: '500px'}}>
          <img src="/images/3.png" className="d-block w-100 h-100" alt="Start selling" style={{objectFit: 'cover'}} />
          <div className="carousel-caption d-none d-md-block">
            <div className="bg-dark bg-opacity-75 p-4 rounded">
              <h2 className="fw-bold">Start Selling Today</h2>
              <p className="mb-3">Join our community of sellers and reach thousands of buyers instantly.</p>
              <Link to="/register" className="btn btn-warning btn-lg fw-semibold px-4">Get Started</Link>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero;
