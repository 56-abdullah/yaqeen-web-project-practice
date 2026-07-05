import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Dashboard from "./pages/admin/Dashboard";
import ProductsList from "./pages/admin/ProductsList";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import UsersList from "./pages/admin/UsersList";
import UserAdd from "./pages/admin/UserAdd";
import UserEdit from "./pages/admin/UserEdit";
import Requests from "./pages/admin/Requests";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:id", element: <ProductDetail /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <Wishlist /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Registration /> },
  { path: "/admin", element: <Dashboard /> },
  { path: "/admin/products", element: <ProductsList /> },
  { path: "/admin/products/add", element: <ProductAdd /> },
  { path: "/admin/products/edit/:id", element: <ProductEdit /> },
  { path: "/admin/users", element: <UsersList /> },
  { path: "/admin/users/add", element: <UserAdd /> },
  { path: "/admin/users/edit/:id", element: <UserEdit /> },
  { path: "/admin/requests", element: <Requests /> },
]);

export default router;
