# Yaqeen Project — Viva Prep (memorize this)

How to use: Sir points at something in code and says "show me + explain."
Find that thing below. Each block = **where it is**, **the code**, and **the exact words to say**.

---

## 0. "Explain how your app starts / runs"

**Say:** "When the app runs, files load in a chain: `index.html` → `main.jsx` → `router.jsx` → the page."

1. `index.html` has one empty box: `<div id="root"></div>` and loads `main.jsx`.
2. `main.jsx` grabs that box and fills it with my app, wrapped in my 4 context providers.
3. `router.jsx` checks the web address and shows the matching page.

---

## 1. main.jsx — "show me where your contexts are applied"

**File:** `src/main.jsx`
```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <RouterProvider router={router} />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
```
**Say:** "`getElementById('root')` grabs the empty box from index.html. `.render()` fills it.
I wrapped my whole app (the RouterProvider) inside my 4 context Providers. Wrapping means every
page inside can use these contexts — that's why cart, theme and login work on every page."

---

## 2. router.jsx — "how does routing work / show me your routes"

**File:** `src/router.jsx`
```jsx
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/products", element: <Products /> },
  { path: "/products/:id", element: <ProductDetail /> },
  { path: "/cart", element: <Cart /> },
  { path: "/wishlist", element: <Wishlist /> },
]);
export default router;
```
**Say:** "I used the `react-router-dom` package. `createBrowserRouter` is a list that maps a URL
to a component. When the address is `/cart`, it shows the `Cart` component. `/products/:id` —
the `:id` is a changing value, like `/products/3`, so one route handles every product."

**Trap — "difference between Link and createBrowserRouter?"**
Say: "`createBrowserRouter` *defines* the routes — which URL shows which page. `Link` is the
clickable thing the user presses to *go* to a URL, without reloading the whole page."

---

## 3. Link — "show me a Link / how do you navigate"

**File:** `src/components/Navigation.jsx`
```jsx
import { Link } from 'react-router-dom';

<Link to="/cart" className="btn btn-outline-light btn-sm">Cart: {cartItems.length}</Link>
```
**Say:** "`Link` is from react-router-dom. `to="/cart"` is the URL it goes to. It works with the
routes I defined in router.jsx. I use a Link instead of a normal `<a>` tag because Link does NOT
reload the page — it just swaps the component, so it's fast."

---

## 4. Component — "what is a component / make/show one"

**File:** any, e.g. `src/components/Footer.jsx`
```jsx
function Footer() {
  return <footer>...</footer>;
}
export default Footer;
```
**Say:** "A component is a reusable piece of code — a function that returns JSX (HTML-like code).
`export default` lets other files use it; they bring it in with `import`. I build the app by
stacking small components like Navigation, Footer, and the page content."

**Trap — "how many elements can a component return?"**
Say: "Only ONE parent element. If I need more than one, I wrap them in a Fragment `<>...</>`."
Point at any page top: `return ( <div className="d-flex flex-column min-vh-100"> ... </div> )` —
one parent div wrapping everything.

---

## 5. CONTEXT (the 10-mark part) — "explain your context"

**Say first:** "Context solves prop drilling. Instead of passing data hand-to-hand through many
components, I store it in one place and any component reads it directly. Every context has 3 steps."

### Step 1 — create the context
**File:** `src/context/CartContext.jsx`
```jsx
import { createContext, useState } from "react";

export const CartContext = createContext();
```
**Say:** "`createContext()` makes an empty shared box and I export it so others can use it."

### Step 2 — the Provider holds the data
```jsx
function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(index) {
    setCartItems(cartItems.filter((item, i) => i !== index));
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartProvider;
```
**Say:** "`cartItems` is a useState list, starts empty. `addToCart` copies the old list with `...`
and adds the new product. `value={{ }}` is what I share — the list plus the functions.
`{children}` means whatever I wrap. In main.jsx I wrapped the whole app, so the whole app can read it."

