import { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { get_product } from '../serviceApi';
import { CartContext } from '../context/CartContext';
import { WishlistContext } from '../context/WishlistContext';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  // Load this one product from the database using the id in the URL.
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await get_product(id);
      setProduct(data);
    }
    load();
  }, [id]);

  function handleAddToCart() {
    addToCart(product);
    alert(`Added ${product.title} to cart!`);
  }

  function handleAddToWishlist() {
    addToWishlist(product);
    alert(`Added ${product.title} to wishlist!`);
  }

  if (!product) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <div className="container py-5 flex-grow-1">
          <p className="text-muted">Loading product...</p>
          <Link to="/products" className="btn btn-primary">Back to Products</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      
      <div className="container py-5 flex-grow-1">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
            <li className="breadcrumb-item active">{product.title}</li>
          </ol>
        </nav>

        <div className="row g-4">
          <div className="col-md-6">
            <img src={product.image} alt={product.title} className="img-fluid rounded shadow" />
          </div>
          
          <div className="col-md-6">
            <span className="badge bg-primary mb-2">{product.category}</span>
            <h1 className="fw-bold mb-3">{product.title}</h1>
            
            <div className="mb-3">
              <span className="text-warning fs-5">
                {'★'.repeat(Math.round(product.rating))}
                {'☆'.repeat(5 - Math.round(product.rating))}
              </span>
              <span className="text-muted ms-2">({product.rating} rating)</span>
            </div>

            <h2 className="text-primary fw-bold mb-4">Rs. {Number(product.price).toLocaleString()}</h2>

            <div className="card mb-4 p-3 bg-light">
              <div className="row g-3">
                <div className="col-6">
                  <strong>Seller:</strong> {product.seller}
                </div>
                <div className="col-6">
                  <strong>Condition:</strong> <span className="badge bg-success">{product.condition}</span>
                </div>
                <div className="col-6">
                  <strong>Stock:</strong> {product.stock} units available
                </div>
                <div className="col-6">
                  <strong>Category:</strong> {product.category}
                </div>
              </div>
            </div>

            <h5 className="fw-bold mb-3">Product Description</h5>
            <p className="text-muted mb-4">{product.description}</p>

            <div className="d-grid gap-2">
              <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>Add to Cart</button>
              <button className="btn btn-outline-secondary" onClick={handleAddToWishlist}>Add to Wishlist</button>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Link to="/products" className="btn btn-outline-primary">
            ← Back to All Products
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ProductDetail;
