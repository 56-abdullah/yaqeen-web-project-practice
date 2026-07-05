<?php

    // ============================================================
    //  InfinityFree version of connection.php
    //  Get these 4 values from InfinityFree control panel:
    //      Control Panel -> "MySQL Databases"
    //  Then RENAME this file to connection.php on the host
    //  (replace the local one) OR paste these values into it.
    // ============================================================

    $connect = mysqli_connect(
        "sqlXXX.infinityfree.com",     // <-- MySQL Host Name (e.g. sql200.infinityfree.com)
        "if0_XXXXXXXX",                // <-- MySQL Username  (e.g. if0_37123456)
        "YOUR_DB_PASSWORD",            // <-- the password you chose
        "if0_XXXXXXXX_yaqeen"          // <-- Database Name   (e.g. if0_37123456_yaqeen)
    );

    if (!$connect) {
        die("Connection failed: " . mysqli_connect_error());
    }

?>
