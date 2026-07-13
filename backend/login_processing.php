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

        $email    = $data->email;
        $password = $data->password;

        // Look for a row that has BOTH this email AND this password.
        $query  = "SELECT * FROM users WHERE email = '$email' AND user_password = '$password'";
        $result = mysqli_query($connect, $query);

        // mysqli_num_rows = how many rows matched.
        if (mysqli_num_rows($result) == 1) {
            $user = mysqli_fetch_assoc($result);
            echo json_encode([
                "success" => true,
                "message" => "Login successful. Welcome back, " . $user["full_name"] . ".",
                "id"      => $user["id"],
                "role"    => $user["role"],
                "name"    => $user["full_name"]
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "message" => "Invalid email or password."
            ]);
        }

    } else {
        echo json_encode([
            "success" => false,
            "message" => "No data was received by the server."
        ]);
    }

?>
