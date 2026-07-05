<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    include("connection.php");

    // id comes in the URL like  get_user.php?id=3
    $id = $_GET['id'];

    $query  = "SELECT id, full_name AS name, email, phone, id_card AS idCard, role, status,
                      join_date AS joinDate, business_name AS businessName, city,
                      postal_code AS postalCode, address
               FROM users WHERE id = '$id'";
    $result = mysqli_query($connect, $query);

    $user = mysqli_fetch_assoc($result);

    echo json_encode($user);

?>
