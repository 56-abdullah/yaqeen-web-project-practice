-- Run ONCE in phpMyAdmin (database: yaqeen_web_project, SQL tab).

-- 1. Contact messages table (for the Contact form).
CREATE TABLE contacts (
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

-- 2. Extra columns on the existing users table (for admin Add/Edit User forms).
ALTER TABLE users
    ADD COLUMN role      VARCHAR(20),
    ADD COLUMN status    VARCHAR(20),
    ADD COLUMN join_date VARCHAR(20);
