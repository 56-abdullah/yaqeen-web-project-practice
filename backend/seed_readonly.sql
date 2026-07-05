-- ============================================================
--  Seeds ONLY the data that has no form in the app:
--  products, testimonials, and one admin login.
--  Everything else (normal users, contacts) you create yourself
--  through the Register / Add User / Contact forms.
--  phpMyAdmin -> yaqeen_web_project -> Import this file (or SQL tab).
-- ============================================================

-- ---------- PRODUCTS (display only, no save form) ----------
CREATE TABLE IF NOT EXISTS products (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(150),
    price       INT,
    seller      VARCHAR(100),
    category    VARCHAR(50),
    rating      DECIMAL(2,1),
    image       VARCHAR(150),
    description TEXT,
    stock       INT,
    `condition` VARCHAR(20)
);

TRUNCATE TABLE products;
INSERT INTO products (id, title, price, seller, category, rating, image, description, stock, `condition`) VALUES
(1,'Play Station 5 Controller',12500,'Sikandar Khan','Electronics',4.8,'/images/7.png','Official PlayStation 5 DualSense wireless controller with haptic feedback and adaptive triggers for immersive gaming experience.',15,'New'),
(2,'iPhone 16',185000,'TechZone PK','Electronics',4.9,'/images/8.png','Latest iPhone 16 with A18 chip, 6.1-inch display, advanced camera system, and all-day battery life.',8,'New'),
(3,'iPhone 16 Pro Max',285000,'Sara Ahmed','Electronics',4.7,'/images/9.png','Premium iPhone 16 Pro Max with titanium design, 6.7-inch ProMotion display, and professional camera system.',22,'New'),
(4,'iPhone 14 Pro Max',195000,'AudioHub','Electronics',4.6,'/images/10.png','iPhone 14 Pro Max with Dynamic Island, 48MP camera, A16 Bionic chip, and stunning Super Retina XDR display.',30,'New'),
(5,'MacBook Air M2',262000,'Apple Store','Electronics',4.5,'/images/12.png','Powerful MacBook Air with M2 chip, 13.6-inch Liquid Retina display, up to 18 hours battery life, and fanless design.',18,'New'),
(6,'Vintage Ceramic Tea Set',3800,'HomeDecor Studio','Home',4.4,'/images/13.png','Elegant 6-piece ceramic tea set with hand-painted floral patterns. Includes teapot, cups, and serving tray.',12,'New'),
(7,'iPad Air M3',95000,'CameraWorld','Electronics',4.9,'/images/23.png','iPad Air with M3 chip, 10.9-inch Liquid Retina display, Touch ID, and support for Apple Pencil and Magic Keyboard.',5,'New'),
(8,'iPhone 15 Pro Max',245000,'TechStore PK','Electronics',4.3,'/images/16.png','iPhone 15 Pro Max with titanium frame, A17 Pro chip, advanced camera system with 5x optical zoom, and USB-C port.',40,'New');

-- ---------- TESTIMONIALS (display only, no form) ----------
CREATE TABLE IF NOT EXISTS testimonials (
    id     INT AUTO_INCREMENT PRIMARY KEY,
    name   VARCHAR(100),
    role   VARCHAR(60),
    `text` TEXT,
    avatar VARCHAR(150)
);

TRUNCATE TABLE testimonials;
INSERT INTO testimonials (id, name, role, `text`, avatar) VALUES
(1,'Ahmed Raza','Verified Buyer','Yaqeen Marketplace has completely changed the way I shop online. The verified seller system gives me confidence that every product I receive is genuine and exactly as described.','/images/18.jpg'),
(2,'Fatima Noor','Seller Partner','As a small business owner, Yaqeen gave me a platform to reach thousands of customers I never could have found on my own. The seller dashboard is intuitive.','/images/19.jpg'),
(3,'Hassan Ali','Premium Member','The quality of products on Yaqeen is unmatched. I recently purchased a handwoven shawl and a leather watch, both arrived in perfect condition with fast delivery.','/images/20.jpg'),
(4,'Ayesha Khan','Verified Buyer','What sets Yaqeen apart is their commitment to authenticity. Every seller goes through a rigorous verification process, and their 24/7 customer support is genuinely helpful.','/images/21.png');

-- ---------- ONE ADMIN (so you can reach /admin) ----------
-- Make the users table if it doesn't exist yet, then add just the admin.
-- We do NOT wipe users here, so your registered accounts stay.
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_type VARCHAR(20), full_name VARCHAR(100), email VARCHAR(100),
    phone VARCHAR(20), id_card VARCHAR(20), city VARCHAR(50),
    postal_code VARCHAR(10), address TEXT, business_name VARCHAR(100),
    business_category VARCHAR(50), user_password VARCHAR(100),
    role VARCHAR(20), status VARCHAR(20), join_date VARCHAR(20)
);

DELETE FROM users WHERE email = 'admin@yaqeen.pk';
INSERT INTO users (full_name, email, phone, city, user_password, role, status, join_date) VALUES
('Admin User','admin@yaqeen.pk','+92 300 0000000','Islamabad','admin123','Admin','Active','2024-01-01');
