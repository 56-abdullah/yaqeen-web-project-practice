<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    include("connection.php");

    // The id comes in the URL like  get_product.php?id=3
    $id = $_GET['id'];

    $query  = "SELECT * FROM products WHERE id = '$id'";
    $result = mysqli_query($connect, $query);

    $product = mysqli_fetch_assoc($result);

    echo json_encode($product);

?>
