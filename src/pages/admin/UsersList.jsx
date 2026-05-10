import { useState } from 'react';
import { Link } from 'react-router-dom';
import usersData from '../../data/usersData.json';

function UsersList() {
  const [users, setUsers] = useState(usersData);
  const [searchTerm, setSearchTerm] = useState('');

  function handleDelete(userId) {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== userId));
      alert('User deleted successfully!');
    }
  }

  function handleStatusChange(userId, newStatus) {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, status: newStatus } : user
    ));
    alert(`User status updated to ${newStatus}!`);
  }

  // Filter users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Users Management</h2>
          <p className="text-muted mb-0">Manage all users in the marketplace</p>
        </div>
        <Link to="/admin/users/add" className="btn btn-success">
          ➕ Add New User
        </Link>
      </div>

      {/* Search Bar */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                placeholder="Search users by name, email, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-6 text-end">
              <span className="text-muted">
                Showing <strong>{filteredUsers.length}</strong> of <strong>{users.length}</strong> users
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>City</th>
                  <th>Join Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="fw-semibold">#{user.id}</td>
                    <td>
                      <div className="fw-semibold">{user.name}</div>
                    </td>
                    <td className="text-muted small">{user.email}</td>
                    <td className="text-muted small">{user.phone}</td>
                    <td>
                      <span className={`badge ${
                        user.role === 'Seller' ? 'bg-primary' : 'bg-secondary'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="text-muted small">{user.city}</td>
                    <td className="text-muted small">{user.joinDate}</td>
                    <td>
                      <select
                        className={`form-select form-select-sm ${
                          user.status === 'Active' ? 'text-success' :
                          user.status === 'Pending' ? 'text-warning' :
                          'text-danger'
                        }`}
                        value={user.status}
                        onChange={(e) => handleStatusChange(user.id, e.target.value)}
                        style={{ width: '120px' }}
                      >
                        <option value="Active">Active</option>
                        <option value="Pending">Pending</option>
                        <option value="Suspended">Suspended</option>
                      </select>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <Link
                          to={`/admin/users/edit/${user.id}`}
                          className="btn btn-sm btn-outline-primary"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="btn btn-sm btn-outline-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">No users found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Statistics */}
      <div className="row g-3 mt-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h4 className="fw-bold text-success">{users.filter(u => u.status === 'Active').length}</h4>
              <p className="text-muted mb-0 small">Active Users</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h4 className="fw-bold text-warning">{users.filter(u => u.status === 'Pending').length}</h4>
              <p className="text-muted mb-0 small">Pending Approval</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <h4 className="fw-bold text-primary">{users.filter(u => u.role === 'Seller').length}</h4>
              <p className="text-muted mb-0 small">Total Sellers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersList;