### Step 3 — a component reads it
**File:** `src/components/Navigation.jsx`
```jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const { cartItems } = useContext(CartContext);
// ...later:
Cart: {cartItems.length}
```
**Say:** "`useContext(CartContext)` pulls the shared data. I show `cartItems.length` as the count."

### Full flow (sir loves this)
**Say:** "On ProductDetail I click Add to Cart → it runs `addToCart(product)` → the product goes into
`cartItems` in the context → Navigation reads the same `cartItems`, so the number updates on every
page → I click the Cart link → the Cart page reads `cartItems` and maps them into a table."

**My 4 contexts:** Cart (item list), Wishlist (item list), Auth (logged-in user), Theme (dark/light).
All follow the exact same 3 steps.

---

## 6. map — "show me where you used map / loop a list"

**File:** `src/pages/Cart.jsx`
```jsx
{cartItems.map((item, index) => (
  <tr key={index}>
    <td>{item.title}</td>
    <td>{item.seller}</td>
    <td>Rs. {item.price.toLocaleString()}</td>
    <td>
      <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>
        Remove
      </button>
    </td>
  </tr>
))}
```
**Say:** "`map` loops a list and turns each item into HTML. For each product in the cart I draw one
table row. `key={index}` is a name tag React needs to tell rows apart. The curly braces `{ }` mean
'run real JavaScript here.'"

---

## 7. useState — "what is useState / show state"

**File:** `src/context/CartContext.jsx` (or any)
```jsx
const [cartItems, setCartItems] = useState([]);
```
**Say:** "useState is a memory box that redraws the screen when it changes. `cartItems` is the value,
`setCartItems` is the only way to change it, `[]` is the starting value. Rule: never change state
directly — always use the setter. `[...cartItems, product]` copies the old list and adds the new
item, and React redraws."

---

## 8. FORMS + VALIDATION (the 5-mark part) — "explain your form / validation"

**File:** `src/components/Login.jsx`

### 1. The rule book (zod schema)
```jsx
const schema = z.object({
  accountType: z.string(),
  email: z.string().email({ message: 'Enter a valid email.' }),
  password: z.string().min(6, { message: 'Minimum 6 characters.' }),
});
```
**Say:** "This is my zod schema — the rules. Email must look like an email, password must be 6+ chars."

### 2. Connect rules to the form
```jsx
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({ resolver: zodResolver(schema) });
```
**Say:** "`useForm` is from React Hook Form. `resolver: zodResolver(schema)` is the glue that connects
my zod rules to the form. `register` tags each input, `handleSubmit` only runs if all rules pass,
`errors` fills with messages when a rule breaks."

### 3. The input + the error
```jsx
<input type="email" {...register('email')} />
{errors.email && <p className="text-danger small mt-1">{errors.email.message}</p>}
```
**Say:** "`{...register('email')}` tags this box. The line below means: if there's an email error,
show it in red. `&&` means 'if left is true, show the right.'"

**The 3 things sir checks:** schema, `resolver: zodResolver`, `errors` display. All 7 of my forms have these.

**Trap — "useState form vs React Hook Form?"**
Say: "If a form uses useState, I connect state to each input with `onChange` (controlled component).
With React Hook Form I use `register` instead. I cannot mix both — register replaces the useState/onChange way."

**Trap — "what is a controlled component?"**
Say: "An input whose value is tied to a state. When the user types, `onChange` updates the state,
and the input shows the state value."

---

## 9. useEffect (the 5-mark part) — "explain useEffect"

**File:** `src/pages/admin/ProductEdit.jsx`
```jsx
useEffect(() => {
  const product = productsData.find(p => p.id === parseInt(id));
  if (product) {
    reset({ title: product.title, price: product.price.toString(), /* ... */ });
  }
}, [id, reset]);
```
**Say:** "useEffect runs code AFTER the page appears. Here, when I open the edit page, it finds the
product by its id from the URL and `reset()` fills the form with that product's existing data —
that's why the edit form is pre-filled. The `[id, reset]` part is the dependency array: it only
re-runs if `id` changes."

