# 🎯 Web Tech Quiz Preparation Guide

**Quiz Duration:** 10-15 minutes  
**Focus:** Foundational knowledge and basic concepts  
**Topics:** HTML, CSS, Bootstrap, React Basics, useState, React Hook Form

---

## 📝 HTML (The Structure)

### 1. Meta Tags
**What are they?**
- Meta tags provide information about the HTML document
- They are placed inside the `<head>` tag
- They are not displayed on the page

**Example:**
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="My website description">
  <title>My Page</title>
</head>
```

### 2. Element Types

**Inline Elements:**
- Appear **next to each other** on the same line
- Examples: `<img>`, `<span>`, `<a>`, `<input>`, `<button>`

```html
<img src="pic1.jpg"> <img src="pic2.jpg">
<!-- These two images will appear SIDE BY SIDE -->
```

**Block Elements:**
- Appear **one after another** on new lines
- Take up full width available
- Examples: `<p>`, `<h1>`, `<div>`, `<section>`, `<header>`

```html
<p>First paragraph</p>
<p>Second paragraph</p>
<!-- These will appear ONE BELOW THE OTHER -->
```

---

## 🎨 CSS (The Styling)

### 1. Three Ways to Apply CSS

**A) Inline CSS** (inside the tag)
```html
<p style="color: red; font-size: 20px;">Red text</p>
```

**B) Internal CSS** (inside `<style>` tag in `<head>`)
```html
<head>
  <style>
    p {
      color: blue;
      font-size: 18px;
    }
  </style>
</head>
```

**C) External CSS** (separate .css file)
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

### 2. Accessing Elements (Selectors)

**By Tag Name:**
```css
p {
  color: red;
}
```

**By Class:**
```css
.my-class {
  color: blue;
}
```
```html
<p class="my-class">Blue text</p>
```

**By ID:**
```css
#my-id {
  color: green;
}
```
```html
<p id="my-id">Green text</p>
```

### 3. Box Model

```
┌─────────────────────────────────┐
│         MARGIN (outside)        │
│  ┌───────────────────────────┐  │
│  │      BORDER              │  │
│  │  ┌─────────────────────┐ │  │
│  │  │    PADDING          │ │  │
│  │  │  ┌───────────────┐  │ │  │
│  │  │  │   CONTENT     │  │ │  │
│  │  │  └───────────────┘  │ │  │
│  │  └─────────────────────┘ │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

**Example:**
```css
.box {
  margin: 20px;      /* Space OUTSIDE the element */
  padding: 10px;     /* Space INSIDE the element */
  border: 2px solid black;
}
```

### 4. Positioning

**Static (Default):**
- Normal document flow
- Default positioning

**Relative:**
- Positioned relative to its normal position
```css
.box {
  position: relative;
  top: 10px;    /* Moves 10px down from normal position */
  left: 20px;   /* Moves 20px right from normal position */
}
```

**Absolute:**
- Positioned relative to nearest positioned ancestor
- Removed from normal flow
```css
.box {
  position: absolute;
  top: 0;
  right: 0;
}
```

**Fixed:**
- Positioned relative to viewport
- Stays in place when scrolling
```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
```

---

## 🅱️ Bootstrap (The Framework)

### 1. Grid System (IMPORTANT!)

**Breakpoints:**
- `sm` = Small devices (≥576px)
- `md` = Medium devices (≥768px)
- `lg` = Large devices (≥992px)
- `xl` = Extra large devices (≥1200px)

**Grid Classes:**
- `col-sm-*` = Columns on small screens
- `col-md-*` = Columns on medium screens
- `col-lg-*` = Columns on large screens

**Example Question:** Create a layout where:
- Small screens: Items stack (1 per row)
- Medium screens: 2 items per row
- Large screens: All items in 1 row (4 items)

**Answer:**
```html
<div class="container">
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-3">Item 1</div>
    <div class="col-sm-12 col-md-6 col-lg-3">Item 2</div>
    <div class="col-sm-12 col-md-6 col-lg-3">Item 3</div>
    <div class="col-sm-12 col-md-6 col-lg-3">Item 4</div>
  </div>
</div>
```

