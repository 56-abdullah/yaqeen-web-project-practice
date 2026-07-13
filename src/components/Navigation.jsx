import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

function Navigation() {
  const location = useLocation();
  const { cartItems } = useContext(CartContext);
  const { wishItems } = useContext(WishlistContext);
  const { user, logout } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
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
          <div className="d-flex gap-2 ms-3 align-items-center">
            <Link to="/cart" className="btn btn-outline-light btn-sm">Cart: {cartItems.length}</Link>
            <Link to="/wishlist" className="btn btn-outline-light btn-sm">Wishlist: {wishItems.length}</Link>
            <button className="btn btn-outline-info btn-sm" onClick={toggleTheme}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            {user ? (
              <>
                <Link to="/profile" className="btn btn-outline-light btn-sm">My Profile</Link>
                <span className="text-light fw-semibold">Hi, {user}</span>
                <button className="btn btn-outline-light" onClick={logout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light">Login</Link>
                <Link to="/register" className="btn btn-warning fw-semibold">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
