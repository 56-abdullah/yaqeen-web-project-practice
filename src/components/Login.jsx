import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    accountType: 'user'
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
    console.log('Login submitted:', formData);
    
    // Redirect based on account type
    if (formData.accountType === 'admin') {
      alert('Admin login successful! Redirecting to admin panel...');
      navigate('/admin');
    } else {
      alert('Login successful! Welcome back.');
      navigate('/');
    }
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="yq-form-card card">
            <div className="yq-form-header">
              <h4>Welcome Back!</h4>
              <p className="mb-0 small" style={{ opacity: 0.85 }}>Log in to your Yaqeen account</p>
            </div>
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                {/* Account Type Selection */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Login As</label>
                  <select
                    className="form-select"
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleChange}
                  >
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label fw-semibold">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
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
              <p className="text-center mt-3 mb-0 small">
                Don't have an account? <Link to="/register" className="fw-semibold">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
