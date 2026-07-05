import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { get_products } from '../serviceApi';

function Products() {
  const { register, watch } = useForm();
  const filters = watch();

  // Load products from the database when the page first opens.
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await get_products();
      setProductsData(data);
    }
    load();
  }, []);

  // Filter products based on search and filters
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes((filters.search || '').toLowerCase()) ||
                         product.description.toLowerCase().includes((filters.search || '').toLowerCase());
    const matchesCategory = !filters.category || filters.category === 'all' || product.category === filters.category;
    const matchesMinPrice = !filters.minPrice || product.price >= Number(filters.minPrice);
    const matchesMaxPrice = !filters.maxPrice || product.price <= Number(filters.maxPrice);
    
    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  // Get unique categories
  const categories = ['all', ...new Set(productsData.map(p => p.category))];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      
      <div className="container py-5 flex-grow-1">
        <div className="text-center mb-5">
          <h1 className="fw-bold fs-1">All Products</h1>
          <p className="text-muted fs-5">Browse our complete collection of verified products from trusted sellers</p>
        </div>

      {/* Filters Section */}
      <div className="card mb-4 p-4">
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label fw-semibold">Search Products</label>
            <input
              type="text"
              className="form-control"
              placeholder="Search by name or description..."
              {...register('search')}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label fw-semibold">Category</label>
            <select className="form-select" {...register('category')}>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3">
            <label className="form-label fw-semibold">Min Price (Rs.)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Min price"
              {...register('minPrice')}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label fw-semibold">Max Price (Rs.)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Max price"
              {...register('maxPrice')}
            />
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-3">
        <p className="text-muted">
          Showing <strong>{filteredProducts.length}</strong> of <strong>{productsData.length}</strong> products
        </p>
      </div>

      {/* Products Grid */}
      <div className="row g-4">
        {filteredProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Link to={`/products/${product.id}`} className="text-decoration-none">
              <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.title} style={{height: '200px', objectFit: 'cover'}} />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <span className="badge bg-light text-dark">{product.category}</span>
                    <span className="text-warning">
                      {'★'.repeat(Math.round(product.rating))}
                      {'☆'.repeat(5 - Math.round(product.rating))}
                    </span>
                  </div>
                  <h5 className="card-title fw-bold text-dark">{product.title}</h5>
                  <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                  <div className="mt-2">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-primary fw-bold fs-5">Rs. {Number(product.price).toLocaleString()}</span>
                      <small className="text-muted">Stock: {product.stock}</small>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">by {product.seller}</small>
                      <span className="badge bg-success">{product.condition}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-5">
          <h4 className="text-muted">No products found</h4>
          <p className="text-muted">Try adjusting your filters or search terms</p>
        </div>
      )}
      </div>
      
      <Footer />
    </div>
  );
}

export default Products;
