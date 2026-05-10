import { Link } from 'react-router-dom';
import productsData from '../../data/productsData.json';
import usersData from '../../data/usersData.json';

function Dashboard() {
  // Calculate statistics
  const totalProducts = productsData.length;
  const totalUsers = usersData.length;
  const activeUsers = usersData.filter(u => u.status === 'Active').length;
  const pendingUsers = usersData.filter(u => u.status === 'Pending').length;
  const totalSellers = usersData.filter(u => u.role === 'Seller').length;

  // Recent activities
  const recentActivities = [
    { id: 1, action: 'New user registered', user: 'Sara Ahmed', time: '2 hours ago', type: 'user' },
    { id: 2, action: 'Product listed', user: 'Gaming Laptop Pro', time: '5 hours ago', type: 'product' },
    { id: 3, action: 'Seller verification pending', user: 'Sikandar Khan', time: '1 day ago', type: 'pending' },
    { id: 4, action: 'Product updated', user: 'Premium Leather Watch', time: '2 days ago', type: 'product' }
  ];

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-2">Admin Dashboard</h2>
        <p className="text-muted">Welcome back! Here's what's happening with your marketplace.</p>
      </div>

      {/* Statistics Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="text-muted mb-1 small">Total Products</p>
                  <h3 className="fw-bold mb-0">{totalProducts}</h3>
                </div>
                <div className="bg-primary bg-opacity-10 p-3 rounded">
                  <span style={{ fontSize: '1.5rem' }}>📦</span>
                </div>
              </div>
              <Link to="/admin/products" className="btn btn-sm btn-outline-primary mt-3 w-100">View All</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="text-muted mb-1 small">Total Users</p>
                  <h3 className="fw-bold mb-0">{totalUsers}</h3>
                </div>
                <div className="bg-success bg-opacity-10 p-3 rounded">
                  <span style={{ fontSize: '1.5rem' }}>👥</span>
                </div>
              </div>
              <Link to="/admin/users" className="btn btn-sm btn-outline-success mt-3 w-100">Manage Users</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="text-muted mb-1 small">Active Sellers</p>
                  <h3 className="fw-bold mb-0">{totalSellers}</h3>
                </div>
                <div className="bg-warning bg-opacity-10 p-3 rounded">
                  <span style={{ fontSize: '1.5rem' }}>🏪</span>
                </div>
              </div>
              <p className="text-muted small mb-0 mt-3">{activeUsers} active users</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="text-muted mb-1 small">Pending Requests</p>
                  <h3 className="fw-bold mb-0">{pendingUsers}</h3>
                </div>
                <div className="bg-danger bg-opacity-10 p-3 rounded">
                  <span style={{ fontSize: '1.5rem' }}>📋</span>
                </div>
              </div>
              <Link to="/admin/requests" className="btn btn-sm btn-outline-danger mt-3 w-100">Review Now</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row g-4 mb-4">
        <div className="col-md-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Quick Actions</h5>
              <div className="d-flex flex-wrap gap-2">
                <Link to="/admin/products/add" className="btn btn-primary">
                  ➕ Add New Product
                </Link>
                <Link to="/admin/users/add" className="btn btn-success">
                  👤 Add New User
                </Link>
                <Link to="/admin/requests" className="btn btn-warning">
                  📋 Review Requests
                </Link>
                <Link to="/admin/products" className="btn btn-info text-white">
                  📦 Manage Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="row g-4">
        <div className="col-md-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-3">Recent Activity</h5>
              <div className="table-responsive">
                <table className="table table-hover align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>Action</th>
                      <th>Details</th>
                      <th>Time</th>
                      <th>Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivities.map((activity) => (
                      <tr key={activity.id}>
                        <td className="fw-semibold">{activity.action}</td>
                        <td>{activity.user}</td>
                        <td className="text-muted small">{activity.time}</td>
                        <td>
                          <span className={`badge ${
                            activity.type === 'user' ? 'bg-success' :
                            activity.type === 'product' ? 'bg-primary' :
                            'bg-warning'
                          }`}>
                            {activity.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="fw-bold mb-3">System Status</h5>
              <div className="mb-3">
                <div className="d-flex justify-content-between mb-1">
                  <span className="small">Server Status</span>
                  <span className="badge bg-success">Online</span>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <span className="small">Database</span>
                  <span className="badge bg-success">Connected</span>
                </div>
                <div className="d-flex justify-content-between mb-1">
                  <span className="small">Payment Gateway</span>
                  <span className="badge bg-success">Active</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="small">Email Service</span>
                  <span className="badge bg-success">Running</span>
                </div>
              </div>
              <hr />
              <div>
                <p className="small text-muted mb-2">Storage Usage</p>
                <div className="progress" style={{ height: '8px' }}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{ width: '65%' }}></div>
                </div>
                <p className="small text-muted mt-1">65% of 100GB used</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
