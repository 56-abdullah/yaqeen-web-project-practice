const Hero = () => {
  return (
    <div className="hero-section">
      <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: '60vh' }}>
            <img src="/images/1.jpg" className="d-block w-100 h-100" style={{ objectFit: 'cover' }} alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h5>Welcome to Yaqeen</h5>
              <p>Your trusted marketplace for buying and selling high-quality goods.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '60vh' }}>
            <img src="/images/2.jpg" className="d-block w-100 h-100" style={{ objectFit: 'cover' }} alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h5>Discover Amazing Deals</h5>
              <p>Find the best products at unbeatable prices directly from sellers.</p>
            </div>
          </div>
          <div className="carousel-item" style={{ height: '60vh' }}>
            <img src="/images/3.png" className="d-block w-100 h-100" style={{ objectFit: 'cover' }} alt="Slide 3" />
            <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-3 rounded">
              <h5>Start Selling Today</h5>
              <p>Join our community of sellers and reach thousands of buyers instantly.</p>
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
      
      {/* Some extra content to make it look full */}
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/4.png" className="card-img-top" alt="Feature 1" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Secure Payments</h5>
                <p className="card-text">We ensure that all transactions are safe and secure.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/5.png" className="card-img-top" alt="Feature 2" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Verified Sellers</h5>
                <p className="card-text">Our sellers go through a rigorous verification process.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src="/images/6.png" className="card-img-top" alt="Feature 3" style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">24/7 Support</h5>
                <p className="card-text">We are here to help you anytime you need assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
