<?php
/*===================================*/
require "../config/header.php";
require_once "../database/database.php";
require_once "__HandleSignup__.php";
$DB = new database();
$url = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($requestMethod === "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
  $signup = __HandleSignup__($data, $DB);
 try {
   echo json_encode($signup);
 } catch (Exception $e) {
   echo json_encode([
     "status"=> "failed",
     "message"=> "Something Went Wrong"
     ]);
 }
} else {
  echo json_encode([
    "status" => "failed",
    "message" => "POST Request Available Only !",
  ]);
}
?>
