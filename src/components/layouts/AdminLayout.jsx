import { Outlet, Link, useLocation } from 'react-router-dom';

function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/admin', label: 'Dashboard', exact: true },
    { path: '/admin/products', label: 'Products' },
    { path: '/admin/products/add', label: 'Add Product' },
    { path: '/admin/users', label: 'Users' },
    { path: '/admin/users/add', label: 'Add User' },
    { path: '/admin/requests', label: 'Requests' },
  ];

  const isActive = (path, exact) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="d-flex" style={{minHeight: '100vh'}}>
      <aside className="bg-dark text-white" style={{width: '250px', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto'}}>
        <div className="p-3 border-bottom border-secondary">
          <h5 className="fw-bold mb-0">Yaqeen Admin</h5>
        </div>
        <nav className="d-flex flex-column">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-decoration-none text-white-50 p-3 border-start border-3 ${isActive(item.path, item.exact) ? 'bg-dark bg-opacity-25 text-white border-warning' : 'border-transparent'}`}
              style={{transition: 'all 0.2s'}}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <hr className="mx-3 my-3 border-secondary" />
        <Link to="/" className="text-decoration-none text-muted p-3 d-block">
          ← Back to Website
        </Link>
      </aside>
      <div className="flex-grow-1 p-4 bg-light" style={{overflowY: 'auto'}}>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
