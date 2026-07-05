import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { process_user_add } from '../../serviceApi';

function UserAdd() {
  const navigate = useNavigate();
  const [serverMessage, setServerMessage] = useState('');

  const schema = z.object({
    name: z.string().min(3, { message: 'Minimum 3 characters.' }),
    email: z.string().email({ message: 'Enter a valid email.' }),
    phone: z.string().min(10, { message: 'Minimum 10 numbers.' }),
    idCard: z.string().min(13, { message: 'Enter valid ID card number.' }),
    password: z.string().min(6, { message: 'Minimum 6 characters.' }),
    role: z.string(),
    status: z.string(),
    joinDate: z.string().min(1, { message: 'Select join date.' }),
    businessName: z.string().optional(),
    city: z.string().min(2, { message: 'Enter city.' }),
    postalCode: z.string().min(4, { message: 'Enter valid postal code.' }),
    address: z.string().min(5, { message: 'Enter complete address.' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  async function submit(data) {
    try {
      const result = await process_user_add(data);
      setServerMessage(result.message);
    } catch (error) {
      setServerMessage('A server error 500 occurred.');
    }
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Add New User</h2>
        <p className="text-muted mb-0">Fill in the details to add a new user to the system</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit(submit)}>
            {/* Personal Information */}
            <h5 className="fw-bold mb-3">Personal Information</h5>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Full Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter full name"
                  {...register('name')}
                />
                {errors.name && <p className="text-danger small mt-1">{errors.name.message}</p>}
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Email Address *</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="user@example.com"
                  {...register('email')}
                />
                {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Phone Number *</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="+92 3XX XXXXXXX"
                  {...register('phone')}
                />
                {errors.phone && <p className="text-danger small mt-1">{errors.phone.message}</p>}
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">ID Card Number *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="XXXXX-XXXXXXX-X"
                  {...register('idCard')}
                />
                {errors.idCard && <p className="text-danger small mt-1">{errors.idCard.message}</p>}
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
                  {...register('password')}
                />
                {errors.password && <p className="text-danger small mt-1">{errors.password.message}</p>}
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Role *</label>
                <select className="form-select" {...register('role')}>
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Status *</label>
                <select className="form-select" {...register('status')}>
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
                  {...register('joinDate')}
                />
                {errors.joinDate && <p className="text-danger small mt-1">{errors.joinDate.message}</p>}
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Business Name (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="For sellers only"
                  {...register('businessName')}
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
                  {...register('city')}
                />
                {errors.city && <p className="text-danger small mt-1">{errors.city.message}</p>}
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold">Postal Code *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="XXXXX"
                  {...register('postalCode')}
                />
                {errors.postalCode && <p className="text-danger small mt-1">{errors.postalCode.message}</p>}
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold">Complete Address *</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="House/Plot number, Street, Area"
                  {...register('address')}
                ></textarea>
                {errors.address && <p className="text-danger small mt-1">{errors.address.message}</p>}
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

export default UserAdd;
