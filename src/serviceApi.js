import axios from "axios";

const BASE_URL = "https://yaqeen.great-site.net/yaqeen-backend";

// Laravel API (php artisan serve -> http://localhost:8000).
// All CRUD (users, products, testimonials, requests, activities, contact,
// login, register) is routed to Laravel. Only the About-page reads
// (team, milestones, values, stats, status, contact info) still use PHP.
const LARAVEL_URL = "http://localhost:8000/api";

// ===== WRITE functions: send data INTO the database =====

// Registration form -> inserts a new row in "users" (Laravel: POST /api/register).
export const process_registration = async (data) => {
  const response = await axios.post(LARAVEL_URL + "/register", data);
  return response.data;
};

// Contact form -> saves a message in "contacts" (Laravel: POST /api/contacts).
export const process_contact = async (data) => {
  const response = await axios.post(LARAVEL_URL + "/contacts", data);
  return response.data;
};

// Admin "Add User" form -> inserts a new row in "users" (Laravel: POST /api/users).
export const process_user_add = async (data) => {
  await axios.post(LARAVEL_URL + "/users", data);
  return { message: "User added successfully." };
};

// Admin "Edit User" form -> updates an existing row (Laravel: PUT /api/users/{id}).
export const process_user_update = async (data) => {
  await axios.put(LARAVEL_URL + "/users/" + data.id, data);
  return { message: "User updated successfully." };
};

// Login form -> checks email + password against "users" (Laravel: POST /api/login).
export const process_login = async (data) => {
  const response = await axios.post(LARAVEL_URL + "/login", data);
  return response.data;
};

// Admin "Add Product" form -> inserts a new row in "products" (Laravel: POST /api/products).
export const process_product_add = async (data) => {
  await axios.post(LARAVEL_URL + "/products", data);
  return { message: "Product '" + data.title + "' added successfully." };
};

// Admin "Edit Product" form -> updates an existing row (Laravel: PUT /api/products/{id}).
export const process_product_update = async (data) => {
  await axios.put(LARAVEL_URL + "/products/" + data.id, data);
  return { message: "Product '" + data.title + "' updated successfully." };
};

// Delete a user -> removes the row (Laravel: DELETE /api/users/{id}).
export const process_user_delete = async (id) => {
  const response = await axios.delete(LARAVEL_URL + "/users/" + id);
  return response.data;
};

// Delete a product -> removes the row (Laravel: DELETE /api/products/{id}).
export const process_product_delete = async (id) => {
  const response = await axios.delete(LARAVEL_URL + "/products/" + id);
  return response.data;
};

// Admin Requests -> approve/reject changes the status (Laravel: PUT /api/requests/{id}).
export const process_request_status = async (id, status) => {
  const response = await axios.put(LARAVEL_URL + "/requests/" + id, { status });
  return response.data;
};

// ===== GET functions: read data FROM the database to show on pages =====

// All products (Laravel: GET /api/products).
export const get_products = async () => {
  const response = await axios.get(LARAVEL_URL + "/products");
  return response.data;
};

// One product by id (Laravel: GET /api/products/{id}).
export const get_product = async (id) => {
  const response = await axios.get(LARAVEL_URL + "/products/" + id);
  return response.data;
};

// All testimonials (Laravel: GET /api/testimonials).
export const get_testimonials = async () => {
  const response = await axios.get(LARAVEL_URL + "/testimonials");
  return response.data;
};

// All users (Laravel: GET /api/users) — admin Users list + Dashboard stats.
export const get_users = async () => {
  const response = await axios.get(LARAVEL_URL + "/users");
  return response.data;
};

// One user by id (Laravel: GET /api/users/{id}) — admin Edit User prefill.
export const get_user = async (id) => {
  const response = await axios.get(LARAVEL_URL + "/users/" + id);
  return response.data;
};

// All requests (Laravel: GET /api/requests).
export const get_requests = async () => {
  const response = await axios.get(LARAVEL_URL + "/requests");
  return response.data;
};

// All recent activities (Laravel: GET /api/activities).
export const get_activities = async () => {
  const response = await axios.get(LARAVEL_URL + "/activities");
  return response.data;
};

// Team members (for the About page).
export const get_team = async () => {
  const response = await axios.get(BASE_URL + "/get_team.php");
  return response.data;
};

// Milestones / journey (for the About page).
export const get_milestones = async () => {
  const response = await axios.get(BASE_URL + "/get_milestones.php");
  return response.data;
};

// Core values (for the About page).
export const get_values = async () => {
  const response = await axios.get(BASE_URL + "/get_values.php");
  return response.data;
};

// About stats (for the About page).
export const get_stats = async () => {
  const response = await axios.get(BASE_URL + "/get_stats.php");
  return response.data;
};

// System status rows (for the admin Dashboard right card).
export const get_status = async () => {
  const response = await axios.get(BASE_URL + "/get_status.php");
  return response.data;
};

// Contact information (for the Contact page).
export const get_contact_info = async () => {
  const response = await axios.get(BASE_URL + "/get_contact_info.php");
  return response.data;
};
