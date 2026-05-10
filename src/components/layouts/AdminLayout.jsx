import { Outlet, Link, useLocation } from 'react-router-dom';

function AdminLayout() {
  const location = useLocation();

  const navItems = [
    { path: '/admin', label: '📊 Dashboard', exact: true },
    { path: '/admin/products', label: '📦 Products' },
    { path: '/admin/products/add', label: '➕ Add Product' },
    { path: '/admin/users', label: '👥 Users' },
    { path: '/admin/users/add', label: '➕ Add User' },
    { path: '/admin/requests', label: '📋 Requests' },
  ];

  const isActive = (path, exact) => {
    if (exact) return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <div className="yq-admin-wrapper">
      <aside className="yq-admin-sidebar">
        <div className="brand">Yaqeen Admin</div>
        <nav className="d-flex flex-column">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${isActive(item.path, item.exact) ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <hr className="mx-3 my-3" style={{ borderColor: 'rgba(255,255,255,.15)' }} />
        <Link to="/" className="nav-link text-muted px-3">
          ← Back to Website
        </Link>
      </aside>
      <div className="yq-admin-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
