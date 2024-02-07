<?php
require "../config/header.php";
require "../database/database.php";
$DB = new database();
$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($requestMethod === "GET") {
  $data = json_decode(file_get_contents("php://input"), true);
  $SQL_1 = "SELECT * FROM products";
  $product = $DB->Select_All($SQL_1);
  if ($product) {
    echo json_encode([
      "status" => "success",
      "data" => $product,
    ]);
  } else {
    echo json_encode([
      "status" => "failed",
      "message" => "No Product Found !",
    ]);
  }
} else {
  echo json_encode([
    "status" => "failed",
    "message" => "GET Request Available Only !",
  ]);
}
?>
