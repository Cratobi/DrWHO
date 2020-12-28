<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/db.php';
include_once '../../models/__template__.php';

// Database Connection
$database = new Database();
$db = $database->connect();

// Model init
$__template__ = new __Template__($db);

// Get filter data
$__template__->__col_1__ = isset($_GET['__col_1__']) ? $_GET['__col_1__'] : die();

$result = $__template__->fetch();
$num = $result->rowCount();

if ($num > 0) {
  $__template__s_arr = array();

  while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
    extract($row);

    $__template___item = array(
      '__col_1__' => $__col_1__,
      '__col_2__' => $__col_2__,
      '__col_3__' => $__col_3__,
      '__col_4__' => $__col_4__
    );

    array_push($__template__s_arr, $__template___item);
  }

  // Send JSON
  echo json_encode($__template__s_arr);
} else {
  echo json_encode(
    array('message' => 'Nothing Found')
  );
}