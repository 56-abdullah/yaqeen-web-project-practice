-- Run this in phpMyAdmin (SQL tab) ONCE to create the database + table.

CREATE DATABASE IF NOT EXISTS yaqeen;

USE yaqeen;

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
    user_password     VARCHAR(100)
);