**Explanation:**
- `col-sm-12`: On small screens, each takes full width (12/12 = 100%) → **stacks**
- `col-md-6`: On medium screens, each takes half width (6/12 = 50%) → **2 per row**
- `col-lg-3`: On large screens, each takes quarter width (3/12 = 25%) → **4 per row**

---

## ⚛️ React Basics & Setup

### 1. Installation
**Command used:**
```bash
npm create vite@latest my-app
```
- We used **Vite** (not Create React App)

### 2. Folder Structure

```
my-project/
├── node_modules/        ← Stores installed packages
├── src/                 ← Your source code
│   ├── main.jsx        ← Entry point
│   └── App.jsx         ← Main component
├── index.html          ← HTML template
├── package.json        ← Project details & dependencies
├── package-lock.json   ← Exact package versions
├── .gitignore          ← Files Git should ignore
└── vite.config.js      ← Vite configuration
```

**Purpose of Each:**
- **node_modules**: Contains all installed npm packages
- **package.json**: Lists project info and dependencies
- **package-lock.json**: Locks exact versions of packages
- **.gitignore**: Tells Git which files NOT to track (like node_modules)
- **src folder**: Where you write your React code

### 3. File Relationships

```
index.html
    ↓ (loads)
main.jsx
    ↓ (imports & renders)
App.jsx
    ↓ (renders)
Your Components
```

**index.html:**
```html
<!DOCTYPE html>
<html>
  <head>
    <title>My App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

**main.jsx:**
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

**App.jsx:**
```javascript
function App() {
  return <h1>Hello World</h1>
}

export default App
```

### 4. Bootstrap Integration in React

**Where to put Bootstrap link:**
```html
<!-- In index.html, inside <head> tag -->
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
```

**OR install via npm:**
```bash
npm install bootstrap
```
```javascript
// In main.jsx
import 'bootstrap/dist/css/bootstrap.min.css'
```

---

## 🧩 React Components & Routing

### 1. Components

**What are they?**
- Reusable pieces of code
- Like functions that return HTML (JSX)

**Example - Simple Product Component:**
```javascript
function Product(props) {
  return <p>{props.name} - Quantity: {props.quantity}</p>
}

export default Product
```

**Using it:**
```javascript
<Product name="Laptop" quantity={5} />
```

### 2. Fragment Rule

**❌ WRONG - Can't return multiple elements:**
```javascript
function MyComponent() {
  return (
    <h1>Title</h1>
    <p>Paragraph</p>
  )
}
```

**✅ CORRECT - Use Fragment:**
```javascript
function MyComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
    </>
  )
}
```

### 3. Routing with react-router-dom

**Installation:**
```bash
npm install react-router-dom
```

**Setup Router:**
```javascript
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './Product'
import Home from './Home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/product",
    element: <Product />
  }
])

function App() {
  return <RouterProvider router={router} />
}
```

**Link Component (for navigation):**
```javascript
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/product">Products</Link>
    </nav>
  )
}
```

**Difference:**
- `createBrowserRouter`: Defines routes (URL → Component mapping)
- `Link`: Creates clickable links to navigate between routes

---

## 🔄 React Logic & Interactivity

### 1. Map Function (Looping through data)

**Example - Display products from JSON:**
```javascript
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Tablet", price: 25000 }
]

function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Rs. {product.price}</p>
        </div>
      ))}
    </div>
  )
}
```

**Key Points:**
- Always use `key` prop (usually the id)
- Map returns JSX for each item

### 2. Forms

**Input Box:**
```javascript
<input type="text" placeholder="Enter name" />
```

**Dropdown:**
```javascript
<select>
  <option value="electronics">Electronics</option>
  <option value="fashion">Fashion</option>
  <option value="home">Home</option>
