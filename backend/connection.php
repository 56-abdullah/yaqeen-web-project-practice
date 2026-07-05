<?php

    // Connect to MySQL. XAMPP defaults: host=localhost, user=root, password="" (empty).
    // "yaqeen" is the database name you create in phpMyAdmin.
    $connect = mysqli_connect("localhost", "root", "", "yaqeen_web_project");

    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }

?>
