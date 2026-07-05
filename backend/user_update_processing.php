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

    if (isset($data->id) && isset($data->email)) {

        $id           = $data->id;
        $fullName     = $data->name;
        $email        = $data->email;
        $phone        = $data->phone;
        $idCard       = $data->idCard;
        $role         = $data->role;
        $status       = $data->status;
        $joinDate     = $data->joinDate;
        $businessName = isset($data->businessName) ? $data->businessName : "";
        $city         = $data->city;
        $postalCode   = $data->postalCode;
        $address      = $data->address;

        $query = "UPDATE users SET
                    full_name     = '$fullName',
                    email         = '$email',
                    phone         = '$phone',
                    id_card       = '$idCard',
                    role          = '$role',
                    status        = '$status',
                    join_date     = '$joinDate',
                    business_name = '$businessName',
                    city          = '$city',
                    postal_code   = '$postalCode',
                    address       = '$address'
                  WHERE id = '$id'";

        // Only change the password if a new one was typed (not the '********' placeholder).
        if (isset($data->password) && $data->password != "" && $data->password != "********") {
            $password = $data->password;
            $query = "UPDATE users SET
                        full_name     = '$fullName',
                        email         = '$email',
                        phone         = '$phone',
                        id_card       = '$idCard',
                        user_password = '$password',
                        role          = '$role',
                        status        = '$status',
                        join_date     = '$joinDate',
                        business_name = '$businessName',
                        city          = '$city',
                        postal_code   = '$postalCode',
                        address       = '$address'
                      WHERE id = '$id'";
        }

        $process_query = mysqli_query($connect, $query);

        if ($process_query) {
            echo json_encode([
                "success" => true,
                "message" => "User $fullName updated successfully."
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