</select>
```

**Checkbox:**
```javascript
<input type="checkbox" id="agree" />
<label htmlFor="agree">I agree</label>
```

**Radio Buttons:**
```javascript
<input type="radio" name="gender" value="male" /> Male
<input type="radio" name="gender" value="female" /> Female
```

### 3. Events

**onChange (detects input changes):**
```javascript
function MyForm() {
  function handleChange(e) {
    console.log(e.target.value)
  }

  return <input type="text" onChange={handleChange} />
}
```

**onClick (for buttons):**
```javascript
function MyButton() {
  function handleClick() {
    alert('Button clicked!')
  }

  return <button onClick={handleClick}>Click Me</button>
}
```

---

## 🎣 useState Hook (State Management)

### What is useState?
- A React Hook that lets you add state to functional components
- State = data that can change over time
- When state changes, component re-renders

### Basic Syntax

```javascript
import { useState } from 'react'

function Counter() {
  // [currentValue, functionToUpdateValue] = useState(initialValue)
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
```

### Examples

**1. Simple Counter:**
```javascript
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}
```

**2. Input Field:**
```javascript
function NameInput() {
  const [name, setName] = useState('')

  return (
    <div>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  )
}
```

**3. Toggle (Show/Hide):**
```javascript
function Toggle() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      {isVisible && <p>This text can be hidden!</p>}
    </div>
  )
}
```

**4. Form with Multiple Fields:**
```javascript
function UserForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="name" 
        value={formData.name}
        onChange={handleChange}
      />
      <input 
        name="email" 
        value={formData.email}
        onChange={handleChange}
      />
      <input 
        name="age" 
        value={formData.age}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}
```

---

## 📋 React Hook Form

### What is React Hook Form?
- A library that simplifies form handling in React
- Reduces code compared to useState
- Better performance

### Installation
```bash
npm install react-hook-form
```

### Basic Usage (Your Sir's Simple Approach)

```javascript
import { useForm } from 'react-hook-form'

function AddProduct() {
  const { register, handleSubmit } = useForm()

  function submit(data) {
    console.log(data)  // { name: "Laptop", price: "50000" }
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <label>Product Name</label>
      <input {...register('name')} />

      <label>Price</label>
      <input type="number" {...register('price')} />

      <button type="submit">Add Product</button>
    </form>
  )
}
```

### Key Parts Explained

**1. `useForm()` Hook:**
```javascript
const { register, handleSubmit } = useForm()
```
- `register`: Connects input fields to the form
- `handleSubmit`: Handles form submission

**2. `{...register('fieldName')}`:**
```javascript
<input {...register('name')} />
```
- Automatically handles: `onChange`, `value`, `name`
- Replaces manual useState management

**3. `handleSubmit(submit)`:**
```javascript
<form onSubmit={handleSubmit(submit)}>
```
- Prevents default form submission
- Collects all form data
- Passes data to your `submit` function

### Comparison: useState vs React Hook Form

**With useState (Old Way):**
```javascript
function ProductForm() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log({ name, price })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}
```

**With React Hook Form (New Way):**
```javascript
function ProductForm() {
  const { register, handleSubmit } = useForm()

  function submit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input {...register('name')} />
      <input {...register('price')} />
      <button>Submit</button>
    </form>
  )
}
```

### Advanced Features

**1. With watch() - For Conditional Rendering:**
```javascript
function Registration() {
  const { register, handleSubmit, watch } = useForm()
  const accountType = watch('accountType')

  function submit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <select {...register('accountType')}>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
      </select>

      {/* Show only if seller selected */}
      {accountType === 'seller' && (
        <input {...register('businessName')} placeholder="Business Name" />
      )}

      <button>Register</button>
    </form>
  )
}
```

**2. With reset() - For Clearing Form:**
```javascript
function ContactForm() {
  const { register, handleSubmit, reset } = useForm()

  function submit(data) {
    console.log(data)
    alert('Form submitted!')
    reset()  // Clear all fields
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input {...register('name')} />
      <input {...register('email')} />
      <button>Send</button>
    </form>
  )
}
```

**3. With Validation:**
```javascript
function LoginForm() {
  const { register, handleSubmit } = useForm()

  function submit(data) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input 
        {...register('email', { required: true })} 
        placeholder="Email"
      />
      <input 
        {...register('password', { 
          required: true,
          minLength: 8 
        })} 
        type="password"
        placeholder="Password"
      />
      <button>Login</button>
    </form>
  )
}
```

---

## 🎯 Quick Reference Cheat Sheet

### HTML
- **Meta tags**: In `<head>`, provide page info
- **Inline elements**: Side by side (`<img>`, `<span>`)
- **Block elements**: Stack vertically (`<p>`, `<div>`)

### CSS
- **3 Ways**: Inline, Internal, External
- **Selectors**: Tag, `.class`, `#id`
- **Box Model**: Margin → Border → Padding → Content
- **Position**: Static (default), Relative, Absolute, Fixed

