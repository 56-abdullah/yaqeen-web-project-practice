<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    include("connection.php");

    $rawData = file_get_contents("php://input");
    $data = json_decode($rawData);

    if (isset($data->id) && isset($data->title)) {

        $id          = $data->id;
        $title       = $data->title;
        $price       = $data->price;
        $seller      = $data->seller;
        $category    = $data->category;
        $rating      = $data->rating;
        $image       = $data->image;
        $description = $data->description;
        $stock       = $data->stock;
        $condition   = $data->condition;

        $query = "UPDATE products SET
                    title       = '$title',
                    price       = '$price',
                    seller      = '$seller',
                    category    = '$category',
                    rating      = '$rating',
                    image       = '$image',
                    description = '$description',
                    stock       = '$stock',
                    `condition` = '$condition'
                  WHERE id = '$id'";

        $process_query = mysqli_query($connect, $query);

        if ($process_query) {
            echo json_encode([
                "success" => true,
                "message" => "Product '$title' updated successfully."
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Try again. Database update failed: " . mysqli_error($connect)
            ]);
        }

    } else {
        echo json_encode([
            "success" => false,
            "message" => "No data was received by the server."
        ]);
    }

?>
