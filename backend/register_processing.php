<?php

    // These headers let your React app (running on a different port) talk to PHP.
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");

    // The browser sends a "preflight" OPTIONS request first. Just say OK and stop.
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        http_response_code(200);
        exit();
    }

    include("connection.php");

    // axios sends JSON in the request body. Read it and turn it into a PHP object.
    $rawData = file_get_contents("php://input");
    $data = json_decode($rawData);

    if (isset($data->email) && isset($data->password)) {

        $accountType      = $data->accountType;
        $fullName         = $data->fullName;
        $email            = $data->email;
        $phone            = $data->phone;
        $idCard           = $data->idCard;
        $city             = $data->city;
        $postalCode       = $data->postalCode;
        $address          = $data->address;
        $businessName     = isset($data->businessName) ? $data->businessName : "";
        $businessCategory = isset($data->businessCategory) ? $data->businessCategory : "";
        $password         = $data->password;

        $query = "INSERT INTO users
                  (account_type, full_name, email, phone, id_card, city, postal_code, address, business_name, business_category, user_password)
                  VALUES
                  ('$accountType', '$fullName', '$email', '$phone', '$idCard', '$city', '$postalCode', '$address', '$businessName', '$businessCategory', '$password')";

        $process_query = mysqli_query($connect, $query);

        if ($process_query) {
            echo json_encode([
                "success" => true,
                "message" => "Account created successfully for $fullName."
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
