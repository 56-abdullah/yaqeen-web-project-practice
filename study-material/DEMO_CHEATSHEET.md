# Yaqeen — Evaluation Demo Cheat-Sheet

Sir wants to SEE it work + SEE the code. Don't explain long. Just: **click → show row in DB → point at the 3 files.** Follow this order.

---

## 0. Before sir arrives (setup)
1. XAMPP Control Panel → **Apache** Start, **MySQL** Start (both green).
2. Terminal in project → `npm run dev` → open http://localhost:5173
3. Open http://localhost/phpmyadmin in another tab → click `yaqeen_web_project`.
4. In VS Code keep these 3 files open in tabs (your "proof"):
   - `src/serviceApi.js`
   - `src/components/Registration.jsx`
   - `D:\xampp\htdocs\yaqeen-backend\register_processing.php`

---

## 1. The one-line concept (say this once)
> "React form sends data with **axios** to a **PHP** file, PHP runs an **SQL** query on **MySQL**. Same 3 layers for every feature."

Draw nothing. Just show it working.

---

## 2. DEMO — Create (Register)  ← sir's main task
1. App → **Register** → fill the form → **Create Account**.
2. Green message "Account created successfully" appears.
3. Switch to phpMyAdmin → `users` table → **Browse** → **your row is there.** ← the proof.
4. Now show the 3 files (point, don't lecture):
   - `Registration.jsx` → `submit()` → `await process_registration(data)`
   - `serviceApi.js` → `axios.post(".../register_processing.php", data)`
   - `register_processing.php` → `INSERT INTO users (...) VALUES (...)`

That's the whole task proven. Everything else is the same pattern.

---

## 3. DEMO — Read (listing from DB)
1. App → **Products** page → 8 products show.
2. Say: "These are not hard-coded — they come from the DB."
3. Proof: phpMyAdmin → `products` table (8 rows). Delete one row in phpMyAdmin → refresh the Products page → it's gone.
4. Show the code:
   - `Products.jsx` → `useEffect` → `await get_products()`
   - `serviceApi.js` → `axios.get(".../get_products.php")`
   - `get_products.php` → `SELECT * FROM products`

---

## 4. DEMO — full CRUD on products (admin)
Login first: **Login** → `admin@yaqeen.pk` / `admin123` → lands on `/admin`.

| Show | Do | Proof |
|------|-----|-------|
| **Create** | Admin → Products → Add New Product → fill (image URL `/images/7.png`) → submit | new row in `products` |
| **Read** | Admin → Products list | table from DB |
| **Update** | Edit a product → change price → submit | price changes in `products` |
| **Delete** | Delete a product → confirm | row gone from `products` (refresh proves it) |

Code to point at (same 3-layer each): `ProductsList.jsx` / `ProductEdit.jsx` + `serviceApi.js` + the matching `*_processing.php` / `delete_product.php`.

---

## 5. DEMO — Login validation (two checks)
1. Type bad email → red zod error, won't submit. (client check)
2. Type `wrong@x.com` / `wrongpass` → red "Invalid email or password". (DB check)
3. Type `admin@yaqeen.pk` / `admin123` → logs in → `/admin`.
4. Code: `Login.jsx` `submit()` → `process_login` → `login_processing.php` → `SELECT * FROM users WHERE email AND user_password`.

---

## 6. File map (if sir asks "where is X")

**Frontend** (`src/`)
| File | Does |
|------|------|
| `serviceApi.js` | all axios calls (one function per feature) |
| `components/Registration.jsx` | register form → users |
| `components/Login.jsx` | login → checks users |
| `pages/Contact.jsx` | contact → contacts |
| `pages/Products.jsx`, `ProductDetail.jsx` | read products |
| `components/LandingPage.jsx` | read products + testimonials |
| `pages/admin/ProductsList/ProductAdd/ProductEdit.jsx` | products CRUD |
| `pages/admin/UsersList/UserAdd/UserEdit.jsx` | users CRUD |
| `pages/admin/Dashboard.jsx` | counts from DB |

**Backend** (`D:\xampp\htdocs\yaqeen-backend\`)
| File | SQL |
|------|-----|
| `connection.php` | opens MySQL |
| `register_processing.php` / `user_add_processing.php` | INSERT users |
| `contact_processing.php` | INSERT contacts |
| `product_add_processing.php` | INSERT products |
| `user_update_processing.php` / `product_update_processing.php` | UPDATE |
| `delete_user.php` / `delete_product.php` | DELETE |
| `login_processing.php` | SELECT (login check) |
| `get_products.php` / `get_product.php` / `get_users.php` / `get_user.php` / `get_testimonials.php` | SELECT (read) |

**Database** `yaqeen_web_project`: tables `users`, `products`, `testimonials`, `contacts`.

---

## 7. CRUD status (if asked)
| | Create | Read | Update | Delete |
|---|---|---|---|---|
| users | ✅ | ✅ | ✅ | ✅ |
| products | ✅ | ✅ | ✅ | ✅ |
| contacts | ✅ | — | — | — |
| testimonials | — | ✅ | — | — |

---

## 8. If something breaks during demo (panic fixes)
- **Page blank / "map is not a function"** → MySQL or Apache not started. Start both in XAMPP, reload.
- **"Access denied for root"** → wrong MySQL running. Services → stop **MySQL80**, start XAMPP MySQL.
- **Form shows "server error 500"** → Apache off, or table missing. Start Apache; check the table exists in phpMyAdmin.
- **Login fails for everyone** → you're testing a seeded user with no password; use a registered account or `admin@yaqeen.pk` / `admin123`.

---

## One sentence to open with
> "Sir, every form saves to MySQL through PHP and axios, and every list reads back from MySQL. Let me show you." — then just do section 2.
