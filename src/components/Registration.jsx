const Registration = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h4>Create an Account</h4>
            </div>
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Enter your full name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" placeholder="Create a password" />
                </div>
                <div className="mb-4">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control" placeholder="Confirm your password" />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">Register</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
