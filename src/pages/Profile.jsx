import { useEffect, useState, useContext } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { get_user, process_user_update, process_user_delete } from '../serviceApi';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function Profile() {
  const navigate = useNavigate();
  const { user, userId, logout } = useContext(AuthContext);
  const [serverMessage, setServerMessage] = useState('');

  const schema = z.object({
    name: z.string().min(3, { message: 'Minimum 3 characters.' }),
    email: z.string().email({ message: 'Enter a valid email.' }),
    phone: z.string().min(10, { message: 'Minimum 10 numbers.' }),
    password: z.string().optional(),
    city: z.string().min(2, { message: 'Enter city.' }),
    postalCode: z.string().min(4, { message: 'Enter valid postal code.' }),
    address: z.string().min(5, { message: 'Enter complete address.' }),
    // hidden fields we keep so they are not wiped on update
    idCard: z.string(),
    role: z.string(),
    status: z.string(),
    joinDate: z.string(),
    businessName: z.string().optional(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // READ: load the logged-in user's own row and fill the form.
  useEffect(() => {
    async function load() {
      if (!userId) return;
      const me = await get_user(userId);
      if (me) {
        reset({
          name: me.name,
          email: me.email,
          phone: me.phone,
          password: '********',
          city: me.city || '',
          postalCode: me.postalCode || '',
          address: me.address || '',
          idCard: me.idCard || '',
          role: me.role || 'Buyer',
          status: me.status || 'Active',
          joinDate: me.joinDate || '',
          businessName: me.businessName || '',
        });
      }
    }
    load();
  }, [userId, reset]);

  // UPDATE: save the changes to this user's own row.
  async function submit(data) {
    try {
      const result = await process_user_update({ ...data, id: userId });
      setServerMessage(result.message);
    } catch (error) {
      setServerMessage('A server error 500 occurred.');
    }
  }

  // DELETE: remove this user's own account, then log out.
  async function handleDeleteAccount() {
    if (window.confirm('Delete your account permanently? This cannot be undone.')) {
      await process_user_delete(userId);
      logout();
      alert('Your account has been deleted.');
      navigate('/');
    }
  }

  // Guard: if nobody is logged in, ask them to log in first.
  if (!userId) {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <div className="container py-5 flex-grow-1 text-center">
          <h3 className="fw-bold mb-3">Please log in to view your profile</h3>
          <Link to="/login" className="btn btn-primary">Go to Login</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />

      <div className="container py-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-primary text-white py-3">
                <h4 className="mb-0">My Profile</h4>
                <p className="mb-0 small">Welcome, {user} — view and manage your account</p>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit(submit)}>
                  {/* hidden fields kept so the update does not wipe them */}
                  <input type="hidden" {...register('idCard')} />
                  <input type="hidden" {...register('role')} />
                  <input type="hidden" {...register('status')} />
                  <input type="hidden" {...register('joinDate')} />
                  <input type="hidden" {...register('businessName')} />

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Full Name *</label>
                      <input type="text" className="form-control" {...register('name')} />
                      {errors.name && <p className="text-danger small mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Email Address *</label>
                      <input type="email" className="form-control" {...register('email')} />
                      {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Phone Number *</label>
                      <input type="tel" className="form-control" {...register('phone')} />
                      {errors.phone && <p className="text-danger small mt-1">{errors.phone.message}</p>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Password</label>
                      <input type="password" className="form-control" placeholder="Leave blank to keep current" {...register('password')} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">City *</label>
                      <input type="text" className="form-control" {...register('city')} />
                      {errors.city && <p className="text-danger small mt-1">{errors.city.message}</p>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-semibold">Postal Code *</label>
                      <input type="text" className="form-control" {...register('postalCode')} />
                      {errors.postalCode && <p className="text-danger small mt-1">{errors.postalCode.message}</p>}
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-semibold">Complete Address *</label>
                      <textarea className="form-control" rows="3" {...register('address')}></textarea>
                      {errors.address && <p className="text-danger small mt-1">{errors.address.message}</p>}
                    </div>
                  </div>

                  <div className="d-flex gap-2 mt-4">
                    <button type="submit" className="btn btn-primary px-4">Update Profile</button>
                    <button type="button" className="btn btn-outline-danger px-4" onClick={handleDeleteAccount}>
                      Delete My Account
                    </button>
                  </div>
                </form>
                {serverMessage && (
                  <p className="mt-3 mb-0"><strong>{serverMessage}</strong></p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Profile;
