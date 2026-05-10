import { useState } from 'react';

function Requests() {
  const [requests, setRequests] = useState([
    { id: 1, type: 'Seller Registration', name: 'Sikandar Khan', email: 'sikandar@email.com', date: '2024-05-01', status: 'Pending', details: 'Requesting seller account approval' },
    { id: 2, type: 'Product Listing', name: 'Vintage Watch', seller: 'Ahmed Raza', date: '2024-05-02', status: 'Pending', details: 'New product listing for approval' },
    { id: 3, type: 'Seller Registration', name: 'Sara Ahmed', email: 'sara@email.com', date: '2024-05-02', status: 'Pending', details: 'Fashion business seller registration' },
    { id: 4, type: 'Product Listing', name: 'Gaming Laptop', seller: 'TechZone PK', date: '2024-05-03', status: 'Pending', details: 'High-end gaming laptop listing' },
    { id: 5, type: 'Seller Verification', name: 'Hassan Ali', email: 'hassan@email.com', date: '2024-05-04', status: 'Pending', details: 'Business verification documents submitted' },
    { id: 6, type: 'Product Update', name: 'Wireless Headphones', seller: 'AudioHub', date: '2024-05-05', status: 'Pending', details: 'Product information update request' }
  ]);

  const [filterType, setFilterType] = useState('all');

  function handleApprove(requestId) {
    if (window.confirm('Are you sure you want to approve this request?')) {
      setRequests(requests.map(req =>
        req.id === requestId ? { ...req, status: 'Approved' } : req
      ));
      alert('Request approved successfully!');
    }
  }

  function handleReject(requestId) {
    if (window.confirm('Are you sure you want to reject this request?')) {
      setRequests(requests.map(req =>
        req.id === requestId ? { ...req, status: 'Rejected' } : req
      ));
      alert('Request rejected!');
    }
  }

  // Filter requests
  const filteredRequests = filterType === 'all'
    ? requests
    : requests.filter(req => req.type === filterType);

  // Get unique request types
  const requestTypes = ['all', ...new Set(requests.map(r => r.type))];

  // Statistics
  const pendingCount = requests.filter(r => r.status === 'Pending').length;
  const approvedCount = requests.filter(r => r.status === 'Approved').length;
  const rejectedCount = requests.filter(r => r.status === 'Rejected').length;

  return (
    <div className="p-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">Requests Management</h2>
        <p className="text-muted mb-0">Review and manage pending requests</p>
      </div>

      {/* Statistics Cards */}
      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1 small">Pending Requests</p>
                  <h3 className="fw-bold mb-0 text-warning">{pendingCount}</h3>
                </div>
                <div className="bg-warning bg-opacity-10 p-3 rounded">
                  <span style={{ fontSize: '1.5rem' }}>⏳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1 small">Approved</p>
                  <h3 className="fw-bold mb-0 text-success">{approvedCount}</h3>
                </div>
                <div className="bg-success bg-opacity-10 p-3 rounded">
                  <span style={{ fontSize: '1.5rem' }}>✅</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1 small">Rejected</p>
                  <h3 className="fw-bold mb-0 text-danger">{rejectedCount}</h3>
                </div>
                <div className="bg-danger bg-opacity-10 p-3 rounded">
                  <span style={{ fontSize: '1.5rem' }}>❌</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3 align-items-center">
            <div className="col-md-4">
              <label className="form-label fw-semibold mb-2">Filter by Type</label>
              <select
                className="form-select"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                {requestTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Requests' : type}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-8 text-end">
              <span className="text-muted">
                Showing <strong>{filteredRequests.length}</strong> of <strong>{requests.length}</strong> requests
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Requests Table */}
      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Request Type</th>
                  <th>Name/Title</th>
                  <th>Details</th>
                  <th>Date Submitted</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((request) => (
                  <tr key={request.id}>
                    <td className="fw-semibold">#{request.id}</td>
                    <td>
                      <span className="badge bg-primary">{request.type}</span>
                    </td>
                    <td>
                      <div className="fw-semibold">{request.name}</div>
                      {request.email && <small className="text-muted">{request.email}</small>}
                      {request.seller && <small className="text-muted">by {request.seller}</small>}
                    </td>
                    <td className="text-muted small">{request.details}</td>
                    <td className="text-muted small">{request.date}</td>
                    <td>
                      <span className={`badge ${
                        request.status === 'Pending' ? 'bg-warning text-dark' :
                        request.status === 'Approved' ? 'bg-success' :
                        'bg-danger'
                      }`}>
                        {request.status}
                      </span>
                    </td>
                    <td>
                      {request.status === 'Pending' ? (
                        <div className="d-flex gap-2">
                          <button
                            onClick={() => handleApprove(request.id)}
                            className="btn btn-sm btn-success"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(request.id)}
                            className="btn btn-sm btn-danger"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-muted small">No action needed</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredRequests.length === 0 && (
            <div className="text-center py-5">
              <p className="text-muted">No requests found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Requests;
