import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/admin/Dashboard";
import ProductsList from "./pages/admin/ProductsList";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import UsersList from "./pages/admin/UsersList";
import UserAdd from "./pages/admin/UserAdd";
import UserEdit from "./pages/admin/UserEdit";
import Requests from "./pages/admin/Requests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "/products", element: <Products /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Registration /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <Dashboard /> },
      { path: "/admin/products", element: <ProductsList /> },
      { path: "/admin/products/add", element: <ProductAdd /> },
      { path: "/admin/products/edit/:id", element: <ProductEdit /> },
      { path: "/admin/users", element: <UsersList /> },
      { path: "/admin/users/add", element: <UserAdd /> },
      { path: "/admin/users/edit/:id", element: <UserEdit /> },
      { path: "/admin/requests", element: <Requests /> },
    ],
  },
]);

export default router;
