import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { process_login } from '../serviceApi';
import Navigation from './Navigation';
import Footer from './Footer';

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [serverMessage, setServerMessage] = useState('');

  const schema = z.object({
    accountType: z.string(),
    email: z.string().email({ message: 'Enter a valid email.' }),
    password: z.string().min(6, { message: 'Minimum 6 characters.' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  async function submit(data) {
    try {
      // Ask PHP to check the email + password against the database.
      const result = await process_login(data);

      if (result.success) {
        login(data.email);
        // Redirect by the role the database returned.
        if (result.role === 'Admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      } else {
        // Wrong email or password -> show the message under the form.
        setServerMessage(result.message);
      }
    } catch (error) {
      setServerMessage('A server error 500 occurred.');
    }
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      
      <div className="container py-5 flex-grow-1">
        <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center py-3">
              <h4 className="mb-1">Welcome Back!</h4>
              <p className="mb-0 small">Log in to your Yaqeen account</p>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit(submit)}>
                {/* Account Type Selection */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Login As</label>
                  <select className="form-select" {...register('accountType')}>
                    <option value="user">User Account</option>
                    <option value="admin">Admin Account</option>
                  </select>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    {...register('email')}
                  />
                  {errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    {...register('password')}
                  />
                  {errors.password && <p className="text-danger small mt-1">{errors.password.message}</p>}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                      {...register('rememberMe')}
                    />
                    <label className="form-check-label small" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <Link to="/contact" className="small text-decoration-none">Forgot Password?</Link>
                </div>

                {/* Submit Button */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg fw-semibold">Log In</button>
                </div>
              </form>
              {serverMessage && (
                <p className="text-center mt-3 mb-0 text-danger">
                  <strong>{serverMessage}</strong>
                </p>
              )}
              <p className="text-center mt-3 mb-0 small">
                Don't have an account? <Link to="/register" className="fw-semibold">Sign Up</Link>
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

export default Login;
