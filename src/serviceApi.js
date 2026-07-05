import axios from "axios";

// ============================================================
//  ONE place to set where the PHP backend lives.
//  - Local XAMPP  ->  "http://localhost/yaqeen-backend"
//  - Live hosting ->  "https://YOURSITE.infinityfreeapp.com/yaqeen-backend"
//  Change ONLY this line when you deploy.
// ============================================================
const BASE_URL = "http://localhost/yaqeen-backend";

// ===== WRITE functions: send data INTO the database =====

// Registration form -> inserts a new row in "users".
export const process_registration = async (data) => {
  const response = await axios.post(BASE_URL + "/register_processing.php", data);
  return response.data;
};

// Contact form -> saves a message in "contacts".
export const process_contact = async (data) => {
  const response = await axios.post(BASE_URL + "/contact_processing.php", data);
  return response.data;
};

// Admin "Add User" form -> inserts a new row in "users".
export const process_user_add = async (data) => {
  const response = await axios.post(BASE_URL + "/user_add_processing.php", data);
  return response.data;
};

// Admin "Edit User" form -> updates an existing row in "users".
export const process_user_update = async (data) => {
  const response = await axios.post(BASE_URL + "/user_update_processing.php", data);
  return response.data;
};

// Login form -> checks email + password against "users".
export const process_login = async (data) => {
  const response = await axios.post(BASE_URL + "/login_processing.php", data);
  return response.data;
};

// Admin "Add Product" form -> inserts a new row in "products".
export const process_product_add = async (data) => {
  const response = await axios.post(BASE_URL + "/product_add_processing.php", data);
  return response.data;
};

// Admin "Edit Product" form -> updates an existing row in "products".
export const process_product_update = async (data) => {
  const response = await axios.post(BASE_URL + "/product_update_processing.php", data);
  return response.data;
};

// Delete a user -> removes the row with this id from "users".
export const process_user_delete = async (id) => {
  const response = await axios.post(BASE_URL + "/delete_user.php", { id });
  return response.data;
};

// Delete a product -> removes the row with this id from "products".
export const process_product_delete = async (id) => {
  const response = await axios.post(BASE_URL + "/delete_product.php", { id });
  return response.data;
};

// Admin Requests -> approve/reject changes the status in "requests".
export const process_request_status = async (id, status) => {
  const response = await axios.post(BASE_URL + "/update_request_status.php", { id, status });
  return response.data;
};

// ===== GET functions: read data FROM the database to show on pages =====

// All products (for Products page, Landing page, admin Products list).
export const get_products = async () => {
  const response = await axios.get(BASE_URL + "/get_products.php");
  return response.data;
};

// One product by id (for the Product Detail page and admin Edit Product).
export const get_product = async (id) => {
  const response = await axios.get(BASE_URL + "/get_product.php?id=" + id);
  return response.data;
};

// All testimonials (for the Landing page).
export const get_testimonials = async () => {
  const response = await axios.get(BASE_URL + "/get_testimonials.php");
  return response.data;
};

// All users (for the admin Users list and Dashboard stats).
export const get_users = async () => {
  const response = await axios.get(BASE_URL + "/get_users.php");
  return response.data;
};

// One user by id (for admin Edit User prefill).
export const get_user = async (id) => {
  const response = await axios.get(BASE_URL + "/get_user.php?id=" + id);
  return response.data;
};

// All requests (for the admin Requests page).
export const get_requests = async () => {
  const response = await axios.get(BASE_URL + "/get_requests.php");
  return response.data;
};

// All recent activities (for the admin Dashboard).
export const get_activities = async () => {
  const response = await axios.get(BASE_URL + "/get_activities.php");
  return response.data;
};