**Trap — "what if no dependency array?"**
Say: "Then it runs after every render, which can cause an infinite loop. So I always include it."

---

## 10. Bootstrap Grid — "show me responsive layout" (sir said this WILL come)

**File:** `src/pages/Products.jsx` and `Wishlist.jsx`
```jsx
<div className="row g-4">
  <div className="col-md-4"> ...one card... </div>
</div>
```
**Say:** "Bootstrap grid splits a row into 12 columns. `col-md-4` means each item takes 4 of 12 on a
medium-or-bigger screen, so 3 fit in a row. On smaller screens they stack automatically."

**Breakpoint classes to memorize:** `sm` (small), `md` (medium), `lg` (large).
Example to say: "`col-12 col-md-6 col-lg-4` = full width on phone, 2 per row on tablet, 3 per row on desktop."

---

## 11. Folder structure — "what does X folder/file do" (common question)

| Thing | Say this |
|-------|----------|
| `node_modules` | "All installed packages live here. Auto-created by npm install." |
| `package.json` | "Lists my project's packages and scripts (like `dev`, `build`)." |
| `package-lock.json` | "Locks exact versions of every package so installs are identical." |
| `.gitignore` | "Tells git which files/folders to NOT upload (like node_modules)." |
| `src` folder | "My actual source code — all components, pages, contexts." |
| `index.html` | "The one HTML page; has the `#root` box React fills." |
| `main.jsx` | "Entry point; renders the app into `#root`." |
| `App.jsx` | "A root component (note: my app actually starts from router via main.jsx)." |

**Trap — "which 3 places change when you install a package?"**
Say: "`package.json`, `package-lock.json`, and `node_modules`."

---

## 12. CSS three ways (sir said high chance) — "style an element 3 ways"

1. **Inline:** `<p style={{ color: 'red' }}>hi</p>`  (in React, style is an object with `{{ }}`)
2. **Internal:** a `<style>` block in the page / `index.css` imported.
3. **External:** a separate `.css` file imported, e.g. `import './index.css'`.

**Accessing elements 3 ways:** by **id** (`#myid`), by **class** (`.myclass`), by **tag** (`p`).

---

## 13. Inline vs Block (came in quiz) — quick answer

**Say:** "Block elements (like `<div>`, `<h1>`, `<p>`) take the full width and stack one below another.
Inline elements (like `<img>`, `<span>`, `<a>`) sit side by side on the same line."

---

# DEMO SCRIPT (30 seconds, do this if asked to run it)

1. `npm run dev` → open `http://localhost:5173`
2. Go to **Products** → click any product.
3. Click **Add to Cart** → point at navbar: "Cart count went up — that's my CartContext."
4. Click **Dark Mode** → "Navbar changed — ThemeContext."
5. Click **Cart: 1** in navbar → "This page maps my cart items into a table — Cart page reads the context."
6. Click **Remove** → "Count drops — I used filter on the state."
7. Go to **Login**, submit empty → "Red errors — that's my zod validation."
8. Go to **Admin → edit a product** → "Form is pre-filled — that's useEffect loading the data."

---

# ONE-LINE DEFINITIONS (rapid fire)

- **Component:** reusable function that returns JSX.
- **Props:** data passed from parent to child component. (We mostly used context instead.)
- **State (useState):** memory that redraws the screen when changed.
- **Context:** shared data any component can read, avoids prop drilling.
- **useEffect:** runs code after render, for loading data / side effects.
- **Fragment `<>`:** wraps multiple elements when you can't add a real parent.
- **map:** loops a list into HTML.
- **Link:** clickable navigation, no page reload.
- **createBrowserRouter:** defines which URL shows which component.
- **register / handleSubmit:** React Hook Form tools to read inputs and submit.
- **zodResolver:** connects zod rules to the form for validation.
- **Controlled component:** input value tied to a state via onChange.
