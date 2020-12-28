<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/db.php';
include_once '../../models/doctor.php';

// Database Connection
$database = new Database();
$db = $database->connect();

// Model init
$doctor = new Doctor($db);

// Get filter data
// $doctor->specialised = isset($_GET['specialised']) ? $_GET['specialised'] : die();
// $doctor->visiting_fee = isset($_GET['visiting_fee']) ? $_GET['visiting_fee'] : die();
// $doctor->location = isset($_GET['location']) ? $_GET['location'] : die();
// $doctor->rating = isset($_GET['rating']) ? $_GET['rating'] : die();

$result = $doctor->fetch();
$num = $result->rowCount();

if ($num > 0) {
  $doctors_arr = array();

  while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    extract($row);

    $doctor_item = array(
      'ssn' => $ssn,
      'license_number' => $license_number,
      'name' => $name,
      'specialised' => $specialised,
      'location' => $location,
      'graduated_college' => $graduated_college
      // 'visiting_fee' => $visiting_fee
    );

    array_push($doctors_arr, $doctor_item);
  }

  // Send JSON
  echo json_encode($doctors_arr);
} else {
  echo json_encode(
    array('message' => 'Nothing Found')
  );
}