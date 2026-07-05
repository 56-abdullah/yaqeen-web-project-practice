-- ============================================================
--  Yaqeen — About page tables (team, milestones, values, stats).
--  Makes the About page fully database-driven (nothing static).
--  Import into the same yaqeen database.
-- ============================================================

-- ---------- TEAM MEMBERS ----------
CREATE TABLE IF NOT EXISTS team_members (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100),
    role        VARCHAR(80),
    image       VARCHAR(150),
    description TEXT
);

TRUNCATE TABLE team_members;
INSERT INTO team_members (id, name, role, image, description) VALUES
(1,'Muhammad Asad','Founder & CEO','/images/18.jpg','Visionary leader with 10+ years of e-commerce experience'),
(2,'Ayesha Malik','Chief Technology Officer','/images/19.jpg','Tech expert specializing in secure marketplace platforms'),
(3,'Hassan Raza','Head of Operations','/images/20.jpg','Operations specialist ensuring smooth seller-buyer transactions'),
(4,'Fatima Khan','Customer Success Manager','/images/21.png','Dedicated to providing exceptional customer support 24/7');

-- ---------- MILESTONES ----------
CREATE TABLE IF NOT EXISTS milestones (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    year        VARCHAR(10),
    event       VARCHAR(120),
    description TEXT
);

TRUNCATE TABLE milestones;
INSERT INTO milestones (id, year, event, description) VALUES
(1,'2022','Yaqeen Marketplace Founded','Started with a vision to create Pakistan''s most trusted marketplace'),
(2,'2023','10,000+ Users Milestone','Reached our first major milestone with verified sellers and buyers'),
(3,'2024','Nationwide Expansion','Expanded operations to all major cities across Pakistan'),
(4,'2025','Award Recognition','Recognized as Best Emerging E-commerce Platform');

-- ---------- CORE VALUES ----------
CREATE TABLE IF NOT EXISTS core_values (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    title       VARCHAR(80),
    description TEXT
);

TRUNCATE TABLE core_values;
INSERT INTO core_values (id, title, description) VALUES
(1,'Trust & Security','Every transaction is protected with end-to-end encryption and verified seller authentication'),
(2,'Quality Assurance','Rigorous verification process ensures only genuine products reach our customers'),
(3,'Community First','Building a supportive community of buyers and sellers across Pakistan'),
(4,'Innovation','Continuously improving our platform with cutting-edge technology');

-- ---------- ABOUT STATS ----------
CREATE TABLE IF NOT EXISTS about_stats (
    id     INT AUTO_INCREMENT PRIMARY KEY,
    number VARCHAR(20),
    label  VARCHAR(60)
);

TRUNCATE TABLE about_stats;
INSERT INTO about_stats (id, number, label) VALUES
(1,'50K+','Active Users'),
(2,'5K+','Verified Sellers'),
(3,'100K+','Products Listed'),
(4,'98%','Customer Satisfaction');
