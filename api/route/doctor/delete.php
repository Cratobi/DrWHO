<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/db.php';
include_once '../../models/doctor.php';

// Database Connection
$database = new Database();
$db = $database->connect();

// Model init
$doctor = new Doctor($db);

// Recieving data from front-end
$data = json_decode(file_get_contents("php://input"));

$doctor->license_number = $data->license_number;

if ($doctor->delete()) {
  echo json_encode(
    array('message' => 'doctor Deleted')
  );
} else {
  echo json_encode(
    array('message' => 'doctor Not Deleted')
  );
}