import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import productsData from '../../data/productsData.json';

function ProductEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    seller: '',
    stock: '',
    condition: 'New',
    rating: '5',
    image: '',
    tags: '',
    sku: '',
    weight: '',
    length: '',
    width: '',
    height: ''
  });

  useEffect(() => {
    // Load product data based on ID
    const product = productsData.find(p => p.id === parseInt(id));
    if (product) {
      setFormData({
        title: product.title,
        description: product.description,
        price: product.price.toString(),
        category: product.category,
        seller: product.seller,
        stock: product.stock.toString(),
        condition: product.condition,
        rating: product.rating.toString(),
        image: product.image,
        tags: '',
        sku: `SKU-${product.id}`,
        weight: '1.5',
        length: '20',
        width: '15',
        height: '10'
      });
    }
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Product updated:', formData);
    alert('Product updated successfully!');
    navigate('/admin/products');
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Edit Product</h2>
        <p className="text-muted mb-0">Update product details</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            {/* Basic Information */}
            <h5 className="fw-bold mb-3">Basic Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-8">
                <label className="form-label fw-semibold">Product Title *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter product title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">SKU *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product SKU"
                  name="sku"
                  value={formData.sku}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold">Description *</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Detailed product description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            {/* Pricing & Inventory */}
            <h5 className="fw-bold mb-3">Pricing & Inventory</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label fw-semibold">Price (Rs.) *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0.00"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Stock Quantity *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Available units"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Condition *</label>
                <select
                  className="form-select"
                  name="condition"
                  value={formData.condition}
                  onChange={handleChange}
                  required
                >
                  <option value="New">New</option>
                  <option value="Used">Used</option>
                  <option value="Refurbished">Refurbished</option>
                </select>
              </div>
            </div>

            {/* Category & Seller */}
            <h5 className="fw-bold mb-3">Category & Seller</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label fw-semibold">Category *</label>
                <select
                  className="form-select"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Home">Home & Living</option>
                  <option value="Sports">Sports & Outdoors</option>
                  <option value="Beauty">Beauty & Health</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Seller Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Seller or brand name"
                  name="seller"
                  value={formData.seller}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Rating *</label>
                <select
                  className="form-select"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  required
                >
                  <option value="5">5 Stars</option>
                  <option value="4.5">4.5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3.5">3.5 Stars</option>
                  <option value="3">3 Stars</option>
                </select>
              </div>
            </div>

            {/* Product Details */}
            <h5 className="fw-bold mb-3">Product Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Image URL *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="/images/product.jpg"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="tag1, tag2, tag3"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Shipping Information */}
            <h5 className="fw-bold mb-3">Shipping Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-3">
                <label className="form-label fw-semibold">Weight (kg) *</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  placeholder="0.00"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Length (cm) *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  name="length"
                  value={formData.length}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Width (cm) *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  name="width"
                  value={formData.width}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Height (cm) *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary px-4">
                Update Product
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                onClick={() => navigate('/admin/products')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductEdit;