### Bootstrap
- **Grid**: `col-sm-12`, `col-md-6`, `col-lg-3`
- **sm** = small, **md** = medium, **lg** = large

### React Setup
- **Install**: `npm create vite@latest`
- **Files**: index.html → main.jsx → App.jsx
- **Bootstrap**: Link in `<head>` of index.html

### React Components
- **Component**: Reusable code that returns JSX
- **Fragment**: Use `<>...</>` for multiple elements
- **Router**: `createBrowserRouter` + `Link`

### React Logic
- **Map**: Loop through arrays
- **Forms**: input, select, checkbox, radio
- **Events**: `onChange`, `onClick`

### useState
```javascript
const [value, setValue] = useState(initialValue)
```
- Get current value: `value`
- Update value: `setValue(newValue)`

### React Hook Form
```javascript
const { register, handleSubmit } = useForm()

<form onSubmit={handleSubmit(submit)}>
  <input {...register('fieldName')} />
</form>
```

---

## 📚 Practice Questions

### Question 1: HTML Elements
**Q:** Will these images appear side by side or one below the other?
```html
<img src="pic1.jpg">
<img src="pic2.jpg">
```
**A:** Side by side (inline elements)

### Question 2: CSS Positioning
**Q:** What is the default positioning in CSS?
**A:** Static

### Question 3: Bootstrap Grid
**Q:** Write code for: Stack on small, 2 per row on medium, 4 per row on large
**A:**
```html
<div class="row">
  <div class="col-sm-12 col-md-6 col-lg-3">Item</div>
  <div class="col-sm-12 col-md-6 col-lg-3">Item</div>
  <div class="col-sm-12 col-md-6 col-lg-3">Item</div>
  <div class="col-sm-12 col-md-6 col-lg-3">Item</div>
</div>
```

### Question 4: React Component
**Q:** Write a Product component that takes name and quantity
**A:**
```javascript
function Product(props) {
  return <p>{props.name} - Qty: {props.quantity}</p>
}
```

### Question 5: React Routing
**Q:** Route /product to Product component
**A:**
```javascript
const router = createBrowserRouter([
  { path: "/product", element: <Product /> }
])
```

### Question 6: useState
**Q:** Create a counter with useState
**A:**
```javascript
function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}
```

### Question 7: React Hook Form
**Q:** Create a simple form with name and email
**A:**
```javascript
function MyForm() {
  const { register, handleSubmit } = useForm()
  
  function submit(data) {
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(submit)}>
      <input {...register('name')} />
      <input {...register('email')} />
      <button>Submit</button>
    </form>
  )
}
```

---

## ✅ Final Checklist

Before the quiz, make sure you can:

- [ ] Explain what meta tags are and where they go
- [ ] Identify inline vs block elements
- [ ] Name the 3 ways to apply CSS
- [ ] Select elements by tag, class, and ID
- [ ] Explain the CSS Box Model
- [ ] Know the 4 positioning types (and which is default)
- [ ] Use Bootstrap grid classes (sm, md, lg)
- [ ] Explain the React folder structure
- [ ] Know how index.html, main.jsx, and App.jsx connect
- [ ] Write a simple 3-line component
- [ ] Use Fragment for multiple elements
- [ ] Set up basic routing with createBrowserRouter
- [ ] Use Link component for navigation
- [ ] Use map() to display array data
- [ ] Create forms with different input types
- [ ] Use onChange and onClick events
- [ ] Use useState to manage state
- [ ] Use React Hook Form with register and handleSubmit

---

## 🎓 Good Luck!

**Remember:**
- The quiz is short (10-15 minutes)
- Focus on basics, not complex scenarios
- Practice writing code by hand
- Understand concepts, don't just memorize

**You've got this! 💪**
