import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import { get_product, process_product_update } from '../../serviceApi';

function ProductEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [serverMessage, setServerMessage] = useState('');

  const schema = z.object({
    title: z.string().min(3, { message: 'Minimum 3 characters.' }),
    sku: z.string().min(2, { message: 'Enter a SKU.' }),
    description: z.string().min(10, { message: 'Minimum 10 characters.' }),
    price: z.string().min(1, { message: 'Enter a price.' }),
    stock: z.string().min(1, { message: 'Enter stock quantity.' }),
    condition: z.string(),
    category: z.string().min(1, { message: 'Select a category.' }),
    seller: z.string().min(2, { message: 'Enter seller name.' }),
    rating: z.string(),
    image: z.string().min(1, { message: 'Enter image URL.' }),
    tags: z.string().optional(),
    weight: z.string().min(1, { message: 'Enter weight.' }),
    length: z.string().min(1, { message: 'Enter length.' }),
    width: z.string().min(1, { message: 'Enter width.' }),
    height: z.string().min(1, { message: 'Enter height.' }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // Load the product from the database and fill the form.
  // (Values from MySQL arrive as strings, which the text inputs expect.)
  useEffect(() => {
    async function load() {
      const product = await get_product(id);
      if (product) {
        reset({
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          seller: product.seller,
          stock: product.stock,
          condition: product.condition,
          rating: product.rating,
          image: product.image,
          tags: '',
          sku: `SKU-${product.id}`,
          weight: '1.5',
          length: '20',
          width: '15',
          height: '10'
        });
      }
    }
    load();
  }, [id, reset]);

  async function submit(data) {
    try {
      // Send the id (from the URL) so PHP knows which row to UPDATE.
      const result = await process_product_update({ ...data, id });
      setServerMessage(result.message);
    } catch (error) {
      setServerMessage('A server error 500 occurred.');
    }
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Edit Product</h2>
        <p className="text-muted mb-0">Update product details</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit(submit)}>
            {/* Basic Information */}
            <h5 className="fw-bold mb-3">Basic Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-8">
                <label className="form-label fw-semibold">Product Title *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter product title"
                  {...register('title')}
                />
                {errors.title && <p className="text-danger small mt-1">{errors.title.message}</p>}
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">SKU *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product SKU"
                  {...register('sku')}
                />
                {errors.sku && <p className="text-danger small mt-1">{errors.sku.message}</p>}
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold">Description *</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Detailed product description"
                  {...register('description')}
                ></textarea>
                {errors.description && <p className="text-danger small mt-1">{errors.description.message}</p>}
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
                  {...register('price')}
                />
                {errors.price && <p className="text-danger small mt-1">{errors.price.message}</p>}
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Stock Quantity *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Available units"
                  {...register('stock')}
                />
                {errors.stock && <p className="text-danger small mt-1">{errors.stock.message}</p>}
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Condition *</label>
                <select className="form-select" {...register('condition')}>
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
                <select className="form-select" {...register('category')}>
                  <option value="">Select category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Home">Home & Living</option>
                  <option value="Sports">Sports & Outdoors</option>
                  <option value="Beauty">Beauty & Health</option>
                  <option value="Accessories">Accessories</option>
                </select>
                {errors.category && <p className="text-danger small mt-1">{errors.category.message}</p>}
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Seller Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Seller or brand name"
                  {...register('seller')}
                />
                {errors.seller && <p className="text-danger small mt-1">{errors.seller.message}</p>}
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Rating *</label>
                <select className="form-select" {...register('rating')}>
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
                  {...register('image')}
                />
                {errors.image && <p className="text-danger small mt-1">{errors.image.message}</p>}
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Tags</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="tag1, tag2, tag3"
                  {...register('tags')}
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
                  {...register('weight')}
                />
                {errors.weight && <p className="text-danger small mt-1">{errors.weight.message}</p>}
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Length (cm) *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  {...register('length')}
                />
                {errors.length && <p className="text-danger small mt-1">{errors.length.message}</p>}
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Width (cm) *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  {...register('width')}
                />
                {errors.width && <p className="text-danger small mt-1">{errors.width.message}</p>}
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Height (cm) *</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  {...register('height')}
                />
                {errors.height && <p className="text-danger small mt-1">{errors.height.message}</p>}
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
          {serverMessage && (
            <p className="mt-3 mb-0">
              <strong>{serverMessage}</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductEdit;
