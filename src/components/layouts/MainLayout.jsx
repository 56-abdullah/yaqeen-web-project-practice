import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Footer from '../Footer';

function MainLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
