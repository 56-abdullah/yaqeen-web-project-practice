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

    if (isset($data->email) && isset($data->password)) {

        $fullName     = $data->name;
        $email        = $data->email;
        $phone        = $data->phone;
        $idCard       = $data->idCard;
        $password     = $data->password;
        $role         = $data->role;
        $status       = $data->status;
        $joinDate     = $data->joinDate;
        $businessName = isset($data->businessName) ? $data->businessName : "";
        $city         = $data->city;
        $postalCode   = $data->postalCode;
        $address      = $data->address;

        $query = "INSERT INTO users
                  (full_name, email, phone, id_card, user_password, role, status, join_date, business_name, city, postal_code, address)
                  VALUES
                  ('$fullName', '$email', '$phone', '$idCard', '$password', '$role', '$status', '$joinDate', '$businessName', '$city', '$postalCode', '$address')";

        $process_query = mysqli_query($connect, $query);

        if ($process_query) {
            echo json_encode([
                "success" => true,
                "message" => "User $fullName added successfully."
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
