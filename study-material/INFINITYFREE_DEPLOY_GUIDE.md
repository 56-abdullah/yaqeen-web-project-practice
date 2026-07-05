# Deploy Yaqeen to InfinityFree (React + PHP + MySQL)

InfinityFree hosts **PHP + MySQL** for free, so the whole app (frontend + backend + database) can live on one domain.

> **Why some steps are manual:** InfinityFree's signup has a **captcha + email activation** and uploads go over **FTP/File Manager**. Those steps can't be automated — you do them. Everything else (all the files, SQL, config) is already prepared in this repo.

---

## STEP 1 — Create the account (you)
1. Go to https://infinityfree.com → **Sign Up** (needs email + solve captcha).
2. Confirm the activation email.
3. Create a site → you get a subdomain like `yourname.infinityfreeapp.com` (or connect a custom domain).
4. Wait ~5 min for the account to activate.

## STEP 2 — Create the MySQL database (you)
1. Control Panel → **MySQL Databases**.
2. Create a database (e.g. name it `yaqeen`). It gives you 4 values — **copy them**:
   - **Host** e.g. `sql200.infinityfree.com`
   - **Username** e.g. `if0_37123456`
   - **Password** (the one you set)
   - **Database name** e.g. `if0_37123456_yaqeen`

## STEP 3 — Fill in connection.php (you or me)
Open `backend/connection_infinityfree.php`, paste your 4 values, then **rename it to `connection.php`** (it will replace the local one on the host).
```php
$connect = mysqli_connect(
    "sql200.infinityfree.com",   // Host
    "if0_37123456",              // Username
    "your_password",             // Password
    "if0_37123456_yaqeen"        // Database name
);
```

## STEP 4 — Point the frontend at your domain, then rebuild
Open `src/serviceApi.js`, change the ONE line:
```js
const BASE_URL = "https://yourname.infinityfreeapp.com/yaqeen-backend";
```
Then rebuild:
```
npm run build
```
This regenerates the `dist/` folder with the live URL baked in.

## STEP 5 — Upload the files (you, via File Manager or FTP)
In InfinityFree Control Panel → **Online File Manager** (or FileZilla FTP). Go into the **`htdocs`** folder, then:

1. Upload **everything inside `dist/`** (the `index.html`, the `assets/` folder, `.htaccess`, and the `images/` folder) into `htdocs/` (the root).
2. Create a folder `htdocs/yaqeen-backend/` and upload all the **`backend/*.php`** files into it (the one with your DB values as `connection.php`).

Final layout on the host:
```
htdocs/
├── index.html
├── .htaccess              (SPA routing — from public/, already in dist)
├── assets/...
├── images/...             (your product/testimonial images)
└── yaqeen-backend/
    ├── connection.php     (with your InfinityFree DB values)
    ├── get_products.php
    ├── register_processing.php
    └── ...all other .php
```

## STEP 6 — Import the database (you)
1. Control Panel → **phpMyAdmin** (next to MySQL Databases) → open your `if0_..._yaqeen` DB.
2. **Import** tab → choose `backend/full_database.sql` → **Go**.
3. You should see tables: `users, products, testimonials, contacts, requests, activities`.

## STEP 7 — Test the live site
- Open `https://yourname.infinityfreeapp.com` → home page loads products + testimonials from the live DB.
- Register / Login / Add product → data saves to the live MySQL.
- Admin login: `admin@yaqeen.pk` / `admin123`.

---

## Common problems
| Symptom | Fix |
|---------|-----|
| Blank page / 404 on refresh | `.htaccess` missing in `htdocs/` — re-upload it (it's a hidden file; enable "show hidden" in File Manager). |
| "server error" on forms | `connection.php` has wrong DB values, or SQL not imported. |
| Products empty | `full_database.sql` not imported, or `BASE_URL` still `localhost` (rebuild after fixing). |
| CORS error | Make sure `BASE_URL` uses the SAME domain as the site (then CORS isn't even needed). |
| Images broken | Upload your `public/images/` into `htdocs/images/`. |

## Note on InfinityFree limits
- Free tier **blocks some outside access** and may show a security check on first visit — normal.
- It **does not allow** certain functions, but standard `mysqli` + `json` used here work fine.
- Keep the DB small (free tier limits) — the demo data is tiny, so you're fine.
