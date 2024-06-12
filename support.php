<?php
// Retrieve donation data from the request
$data = json_decode(file_get_contents("php://input"), true);

// Process the donation data (e.g., save to database, send email receipt, etc.)
// Example:
// $name = $data['name'];
// $email = $data['email'];
// $amount = $data['amount'];
// 
// // Save to database
// // Send email receipt
// 
// // Return response
// echo json_encode(["success" => true]);

// For demonstration, let's just log the data
file_put_contents('donation_logs.txt', json_encode($data) . PHP_EOL, FILE_APPEND);

?>
