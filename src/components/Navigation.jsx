import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg yq-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">Yaqeen Marketplace</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`} to="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="d-flex gap-2 ms-3">
            <Link to="/login" className="btn btn-outline-light">Login</Link>
            <Link to="/register" className="btn btn-warning fw-semibold">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
