import { useState } from 'react';
import productsData from '../data/productsData.json';

function Products() {
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    minPrice: '',
    maxPrice: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  }

  // Filter products based on search and filters
  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                         product.description.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = filters.category === 'all' || product.category === filters.category;
    const matchesMinPrice = !filters.minPrice || product.price >= Number(filters.minPrice);
    const matchesMaxPrice = !filters.maxPrice || product.price <= Number(filters.maxPrice);
    
    return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
  });

  // Get unique categories
  const categories = ['all', ...new Set(productsData.map(p => p.category))];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="yq-section-title">All Products</h1>
        <p className="yq-section-subtitle">Browse our complete collection of verified products from trusted sellers</p>
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
              name="search"
              value={filters.search}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label fw-semibold">Category</label>
            <select
              className="form-select"
              name="category"
              value={filters.category}
              onChange={handleChange}
            >
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
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label fw-semibold">Max Price (Rs.)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Max price"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
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
            <div className="yq-card card h-100">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span className="yq-badge bg-light text-dark">{product.category}</span>
                  <span className="yq-stars">
                    {'★'.repeat(Math.round(product.rating))}
                    {'☆'.repeat(5 - Math.round(product.rating))}
                  </span>
                </div>
                <h5 className="card-title fw-bold">{product.title}</h5>
                <p className="card-text text-muted small flex-grow-1">{product.description}</p>
                <div className="mt-2">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="yq-price">Rs. {product.price.toLocaleString()}</span>
                    <small className="text-muted">Stock: {product.stock}</small>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">by {product.seller}</small>
                    <span className="badge bg-success">{product.condition}</span>
                  </div>
                </div>
              </div>
            </div>
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
  );
}

export default Products;
