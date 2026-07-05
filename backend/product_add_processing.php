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

    if (isset($data->title) && isset($data->price)) {

        $title       = $data->title;
        $price       = $data->price;
        $seller      = $data->seller;
        $category    = $data->category;
        $rating      = $data->rating;
        $image       = $data->image;
        $description = $data->description;
        $stock       = $data->stock;
        $condition   = $data->condition;

        // Only the columns that exist in the products table are saved.
        // (The form's sku/tags/weight/size fields have no column, so they are ignored.)
        $query = "INSERT INTO products
                  (title, price, seller, category, rating, image, description, stock, `condition`)
                  VALUES
                  ('$title', '$price', '$seller', '$category', '$rating', '$image', '$description', '$stock', '$condition')";

        $process_query = mysqli_query($connect, $query);

        if ($process_query) {
            echo json_encode([
                "success" => true,
                "message" => "Product '$title' added successfully."
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Try again. Database insertion failed: " . mysqli_error($connect)
            ]);
        }

    } else {
        echo json_encode([
            "success" => false,
            "message" => "No data was received by the server."
        ]);
    }

?>
