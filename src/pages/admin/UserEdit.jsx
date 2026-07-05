import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import { process_user_update, get_user } from '../../serviceApi';

function UserEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [serverMessage, setServerMessage] = useState('');

  const schema = z.object({
    name: z.string().min(3, { message: 'Minimum 3 characters.' }),
    email: z.string().email({ message: 'Enter a valid email.' }),
    phone: z.string().min(10, { message: 'Minimum 10 numbers.' }),
    idCard: z.string().min(13, { message: 'Enter valid ID card number.' }),
    password: z.string().optional(),
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
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // Load the user from the database and fill the form.
  useEffect(() => {
    async function load() {
      const user = await get_user(id);
      if (user) {
        reset({
          name: user.name,
          email: user.email,
          phone: user.phone,
          password: '********',
          role: user.role,
          status: user.status,
          city: user.city || '',
          address: user.address || '',
          postalCode: user.postalCode || '',
          joinDate: user.joinDate,
          idCard: user.idCard || '',
          businessName: user.businessName || ''
        });
      }
    }
    load();
  }, [id, reset]);

  async function submit(data) {
    try {
      // Send the id (from the URL) so PHP knows which row to UPDATE.
      const result = await process_user_update({ ...data, id });
      setServerMessage(result.message);
    } catch (error) {
      setServerMessage('A server error 500 occurred.');
    }
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Edit User</h2>
        <p className="text-muted mb-0">Update user details</p>
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
                <label className="form-label fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Leave blank to keep current"
                  {...register('password')}
                />
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
              <button type="submit" className="btn btn-primary px-4">
                Update User
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

export default UserEdit;
