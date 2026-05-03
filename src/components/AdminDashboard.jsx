const AdminDashboard = () => {
  const requests = [
    { id: 1, type: 'Seller Registration', name: 'Ali Khan', date: '2026-05-01', status: 'Pending' },
    { id: 2, type: 'Product Listing', name: 'Vintage Watch', date: '2026-05-02', status: 'Pending' },
    { id: 3, type: 'Seller Registration', name: 'Sara Ahmed', date: '2026-05-02', status: 'Pending' },
    { id: 4, type: 'Product Listing', name: 'Gaming Laptop', date: '2026-05-03', status: 'Pending' }
  ];

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-header bg-dark text-white">
              <h4 className="mb-0">Admin Dashboard - Pending Requests</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-bordered align-middle">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Request Type</th>
                      <th>Name/Title</th>
                      <th>Date Submitted</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((request) => (
                      <tr key={request.id}>
                        <td>{request.id}</td>
                        <td>{request.type}</td>
                        <td>{request.name}</td>
                        <td>{request.date}</td>
                        <td>
                          <span className="badge bg-warning text-dark">{request.status}</span>
                        </td>
                        <td>
                          <div className="d-flex gap-2">
                            <button className="btn btn-sm btn-success">Approve</button>
                            <button className="btn btn-sm btn-danger">Reject</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
