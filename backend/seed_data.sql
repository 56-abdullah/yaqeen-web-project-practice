-- ============================================================
--  Seed data so the React pages have something to read from DB.
--  Run with:  mysql -u root yaqeen_web_project < seed_data.sql
-- ============================================================

-- ---------- PRODUCTS ----------
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

-- ---------- TESTIMONIALS ----------
CREATE TABLE IF NOT EXISTS testimonials (
    id     INT AUTO_INCREMENT PRIMARY KEY,
    name   VARCHAR(100),
    role   VARCHAR(60),
    `text` TEXT,
    avatar VARCHAR(150)
);

TRUNCATE TABLE testimonials;
INSERT INTO testimonials (id, name, role, `text`, avatar) VALUES
(1,'Ahmed Raza','Verified Buyer','Yaqeen Marketplace has completely changed the way I shop online. The verified seller system gives me confidence that every product I receive is genuine and exactly as described. I have been using this platform for over a year now and have never been disappointed.','/images/18.jpg'),
(2,'Fatima Noor','Seller Partner','As a small business owner, Yaqeen gave me a platform to reach thousands of customers I never could have found on my own. The seller dashboard is intuitive, and the support team is always available when I need help with my listings.','/images/19.jpg'),
(3,'Hassan Ali','Premium Member','The quality of products on Yaqeen is unmatched. I recently purchased a handwoven shawl and a leather watch, both arrived in perfect condition with fast delivery. The secure payment system makes every transaction worry-free.','/images/20.jpg'),
(4,'Ayesha Khan','Verified Buyer','What sets Yaqeen apart is their commitment to authenticity. Every seller goes through a rigorous verification process, and their 24/7 customer support is genuinely helpful. I recommend this marketplace to everyone I know.','/images/21.png');

-- ---------- USERS (sample rows for admin Users list) ----------
-- Reset to the 6 demo users so the admin list looks complete.
TRUNCATE TABLE users;
INSERT INTO users (id, full_name, email, role, status, join_date, city, phone, user_password) VALUES
(1,'Sikandar Khan','sikandar.khan@email.com','Seller','Active','2024-01-15','Lahore','+92 300 1234567','test123'),
(2,'Sara Ahmed','sara.ahmed@email.com','Seller','Pending','2024-05-02','Karachi','+92 321 9876543','test123'),
(3,'Ahmed Raza','ahmed.raza@email.com','Buyer','Active','2024-02-20','Islamabad','+92 333 4567890','test123'),
(4,'Fatima Noor','fatima.noor@email.com','Seller','Active','2024-03-10','Faisalabad','+92 345 6789012','test123'),
(5,'Hassan Ali','hassan.ali@email.com','Buyer','Active','2024-04-05','Rawalpindi','+92 312 3456789','test123'),
(6,'Ayesha Khan','ayesha.khan@email.com','Buyer','Suspended','2024-06-18','Multan','+92 301 2345678','test123'),
(7,'Admin User','admin@yaqeen.pk','Admin','Active','2024-01-01','Islamabad','+92 300 0000000','admin123');
