<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    include("connection.php");

    // Rename columns (full_name -> name, join_date -> joinDate) so the React
    // code can use the same field names it used with the old JSON file.
    $query  = "SELECT id, full_name AS name, email, phone, role, status, city, join_date AS joinDate
               FROM users";
    $result = mysqli_query($connect, $query);

    $users = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $users[] = $row;
    }

    echo json_encode($users);

?>
