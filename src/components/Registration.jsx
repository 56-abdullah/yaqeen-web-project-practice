import { useState } from 'react';
import { Link } from 'react-router-dom';

function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    city: '',
    address: '',
    postalCode: '',
    accountType: 'buyer',
    businessName: '',
    businessCategory: '',
    idCard: '',
    agreeTerms: false
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!formData.agreeTerms) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    if (formData.accountType === 'seller' && !formData.businessName) {
      alert('Business name is required for seller accounts.');
      return;
    }
    console.log('Registration submitted:', formData);
    alert('Registration successful! Your account is pending verification.');
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="yq-form-card card">
            <div className="yq-form-header">
              <h4>Create Your Account</h4>
              <p className="mb-0 small" style={{ opacity: 0.85 }}>Join the Yaqeen Marketplace community</p>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                {/* Account Type Selection */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Account Type *</label>
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="accountType"
                        id="buyer"
                        value="buyer"
                        checked={formData.accountType === 'buyer'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="buyer">
                        Buyer Account
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="accountType"
                        id="seller"
                        value="seller"
                        checked={formData.accountType === 'seller'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="seller">
                        Seller Account
                      </label>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <h6 className="fw-bold mb-3">Personal Information</h6>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your full name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+92 3XX XXXXXXX"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">ID Card Number *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="XXXXX-XXXXXXX-X"
                      name="idCard"
                      value={formData.idCard}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Address Information */}
                <h6 className="fw-bold mb-3">Address Information</h6>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">City *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Postal Code *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="XXXXX"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold">Complete Address *</label>
                    <textarea
                      className="form-control"
                      rows="2"
                      placeholder="House/Plot number, Street, Area"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Business Information (Conditional for Sellers) */}
                {formData.accountType === 'seller' && (
                  <>
                    <h6 className="fw-bold mb-3">Business Information</h6>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Business Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your business name"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          required={formData.accountType === 'seller'}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Business Category *</label>
                        <select
                          className="form-select"
                          name="businessCategory"
                          value={formData.businessCategory}
                          onChange={handleChange}
                          required={formData.accountType === 'seller'}
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
                    </div>
                  </>
                )}

                {/* Security */}
                <h6 className="fw-bold mb-3">Security</h6>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Password *</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Create a strong password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Confirm Password *</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm your password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                  />
                  <label className="form-check-label small" htmlFor="agreeTerms">
                    I agree to the <Link to="/about">Terms of Service</Link> and <Link to="/about">Privacy Policy</Link>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg fw-semibold">Create Account</button>
                </div>
              </form>
              <p className="text-center mt-3 mb-0 small">
                Already have an account? <Link to="/login" className="fw-semibold">Log In</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
