<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/db.php';
include_once '../../models/doctor.php';

// Database Connection
$database = new Database();
$db = $database->connect();

// Model init
$doctor = new doctor($db);

// Recieving data from front-end
$data = json_decode(file_get_contents("php://input"));

$doctor->ssn = $data->ssn;
$doctor->license_number = $data->license_number;
$doctor->name = $data->name;
$doctor->specialised = $data->specialised;
$doctor->location = $data->location;
$doctor->qualification = $data->qualification;
$doctor->visiting_fee = $data->visiting_fee;

if ($doctor->update()) {
  echo json_encode(
    array('message' => 'Updated')
  );
} else {
  echo json_encode(
    array('message' => 'Not Updated')
  );
}