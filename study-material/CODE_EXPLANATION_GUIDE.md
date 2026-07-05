# 🎓 Complete Code Explanation Guide - Yaqeen Marketplace

## 📚 Table of Contents
1. [Project Setup & Structure](#project-setup--structure)
2. [React Basics Used](#react-basics-used)
3. [Routing Explanation](#routing-explanation)
4. [Bootstrap Components](#bootstrap-components)
5. [State Management](#state-management)
6. [Forms Explanation](#forms-explanation)
7. [Dynamic Data Rendering](#dynamic-data-rendering)
8. [Component-by-Component Breakdown](#component-by-component-breakdown)

---

## 1. Project Setup & Structure

### What is this project?
This is a **React + Vite** project for a marketplace called "Yaqeen" where people can buy and sell products.

### Key Technologies:
- **React** - JavaScript library for building user interfaces
- **Vite** - Fast build tool (like Create React App but faster)
- **React Router** - For navigation between pages
- **Bootstrap 5** - CSS framework for styling

### Folder Structure:
```
src/
├── components/          # Reusable components (Navigation, Footer, etc.)
├── pages/              # Full page components (About, Contact, etc.)
├── pages/admin/        # Admin panel pages
├── data/               # JSON files with fake data
├── router.jsx          # Routing configuration
└── main.jsx            # Entry point of the app
```

---

## 2. React Basics Used

### What is a Component?
A component is a reusable piece of UI. Think of it like a LEGO block - you can use it multiple times.

**Example:**
```javascript
function Navigation() {
  return (
    <nav>...</nav>
  );
}
```

### Import and Export
- **Export** - Make a component available to other files
- **Import** - Bring a component from another file

```javascript
// At the end of Navigation.jsx
export default Navigation;

// In another file
import Navigation from './components/Navigation';
```

### JSX (JavaScript XML)
JSX lets you write HTML-like code in JavaScript:
```javascript
return (
  <div className="container">
    <h1>Hello</h1>
  </div>
);
```

**Important:** Use `className` instead of `class` in JSX!

---

## 3. Routing Explanation

### What is Routing?
Routing lets users navigate between different pages without reloading the browser.

### How We Implemented It:

**File: `router.jsx`**
```javascript
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",              // URL path
    element: <MainLayout />, // Component to show
    children: [             // Nested routes
      { path: "/", element: <LandingPage /> },
      { path: "/products", element: <Products /> },
    ]
  }
]);
```

**Explanation:**
- `createBrowserRouter` - Latest React Router method (this is what your sir taught)
- `path` - The URL (e.g., `/products` means `localhost:5173/products`)
- `element` - Which component to show at that path
- `children` - Nested routes that share the same layout

### Link Component
Instead of `<a href="/products">`, we use:
```javascript
<Link to="/products">Products</Link>
```

**Why?** Because `<Link>` doesn't reload the page - it's faster!

---

## 4. Bootstrap Components

### What is Bootstrap?
Bootstrap is a CSS framework that provides pre-made styles for common UI elements.

### Bootstrap Classes We Use:

#### 1. **Container & Grid System**
```html
<div className="container">      <!-- Centers content, adds padding -->
  <div className="row">           <!-- Creates a row -->
    <div className="col-md-6">    <!-- Takes 6 out of 12 columns (50% width) -->
      Content here
    </div>
  </div>
</div>
```

**Grid System:** Bootstrap divides the page into 12 columns. `col-md-6` means "take 6 columns on medium screens and above."

#### 2. **Cards**
```html
<div className="card">
  <div className="card-body">
    <h5 className="card-title">Title</h5>
    <p className="card-text">Description</p>
  </div>
</div>
```

**What it does:** Creates a nice box with shadow and padding for content.

#### 3. **Forms**
```html
<form>
  <label className="form-label">Name</label>
  <input type="text" className="form-control" />
  <button className="btn btn-primary">Submit</button>
</form>
```

**Classes:**
- `form-label` - Styles the label
- `form-control` - Styles input fields (adds border, padding, etc.)
- `btn btn-primary` - Blue button with hover effects

#### 4. **Buttons**
```html
<button className="btn btn-primary">Primary</button>
<button className="btn btn-success">Success (Green)</button>
<button className="btn btn-danger">Danger (Red)</button>
```

#### 5. **Tables**
```html
<table className="table table-hover">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ali</td>
      <td>ali@email.com</td>
    </tr>
  </tbody>
</table>
```

**Classes:**
- `table` - Basic table styling
- `table-hover` - Rows highlight on hover

#### 6. **Navbar**
```html
<nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="/">Logo</Link>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/products">Products</Link>
      </li>
    </ul>
  </div>
</nav>
```

#### 7. **Carousel (Slider)**
```html
<div className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/1.jpg" />
    </div>
  </div>
</div>
```

**What it does:** Creates an automatic image slider.

#### 8. **Utility Classes**
```html
<!-- Spacing -->
<div className="mb-3">  <!-- margin-bottom: 1rem -->
<div className="mt-4">  <!-- margin-top: 1.5rem -->
<div className="p-4">   <!-- padding: 1.5rem -->

<!-- Text -->
<p className="text-center">  <!-- Center text -->
<p className="text-muted">   <!-- Gray text -->
<h1 className="fw-bold">     <!-- Bold font -->

<!-- Flexbox -->
<div className="d-flex justify-content-between">  <!-- Space between items -->
<div className="d-flex align-items-center">       <!-- Vertically center -->

<!-- Colors -->
<div className="bg-primary">   <!-- Blue background -->
<div className="text-success">  <!-- Green text -->
```

---

## 5. State Management

### What is State?
State is data that can change over time. When state changes, React re-renders the component.

### useState Hook
```javascript
import { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
}
```

**Explanation:**
- `useState({...})` - Creates state with initial values
- `formData` - Current state value (read-only)
- `setFormData` - Function to update state

### How Forms Work with State

**Step 1: Create State**
```javascript
const [formData, setFormData] = useState({
  name: '',
  email: ''
});
```

**Step 2: Handle Input Changes**
```javascript
function handleChange(e) {
  const { name, value } = e.target;  // Get input name and value
  setFormData((prevData) => ({
    ...prevData,        // Keep all previous data
    [name]: value       // Update only the changed field
  }));
}
```

**Step 3: Connect to Input**
```javascript
<input
  type="text"
  name="email"
  value={formData.email}
  onChange={handleChange}
/>
```

**How it works:**
1. User types in input
2. `onChange` triggers `handleChange`
3. `handleChange` updates state
4. React re-renders with new value

### Form Submission
```javascript
function handleSubmit(e) {
  e.preventDefault();  // Prevent page reload
  console.log('Form data:', formData);
  alert('Form submitted!');
}
```

---

## 6. Forms Explanation

### Registration Form (`Registration.jsx`)

**What it does:** Collects user information to create an account.

**Key Features:**
1. **Conditional Rendering** - Shows different fields based on account type:
```javascript
{formData.accountType === 'seller' && (
  <div>
    {/* Seller-specific fields */}
  </div>
)}
```

2. **Form Validation:**
```javascript
if (formData.password !== formData.confirmPassword) {
  alert('Passwords do not match!');
  return;
}
```

3. **Checkbox Handling:**
```javascript
const { type, checked } = e.target;
setFormData({
  ...prevData,
  [name]: type === 'checkbox' ? checked : value
});
```

### Login Form (`Login.jsx`)

**What it does:** Lets users log in to their account.

**Key Features:**
1. **Account Type Selector** - User or Admin
2. **Remember Me Checkbox**
3. **Navigation after login:**
```javascript
if (formData.accountType === 'admin') {
  navigate('/admin');  // Go to admin panel
} else {
  navigate('/');       // Go to home page
}
```

### Admin Forms

**ProductAdd.jsx** - Add new products (20+ fields)
**UserAdd.jsx** - Add new users (15+ fields)

Both use the same pattern:
1. Create state with `useState`
2. Handle changes with `handleChange`
3. Submit with `handleSubmit`
4. Navigate back with `useNavigate`

---

## 7. Dynamic Data Rendering

### What is Dynamic Rendering?
Instead of writing the same HTML multiple times, we use `.map()` to loop through data.

### The .map() Function

**Without .map() (BAD):**
```javascript
<div>Product 1</div>
<div>Product 2</div>
<div>Product 3</div>
// ... repeat 100 times
```

**With .map() (GOOD):**
```javascript
{products.map((product) => (
  <div key={product.id}>
    {product.title}
  </div>
))}
```

### How .map() Works

**Step 1: Import JSON Data**
```javascript
import productsData from '../data/productsData.json';
```

**Step 2: Use .map() to Loop**
```javascript
{productsData.map((product) => (
  <div className="col-md-4" key={product.id}>
    <div className="card">
      <img src={product.image} />
      <h5>{product.title}</h5>
      <p>Rs. {product.price}</p>
    </div>
  </div>
))}
```

**Explanation:**
- `productsData.map()` - Loop through each product
- `(product) =>` - Each item is called "product"
- `key={product.id}` - Unique identifier (React requirement)
- `{product.title}` - Display product data

### Where We Use .map()

1. **LandingPage.jsx** - Featured products
```javascript
const featuredProducts = productsData.slice(0, 6);  // Get first 6
{featuredProducts.map((product) => (...))}
```

2. **Products.jsx** - All products with filters
```javascript
const filteredProducts = productsData.filter(...);
{filteredProducts.map((product) => (...))}
```

3. **Requests.jsx** - Request list
```javascript
{requests.map((request) => (
  <tr key={request.id}>
    <td>{request.name}</td>
    <td>{request.status}</td>
  </tr>
))}
```

---

## 8. Component-by-Component Breakdown

### 🏠 User-Side Components

#### **Navigation.jsx**
**Purpose:** Top navigation bar with links

**Key Code:**
```javascript
const location = useLocation();  // Get current URL

<Link 
  className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
  to="/"
>
  Home
</Link>
```

**Explanation:**
- `useLocation()` - Hook to get current URL
- Conditional class - Adds 'active' class to current page link

---

#### **Hero.jsx**
**Purpose:** Carousel (image slider) on homepage

**Key Code:**
```javascript
<div className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/1.jpg" />
    </div>
  </div>
</div>
```

**Bootstrap Classes:**
- `carousel slide` - Creates carousel
- `carousel-item active` - First slide (active)
- `data-bs-ride="carousel"` - Auto-play

---

#### **LandingPage.jsx**
**Purpose:** Main homepage with 6 sections

**Structure:**
1. Hero Carousel
2. Features (Why Choose Yaqeen)
3. Featured Products (using .map())
4. How It Works
5. Testimonials (using .map())
6. CTA Banner

**Key Code - Featured Products:**
```javascript
const featuredProducts = productsData.slice(0, 6);

{featuredProducts.map((product) => (
  <div className="col-md-4" key={product.id}>
    <div className="card">
      <img src={product.image} className="card-img-top" />
      <div className="card-body">
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <span>Rs. {product.price.toLocaleString()}</span>
      </div>
    </div>
  </div>
))}
```

**Explanation:**
- `.slice(0, 6)` - Get only first 6 products
- `.toLocaleString()` - Format number with commas (50000 → 50,000)

---

#### **Products.jsx**
**Purpose:** Show all products with filters

**Key Features:**
1. **Filter State:**
```javascript
const [filters, setFilters] = useState({
  search: '',
  category: 'all',
  minPrice: '',
  maxPrice: ''
});
```

2. **Filtering Logic:**
```javascript
const filteredProducts = productsData.filter((product) => {
  const matchesSearch = product.title.toLowerCase().includes(filters.search.toLowerCase());
  const matchesCategory = filters.category === 'all' || product.category === filters.category;
  const matchesMinPrice = !filters.minPrice || product.price >= Number(filters.minPrice);
  const matchesMaxPrice = !filters.maxPrice || product.price <= Number(filters.maxPrice);
  
  return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice;
});
```

**Explanation:**
- `.filter()` - Keep only products that match all conditions
- `.toLowerCase()` - Case-insensitive search
- `.includes()` - Check if text contains search term
- `&&` - All conditions must be true

---

#### **Registration.jsx**
**Purpose:** User registration form

**Form Fields (14+):**
- Account Type (Buyer/Seller)
- Personal Info (Name, Email, Phone, ID Card)
- Address (City, Postal Code, Complete Address)
- Business Info (conditional for sellers)
- Password & Confirm Password
- Terms Agreement

**Key Code - Conditional Fields:**
```javascript
{formData.accountType === 'seller' && (
  <>
    <h6>Business Information</h6>
    <input
      name="businessName"
      value={formData.businessName}
      onChange={handleChange}
      required={formData.accountType === 'seller'}
    />
  </>
)}
```

**Validation:**
```javascript
if (formData.password !== formData.confirmPassword) {
  alert('Passwords do not match!');
  return;
}

if (!formData.agreeTerms) {
  alert('You must agree to the terms.');
  return;
}
```

---

#### **Login.jsx**
**Purpose:** User login form

**Key Features:**
1. **Account Type Selection:**
```javascript
<select name="accountType" value={formData.accountType} onChange={handleChange}>
  <option value="user">User Account</option>
  <option value="admin">Admin Account</option>
</select>
```

2. **Redirect After Login:**
```javascript
const navigate = useNavigate();

function handleSubmit(e) {
  e.preventDefault();
  
  if (formData.accountType === 'admin') {
    navigate('/admin');
  } else {
    navigate('/');
  }
}
```

---

#### **Footer.jsx**
**Purpose:** Bottom footer with links

**Simple Component:**
```javascript
function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Yaqeen Marketplace</p>
      </div>
    </footer>
  );
}
```

**Note:** `{new Date().getFullYear()}` - Automatically shows current year

---

### 🔧 Admin-Side Components

#### **AdminLayout.jsx**
**Purpose:** Layout wrapper for admin pages with sidebar

**Structure:**
```javascript
<div className="yq-admin-wrapper">
  <aside className="yq-admin-sidebar">
    {/* Sidebar navigation */}
  </aside>
  <div className="yq-admin-content">
    <Outlet />  {/* Child routes render here */}
  </div>
</div>
```

**Navigation Items:**
```javascript
const navItems = [
  { path: '/admin', label: 'Dashboard', exact: true },
  { path: '/admin/products', label: 'Products' },
  { path: '/admin/products/add', label: 'Add Product' },
  { path: '/admin/users', label: 'Users' },
  { path: '/admin/users/add', label: 'Add User' },
  { path: '/admin/requests', label: 'Requests' },
];
```

**Active Link Highlighting:**
```javascript
const isActive = (path, exact) => {
  if (exact) return location.pathname === path;
  return location.pathname.startsWith(path);
};

<Link className={`nav-link ${isActive(item.path, item.exact) ? 'active' : ''}`}>
```

---

#### **Dashboard.jsx**
**Purpose:** Admin overview with statistics

**Statistics Calculation:**
```javascript
const totalProducts = productsData.length;
const totalUsers = usersData.length;
const activeUsers = usersData.filter(u => u.status === 'Active').length;
const pendingUsers = usersData.filter(u => u.status === 'Pending').length;
```

**Explanation:**
- `.length` - Count total items
- `.filter()` - Count items matching condition

**Statistics Cards:**
```javascript
<div className="col-md-3">
  <div className="card">
    <div className="card-body">
      <p className="text-muted">Total Products</p>
      <h3>{totalProducts}</h3>
      <Link to="/admin/products" className="btn btn-sm btn-outline-primary">
        View All
      </Link>
    </div>
  </div>
</div>
```

---

#### **Requests.jsx** ⭐ (MOST IMPORTANT)
**Purpose:** Approve/Reject user and product requests

**State Management:**
```javascript
const [requests, setRequests] = useState([
  { id: 1, type: 'Seller Registration', name: 'Sikandar Khan', status: 'Pending' },
  // ... more requests
]);

const [filterType, setFilterType] = useState('all');
```

**Approve Function:**
```javascript
function handleApprove(requestId) {
  if (window.confirm('Are you sure you want to approve?')) {
    setRequests(requests.map(req =>
      req.id === requestId ? { ...req, status: 'Approved' } : req
    ));
    alert('Request approved successfully!');
  }
}
```

**Explanation:**
- `window.confirm()` - Show confirmation dialog
- `.map()` - Loop through all requests
- `req.id === requestId` - Find the request to update
- `{ ...req, status: 'Approved' }` - Copy request and change status
- `: req` - Keep other requests unchanged

**Reject Function:**
```javascript
function handleReject(requestId) {
  if (window.confirm('Are you sure you want to reject?')) {
    setRequests(requests.map(req =>
      req.id === requestId ? { ...req, status: 'Rejected' } : req
    ));
    alert('Request rejected!');
  }
}
```

**Filtering:**
```javascript
const filteredRequests = filterType === 'all'
  ? requests
  : requests.filter(req => req.type === filterType);
```

**Statistics:**
```javascript
const pendingCount = requests.filter(r => r.status === 'Pending').length;
const approvedCount = requests.filter(r => r.status === 'Approved').length;
const rejectedCount = requests.filter(r => r.status === 'Rejected').length;
```

**Table Rendering:**
```javascript
<table className="table table-hover">
  <thead>
    <tr>
      <th>ID</th>
      <th>Request Type</th>
      <th>Name</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {filteredRequests.map((request) => (
      <tr key={request.id}>
        <td>#{request.id}</td>
        <td><span className="badge bg-primary">{request.type}</span></td>
        <td>{request.name}</td>
        <td>
          <span className={`badge ${
            request.status === 'Pending' ? 'bg-warning' :
            request.status === 'Approved' ? 'bg-success' :
            'bg-danger'
          }`}>
            {request.status}
          </span>
        </td>
        <td>
          {request.status === 'Pending' ? (
            <div className="d-flex gap-2">
              <button onClick={() => handleApprove(request.id)} className="btn btn-sm btn-success">
                Approve
              </button>
              <button onClick={() => handleReject(request.id)} className="btn btn-sm btn-danger">
                Reject
              </button>
            </div>
          ) : (
            <span className="text-muted">No action needed</span>
          )}
        </td>
      </tr>
    ))}
  </tbody>
</table>
```

**Key Points:**
- Conditional badge color based on status
- Show buttons only for pending requests
- Arrow function in onClick: `() => handleApprove(request.id)`

---

#### **ProductAdd.jsx**
**Purpose:** Add new product form (20+ fields)

**Form Sections:**
1. Basic Information (Title, SKU, Description)
2. Pricing & Inventory (Price, Stock, Condition)
3. Category & Seller
4. Product Details (Image, Tags)
5. Shipping Information (Weight, Dimensions)

**Key Code:**
```javascript
const [formData, setFormData] = useState({
  title: '',
  description: '',
  price: '',
  category: '',
  seller: '',
  stock: '',
  condition: 'New',
  rating: '5',
  image: '',
  tags: '',
  sku: '',
  weight: '',
  length: '',
  width: '',
  height: ''
});

function handleSubmit(e) {
  e.preventDefault();
  console.log('Product added:', formData);
  alert('Product added successfully!');
  navigate('/admin/products');
}
```

---

#### **UserAdd.jsx**
**Purpose:** Add new user form (15+ fields)

**Form Sections:**
1. Personal Information (Name, Email, Phone, ID Card)
2. Account Details (Password, Role, Status, Join Date)
3. Address Information (City, Postal Code, Address)

**Role Selection:**
```javascript
<select name="role" value={formData.role} onChange={handleChange}>
  <option value="Buyer">Buyer</option>
  <option value="Seller">Seller</option>
  <option value="Admin">Admin</option>
</select>
```

---

#### **ProductsList.jsx**
**Purpose:** View all products in table format

**Key Features:**
- Display products from JSON
- Edit and Delete buttons
- Link to add new product

**Table Structure:**
```javascript
<table className="table table-hover">
  <thead>
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>Category</th>
      <th>Price</th>
      <th>Stock</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {productsData.map((product) => (
      <tr key={product.id}>
        <td><img src={product.image} width="50" /></td>
        <td>{product.title}</td>
        <td>{product.category}</td>
        <td>Rs. {product.price.toLocaleString()}</td>
        <td>{product.stock}</td>
        <td>
          <Link to={`/admin/products/edit/${product.id}`} className="btn btn-sm btn-warning">
            Edit
          </Link>
        </td>
      </tr>
    ))}
  </tbody>
</table>
```

---

#### **UsersList.jsx**
**Purpose:** View all users in table format

**Similar to ProductsList but for users:**
- Shows user name, email, role, status
- Edit button for each user
- Add new user button

---

### 📁 Data Files (JSON)

#### **productsData.json**
Contains array of product objects:
```json
[
  {
    "id": 1,
    "title": "Premium Leather Watch",
    "description": "Elegant timepiece...",
    "price": 15000,
    "category": "Accessories",
    "seller": "TimeZone PK",
    "stock": 25,
    "condition": "New",
    "rating": 4.5,
    "image": "/images/4.png"
  }
]
```

#### **usersData.json**
Contains array of user objects:
```json
[
  {
    "id": 1,
    "name": "Ahmed Ali",
    "email": "ahmed@email.com",
    "role": "Buyer",
    "status": "Active",
    "joinDate": "2024-01-15"
  }
]
```

#### **testimonialsData.json**
Contains customer reviews:
```json
[
  {
    "id": 1,
    "name": "Sara Ahmed",
    "role": "Verified Buyer",
    "text": "Amazing experience!",
    "avatar": "/images/18.jpg"
  }
]
```

---

## 🎯 Key Concepts to Remember

### 1. **React Hooks**
- `useState` - Manage component state
- `useNavigate` - Navigate programmatically
- `useLocation` - Get current URL

### 2. **Array Methods**
- `.map()` - Loop and render
- `.filter()` - Filter items
- `.slice()` - Get portion of array
- `.length` - Count items

### 3. **Event Handling**
- `onChange` - Input changes
- `onClick` - Button clicks
- `onSubmit` - Form submission
- `e.preventDefault()` - Stop default behavior

### 4. **Conditional Rendering**
```javascript
{condition && <div>Show this</div>}
{condition ? <div>True</div> : <div>False</div>}
```

### 5. **Spread Operator**
```javascript
const newData = { ...oldData, name: 'New Name' };
// Copies oldData and updates name
```

---

## 📝 Common Questions & Answers

### Q: Why use React Router instead of normal links?
**A:** React Router doesn't reload the page, making navigation faster. It's a Single Page Application (SPA).

### Q: What is the difference between `<a>` and `<Link>`?
**A:** `<a>` reloads the page, `<Link>` changes URL without reload.

### Q: Why do we need `key` in .map()?
**A:** React uses keys to identify which items changed. It improves performance.

### Q: What does `e.preventDefault()` do?
**A:** Stops the default form submission (which reloads the page).

### Q: Why use `useState` instead of regular variables?
**A:** Regular variables don't trigger re-render. `useState` tells React to update the UI.

### Q: What is the spread operator `...`?
**A:** It copies all properties from an object/array. Example: `{...user}` copies all user properties.

### Q: Why `className` instead of `class`?
**A:** `class` is a reserved word in JavaScript. JSX uses `className`.

### Q: What does `useNavigate` do?
**A:** It lets you navigate to different pages programmatically (in code, not just links).

### Q: What is JSON?
**A:** JavaScript Object Notation - a format for storing data. Like a JavaScript object but as text.

### Q: Why import Bootstrap CSS?
**A:** To use Bootstrap's pre-made styles. Without it, Bootstrap classes won't work.

---

## 🚀 How to Explain During Evaluation

### When showing **Routing:**
"Sir, I used `createBrowserRouter` which is the latest React Router method. I created a `router.jsx` file where I defined all routes. For example, when user goes to `/products`, it shows the Products component. I used `<Link>` instead of `<a>` tags because Link doesn't reload the page."

### When showing **Forms:**
"Sir, this is the Registration form with 14 fields. I used `useState` to manage form data. When user types in any input, the `onChange` event calls `handleChange` function which updates the state using `setFormData`. When form is submitted, I validate the data - like checking if passwords match - then show success message."

### When showing **Dynamic Rendering:**
"Sir, instead of writing the same HTML multiple times, I imported data from `productsData.json` and used the `.map()` function to loop through each product. For each product, I create a card showing its image, title, price, etc. This way, if I add 100 products in JSON, they all automatically appear."

### When showing **Requests Page:**
"Sir, this is the Requests Management page. It shows all pending seller registrations and product listings. Each request has Approve and Reject buttons. When admin clicks Approve, the `handleApprove` function updates the request status to 'Approved' using `setRequests`. I used `.map()` to find the specific request by ID and update only that one."

### When showing **Bootstrap:**
"Sir, I used Bootstrap 5 for all styling. For example, `form-control` class styles the input fields, `btn btn-primary` creates a blue button, `card` creates these boxes with shadow.
