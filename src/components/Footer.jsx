function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Yaqeen Marketplace</h5>
            <p className="text-muted small">Your trusted platform for buying and selling high-quality items.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled text-muted small">
              <li><a href="#" className="text-decoration-none text-muted">About Us</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Contact Support</a></li>
              <li><a href="#" className="text-decoration-none text-muted">Terms of Service</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Connect With Us</h5>
            <p className="text-muted small">Follow us on social media for the latest updates.</p>
            <div className="d-flex justify-content-center gap-3">
              <span className="badge bg-primary">Facebook</span>
              <span className="badge bg-info">Twitter</span>
              <span className="badge bg-danger">Instagram</span>
            </div>
          </div>
        </div>
        <hr className="bg-light my-3" />
        <p className="mb-0 small text-muted">&copy; {new Date().getFullYear()} Yaqeen Marketplace. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
