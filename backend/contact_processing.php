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

    if (isset($data->email) && isset($data->message)) {

        $fullName    = $data->fullName;
        $email       = $data->email;
        $phone       = $data->phone;
        $subject     = $data->subject;
        $messageType = $data->messageType;
        $priority    = $data->priority;
        $company     = isset($data->company) ? $data->company : "";
        $message     = $data->message;

        $query = "INSERT INTO contacts
                  (full_name, email, phone, subject, message_type, priority, company, message)
                  VALUES
                  ('$fullName', '$email', '$phone', '$subject', '$messageType', '$priority', '$company', '$message')";

        $process_query = mysqli_query($connect, $query);

        if ($process_query) {
            echo json_encode([
                "success" => true,
                "message" => "Thank you $fullName, your message has been received."
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
