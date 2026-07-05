import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { process_registration } from '../serviceApi';
import Navigation from './Navigation';
import Footer from './Footer';

function Registration() {
  const [serverMessage, setServerMessage] = useState('');
  const schema = z.object({
    accountType: z.string().min(1, { message: 'Select account type.' }),
    fullName: z.string().min(3, { message: 'Minimum 3 characters.' }),
    email: z.string().email({ message: 'Enter a valid email.' }),
    phone: z.string().min(10, { message: 'Minimum 10 numbers.' }),
    idCard: z.string().min(13, { message: 'Enter valid ID card number.' }),
    city: z.string().min(2, { message: 'Enter your city.' }),
    postalCode: z.string().min(4, { message: 'Enter valid postal code.' }),
    address: z.string().min(5, { message: 'Enter complete address.' }),
    businessName: z.string().optional(),
    businessCategory: z.string().optional(),
    password: z.string().min(6, { message: 'Minimum 6 characters.' }),
    confirmPassword: z.string().min(6, { message: 'Minimum 6 characters.' }),
    agreeTerms: z.boolean().optional(),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const accountType = watch('accountType');

  async function submit(data) {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!data.agreeTerms) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    if (data.accountType === 'seller' && !data.businessName) {
      alert('Business name is required for seller accounts.');
      return;
    }

    try {
      const result = await process_registration(data);
      setServerMessage(result.message);
    } catch (error) {
      setServerMessage('A server error 500 occurred.');
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      
      <div className="container py-5 flex-grow-1">
        <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-1">Create Your Account</h4>
              <p className="mb-0 small">Join the Yaqeen Marketplace community</p>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit(submit)}>
                {/* Account Type Selection */}
                <div className="mb-4">
                  <label className="form-label fw-semibold">Account Type *</label>
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="buyer"
                        value="buyer"
                        {...register('accountType')}
                      />
                      <label className="form-check-label" htmlFor="buyer">
                        Buyer Account
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="seller"
                        value="seller"
                        {...register('accountType')}
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
                      {...register('fullName')}
                    />
                    {errors.fullName && <p className="text-danger small mt-1">{errors.fullName.message}</p>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
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

                {/* Address Information */}
                <h6 className="fw-bold mb-3">Address Information</h6>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">City *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your city"
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
                      rows="2"
                      placeholder="House/Plot number, Street, Area"
                      {...register('address')}
                    ></textarea>
                    {errors.address && <p className="text-danger small mt-1">{errors.address.message}</p>}
                  </div>
                </div>

                {/* Business Information (Conditional for Sellers) */}
                {accountType === 'seller' && (
                  <>
                    <h6 className="fw-bold mb-3">Business Information</h6>
                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Business Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your business name"
                          {...register('businessName')}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Business Category *</label>
                        <select
                          className="form-select"
                          {...register('businessCategory')}
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
                      {...register('password')}
                    />
                    {errors.password && <p className="text-danger small mt-1">{errors.password.message}</p>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold">Confirm Password *</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm your password"
                      {...register('confirmPassword')}
                    />
                    {errors.confirmPassword && <p className="text-danger small mt-1">{errors.confirmPassword.message}</p>}
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreeTerms"
                    {...register('agreeTerms')}
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
              {serverMessage && (
                <p className="text-center mt-3 mb-0">
                  <strong>{serverMessage}</strong>
                </p>
              )}
              <p className="text-center mt-3 mb-0 small">
                Already have an account? <Link to="/login" className="fw-semibold">Log In</Link>
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Registration;
