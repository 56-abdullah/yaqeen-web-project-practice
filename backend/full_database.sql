-- ============================================================
--  Yaqeen — COMPLETE database (all tables + demo data).
--  Import ONCE into your database (local phpMyAdmin, or the
--  InfinityFree phpMyAdmin after creating the DB there).
-- ============================================================

-- ---------- USERS ----------
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    account_type      VARCHAR(20),
    full_name         VARCHAR(100),
    email             VARCHAR(100),
    phone             VARCHAR(20),
    id_card           VARCHAR(20),
    city              VARCHAR(50),
    postal_code       VARCHAR(10),
    address           TEXT,
    business_name     VARCHAR(100),
    business_category VARCHAR(50),
    user_password     VARCHAR(100),
    role              VARCHAR(20),
    status            VARCHAR(20),
    join_date         VARCHAR(20)
);

TRUNCATE TABLE users;
INSERT INTO users (id, full_name, email, role, status, join_date, city, phone, user_password) VALUES
(1,'Sikandar Khan','sikandar.khan@email.com','Seller','Active','2024-01-15','Lahore','+92 300 1234567','test123'),
(2,'Sara Ahmed','sara.ahmed@email.com','Seller','Pending','2024-05-02','Karachi','+92 321 9876543','test123'),
(3,'Ahmed Raza','ahmed.raza@email.com','Buyer','Active','2024-02-20','Islamabad','+92 333 4567890','test123'),
(4,'Fatima Noor','fatima.noor@email.com','Seller','Active','2024-03-10','Faisalabad','+92 345 6789012','test123'),
(5,'Hassan Ali','hassan.ali@email.com','Buyer','Active','2024-04-05','Rawalpindi','+92 312 3456789','test123'),
(6,'Ayesha Khan','ayesha.khan@email.com','Buyer','Suspended','2024-06-18','Multan','+92 301 2345678','test123'),
(7,'Admin User','admin@yaqeen.pk','Admin','Active','2024-01-01','Islamabad','+92 300 0000000','admin123');

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
(1,'Play Station 5 Controller',12500,'Sikandar Khan','Electronics',4.8,'/images/7.png','Official PlayStation 5 DualSense wireless controller with haptic feedback and adaptive triggers.',15,'New'),
(2,'iPhone 16',185000,'TechZone PK','Electronics',4.9,'/images/8.png','Latest iPhone 16 with A18 chip, 6.1-inch display, advanced camera system, and all-day battery life.',8,'New'),
(3,'iPhone 16 Pro Max',285000,'Sara Ahmed','Electronics',4.7,'/images/9.png','Premium iPhone 16 Pro Max with titanium design, 6.7-inch ProMotion display.',22,'New'),
(4,'iPhone 14 Pro Max',195000,'AudioHub','Electronics',4.6,'/images/10.png','iPhone 14 Pro Max with Dynamic Island, 48MP camera, A16 Bionic chip.',30,'New'),
(5,'MacBook Air M2',262000,'Apple Store','Electronics',4.5,'/images/12.png','Powerful MacBook Air with M2 chip, 13.6-inch Liquid Retina display, fanless design.',18,'New'),
(6,'Vintage Ceramic Tea Set',3800,'HomeDecor Studio','Home',4.4,'/images/13.png','Elegant 6-piece ceramic tea set with hand-painted floral patterns.',12,'New'),
(7,'iPad Air M3',95000,'CameraWorld','Electronics',4.9,'/images/23.png','iPad Air with M3 chip, 10.9-inch Liquid Retina display, Touch ID.',5,'New'),
(8,'iPhone 15 Pro Max',245000,'TechStore PK','Electronics',4.3,'/images/16.png','iPhone 15 Pro Max with titanium frame, A17 Pro chip, USB-C port.',40,'New');

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
(1,'Ahmed Raza','Verified Buyer','Yaqeen Marketplace has completely changed the way I shop online. The verified seller system gives me confidence.','/images/18.jpg'),
(2,'Fatima Noor','Seller Partner','As a small business owner, Yaqeen gave me a platform to reach thousands of customers.','/images/19.jpg'),
(3,'Hassan Ali','Premium Member','The quality of products on Yaqeen is unmatched. Fast delivery and secure payments.','/images/20.jpg'),
(4,'Ayesha Khan','Verified Buyer','What sets Yaqeen apart is their commitment to authenticity and 24/7 support.','/images/21.png');

-- ---------- CONTACTS (starts empty, filled by the Contact form) ----------
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name    VARCHAR(100),
    email        VARCHAR(100),
    phone        VARCHAR(20),
    subject      VARCHAR(150),
    message_type VARCHAR(30),
    priority     VARCHAR(20),
    company      VARCHAR(100),
    message      TEXT
);

-- ---------- REQUESTS ----------
CREATE TABLE IF NOT EXISTS requests (
    id      INT AUTO_INCREMENT PRIMARY KEY,
    type    VARCHAR(50),
    name    VARCHAR(100),
    email   VARCHAR(100),
    seller  VARCHAR(100),
    date    VARCHAR(20),
    status  VARCHAR(20),
    details VARCHAR(255)
);

TRUNCATE TABLE requests;
INSERT INTO requests (id, type, name, email, seller, date, status, details) VALUES
(1,'Seller Registration','Sikandar Khan','sikandar@email.com','','2024-05-01','Pending','Requesting seller account approval'),
(2,'Product Listing','Vintage Watch','','Ahmed Raza','2024-05-02','Pending','New product listing for approval'),
(3,'Seller Registration','Sara Ahmed','sara@email.com','','2024-05-02','Pending','Fashion business seller registration'),
(4,'Product Listing','Gaming Laptop','','TechZone PK','2024-05-03','Pending','High-end gaming laptop listing'),
(5,'Seller Verification','Hassan Ali','hassan@email.com','','2024-05-04','Pending','Business verification documents submitted'),
(6,'Product Update','Wireless Headphones','','AudioHub','2024-05-05','Pending','Product information update request');

-- ---------- ACTIVITIES ----------
CREATE TABLE IF NOT EXISTS activities (
    id     INT AUTO_INCREMENT PRIMARY KEY,
    action VARCHAR(100),
    user   VARCHAR(100),
    time   VARCHAR(50),
    type   VARCHAR(20)
);

TRUNCATE TABLE activities;
INSERT INTO activities (id, action, user, time, type) VALUES
(1,'New user registered','Sara Ahmed','2 hours ago','user'),
(2,'Product listed','Gaming Laptop Pro','5 hours ago','product'),
(3,'Seller verification pending','Sikandar Khan','1 day ago','pending'),
(4,'Product updated','Premium Leather Watch','2 days ago','product');
