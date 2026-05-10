import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserAdd() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'Buyer',
    status: 'Active',
    city: '',
    address: '',
    postalCode: '',
    joinDate: new Date().toISOString().split('T')[0],
    idCard: '',
    businessName: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('User added:', formData);
    alert('User added successfully!');
    navigate('/admin/users');
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Add New User</h2>
        <p className="text-muted mb-0">Fill in the details to add a new user to the system</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            {/* Personal Information */}
            <h5 className="fw-bold mb-3">Personal Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter full name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="user@example.com"
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

            {/* Account Details */}
            <h5 className="fw-bold mb-3">Account Details</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-4">
                <label className="form-label fw-semibold">Password *</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Create password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Role *</label>
                <select
                  className="form-select"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Status *</label>
                <select
                  className="form-select"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                  <option value="Suspended">Suspended</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Join Date *</label>
                <input
                  type="date"
                  className="form-control"
                  name="joinDate"
                  value={formData.joinDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Business Name (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="For sellers only"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Address Information */}
            <h5 className="fw-bold mb-3">Address Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold">City *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter city"
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
                  rows="3"
                  placeholder="House/Plot number, Street, Area"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-success px-4">
                Add User
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                onClick={() => navigate('/admin/users')}
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

export default UserAdd;
