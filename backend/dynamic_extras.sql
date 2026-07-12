-- ============================================================
--  Yaqeen — makes the last static blocks dynamic:
--  Dashboard "System Status" + Contact page info.
--  Import into the same yaqeen database.
-- ============================================================

-- ---------- SYSTEM STATUS (dashboard right card) ----------
CREATE TABLE IF NOT EXISTS system_status (
    id    INT AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(60),
    value VARCHAR(30),
    state VARCHAR(20)      -- 'success' = green badge, 'storage' = the progress bar
);

TRUNCATE TABLE system_status;
INSERT INTO system_status (id, label, value, state) VALUES
(1,'Server Status','Online','success'),
(2,'Database','Connected','success'),
(3,'Payment Gateway','Active','success'),
(4,'Email Service','Running','success'),
(5,'Storage Usage','65','storage');

-- ---------- CONTACT INFO (contact page right card) ----------
CREATE TABLE IF NOT EXISTS contact_info (
    id             INT AUTO_INCREMENT PRIMARY KEY,
    address        VARCHAR(200),
    phone1         VARCHAR(40),
    phone2         VARCHAR(40),
    email1         VARCHAR(80),
    email2         VARCHAR(80),
    hours_weekday  VARCHAR(80),
    hours_saturday VARCHAR(80),
    hours_sunday   VARCHAR(80)
);

TRUNCATE TABLE contact_info;
INSERT INTO contact_info
    (id, address, phone1, phone2, email1, email2, hours_weekday, hours_saturday, hours_sunday)
VALUES
    (1, 'Plot 123, I-9 Markaz, Islamabad, Pakistan',
        '+92 51 1234567', '+92 300 1234567',
        'support@yaqeen.pk', 'info@yaqeen.pk',
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed');
