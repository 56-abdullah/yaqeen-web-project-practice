import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { get_products, get_users, get_activities, get_status } from '../../serviceApi';

function Dashboard() {
  // Load products + users + activities + system status from the database.
  const [productsData, setProductsData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [systemStatus, setSystemStatus] = useState([]);

  useEffect(() => {
    async function load() {
      const products = await get_products();
      setProductsData(products);
      const users = await get_users();
      setUsersData(users);
      const activities = await get_activities();
      setRecentActivities(activities);
      const status = await get_status();
      setSystemStatus(status);
    }
    load();
  }, []);

  // Split the status rows: badges vs the storage progress bar.
  const statusBadges = systemStatus.filter(s => s.state !== 'storage');
  const storageRow = systemStatus.find(s => s.state === 'storage');

  // Calculate statistics
  const totalProducts = productsData.length;
  const totalUsers = usersData.length;
  const activeUsers = usersData.filter(u => u.status === 'Active').length;
  const pendingUsers = usersData.filter(u => u.status === 'Pending').length;
  const totalSellers = usersData.filter(u => u.role === 'Seller').length;

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
              <p className="text-muted mb-1 small">Total Products</p>
              <h3 className="fw-bold mb-0">{totalProducts}</h3>
              <Link to="/admin/products" className="btn btn-sm btn-outline-primary mt-3 w-100">View All</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-1 small">Total Users</p>
              <h3 className="fw-bold mb-0">{totalUsers}</h3>
              <Link to="/admin/users" className="btn btn-sm btn-outline-success mt-3 w-100">Manage Users</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-1 small">Active Sellers</p>
              <h3 className="fw-bold mb-0">{totalSellers}</h3>
              <p className="text-muted small mb-0 mt-3">{activeUsers} active users</p>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <p className="text-muted mb-1 small">Pending Requests</p>
              <h3 className="fw-bold mb-0">{pendingUsers}</h3>
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
                  Add New Product
                </Link>
                <Link to="/admin/users/add" className="btn btn-success">
                  Add New User
                </Link>
                <Link to="/admin/requests" className="btn btn-warning">
                  Review Requests
                </Link>
                <Link to="/admin/products" className="btn btn-info text-white">
                  Manage Products
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
                {statusBadges.map((item) => (
                  <div className="d-flex justify-content-between mb-1" key={item.id}>
                    <span className="small">{item.label}</span>
                    <span className="badge bg-success">{item.value}</span>
                  </div>
                ))}
              </div>
              {storageRow && (
                <>
                  <hr />
                  <div>
                    <p className="small text-muted mb-2">{storageRow.label}</p>
                    <div className="progress" style={{ height: '8px' }}>
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${storageRow.value}%` }}></div>
                    </div>
                    <p className="small text-muted mt-1">{storageRow.value}% of 100GB used</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
