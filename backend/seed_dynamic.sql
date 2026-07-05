-- ============================================================
--  Extra tables so the admin Requests page and Dashboard
--  "recent activity" are also read from the database
--  (no more hard-coded arrays).
--  phpMyAdmin -> yaqeen_web_project -> Import this file.
-- ============================================================

-- ---------- REQUESTS (admin Requests page) ----------
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

-- ---------- ACTIVITIES (Dashboard recent activity) ----------
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
