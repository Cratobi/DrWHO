<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/db.php';
include_once '../../models/__template__.php';

// Database Connection
$database = new Database();
$db = $database->connect();

// Model init
$__template__ = new __Template__($db);

// Recieving data from front-end
$data = json_decode(file_get_contents("php://input"));

$__template__->__col_1__ = $data->__col_1__;
$__template__->__col_2__ = $data->__col_2__;
$__template__->__col_3__ = $data->__col_3__;
$__template__->__col_4__ = $data->__col_4__;

if ($__template__->update()) {
  echo json_encode(
    array('message' => 'Updated')
  );
} else {
  echo json_encode(
    array('message' => 'Not Updated')
  );
}