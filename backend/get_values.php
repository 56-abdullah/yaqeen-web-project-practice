<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    include("connection.php");

    $query  = "SELECT * FROM core_values";
    $result = mysqli_query($connect, $query);

    $values = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $values[] = $row;
    }

    echo json_encode($values);

?>
