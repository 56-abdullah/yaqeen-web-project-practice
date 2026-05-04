function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-success text-white text-center">
              <h4>Welcome Back! Log In</h4>
            </div>
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-success btn-lg">Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
