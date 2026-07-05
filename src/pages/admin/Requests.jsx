import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { get_requests, process_request_status } from '../../serviceApi';

function Requests() {
  const [requests, setRequests] = useState([]);

  // Load requests from the database when the page opens.
  useEffect(() => {
    async function load() {
      const data = await get_requests();
      setRequests(data);
    }
    load();
  }, []);

  const { register, watch } = useForm();
  const filterType = watch('filterType') || 'all';

  async function handleApprove(requestId) {
    if (window.confirm('Are you sure you want to approve this request?')) {
      await process_request_status(requestId, 'Approved');
      setRequests(requests.map(req =>
        req.id === requestId ? { ...req, status: 'Approved' } : req
      ));
      alert('Request approved successfully!');
    }
  }

  async function handleReject(requestId) {
    if (window.confirm('Are you sure you want to reject this request?')) {
      await process_request_status(requestId, 'Rejected');
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
              <p className="text-muted mb-1 small">Pending Requests</p>
              <h3 className="fw-bold mb-0 text-warning">{pendingCount}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-1 small">Approved</p>
              <h3 className="fw-bold mb-0 text-success">{approvedCount}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-1 small">Rejected</p>
              <h3 className="fw-bold mb-0 text-danger">{rejectedCount}</h3>
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
              <select className="form-select" {...register('filterType')}>
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
