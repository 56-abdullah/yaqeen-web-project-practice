import { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/productsData.json';

function ProductsList() {
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');

  function handleDelete(productId) {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
      alert('Product deleted successfully!');
    }
  }

  // Filter products based on search
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Products Management</h2>
          <p className="text-muted mb-0">Manage all products in the marketplace</p>
        </div>
        <Link to="/admin/products/add" className="btn btn-primary">
          ➕ Add New Product
        </Link>
      </div>

      {/* Search Bar */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search products by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-6 text-end">
              <span className="text-muted">
                Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Products Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Seller</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="fw-semibold">#{product.id}</td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }}
                      />
                    </td>
                    <td>
                      <div className="fw-semibold">{product.title}</div>
                      <small className="text-muted">{product.description.substring(0, 40)}...</small>
                    </td>
                    <td>
                      <span className="badge bg-light text-dark">{product.category}</span>
                    </td>
                    <td className="fw-bold text-primary">Rs. {product.price.toLocaleString()}</td>
                    <td>
                      <span className={`badge ${product.stock > 10 ? 'bg-success' : 'bg-warning'}`}>
                        {product.stock} units
                      </span>
                    </td>
                    <td className="text-muted small">{product.seller}</td>
                    <td>
                      <div className="d-flex align-items-center gap-1">
                        <span className="text-warning">★</span>
                        <span className="fw-semibold">{product.rating}</span>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <Link
                          to={`/admin/products/edit/${product.id}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="btn btn-sm btn-outline-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">No products found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
