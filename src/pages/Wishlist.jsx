import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { WishlistContext } from '../context/WishlistContext';

function Wishlist() {
  const { wishItems, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />

      <div className="container py-5 flex-grow-1">
        <h1 className="fw-bold mb-4">My Wishlist</h1>

        {wishItems.length === 0 ? (
          <div className="text-center py-5">
            <h4 className="text-muted">Your wishlist is empty</h4>
            <Link to="/products" className="btn btn-primary mt-3">Browse Products</Link>
          </div>
        ) : (
          <div className="row g-4">
            {wishItems.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img src={item.image} className="card-img-top" alt={item.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{item.title}</h5>
                    <p className="text-primary fw-bold">Rs. {item.price.toLocaleString()}</p>
                    <button className="btn btn-danger btn-sm mt-auto" onClick={() => removeFromWishlist(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Wishlist;
