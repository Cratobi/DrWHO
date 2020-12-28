<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/db.php';
include_once '../../models/doctor.php';
include_once '../../models/user.php';

// Database Connection
$database = new Database();
$db = $database->connect();

// Model init
$doctor = new Doctor($db);
$user = new User($db);

// Recieving data from front-end
$data = json_decode(file_get_contents("php://input"));

$user->name = $data->name;
$user->email = $data->email;
$user->bloodgroup = $data->bloodgroup;
$user->phone_number = $data->phone_number;
$user->password = $data->password;
$user->dateofbirth = $data->dateofbirth;

if ($user->create()) {
  $user->fetch_one();

  $userSingle = array(
    'ssn' => $user->ssn,
    'name' => $user->name,
    'email' => $user->email,
    'bloodgroup' => $user->bloodgroup,
    'phone_number' => $user->phone_number,
    'password' => $user->password,
    'dateofbirth' => $user->dateofbirth
  );

  $doctor->ssn = $user->ssn;
  $doctor->license_number = $data->license_number;
  $doctor->location = $data->location;
  $doctor->visiting_fee = $data->visiting_fee;
  $doctor->graduated_college = $data->graduated_college;
  $doctor->specialised = $data->specialised;

  if ($doctor->create()) {
    echo json_encode(
      array('message' => 'Created')
    );
  } else {
    echo json_encode(
      array('message' => 'Not Created')
    );
  }
} else {
  echo json_encode(
    array('message' => 'Not Created')
  );
}