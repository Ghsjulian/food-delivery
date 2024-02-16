<?php
require "../config/header.php";
require "../database/database.php";
require "../config/jwt.php";
$DB = new database();
$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($_GET["cookie"]) {
  $cart_id = $_GET["cart_id"];
  $cookie = $_GET["cookie"];
  $cookie_data = decode_jwt($cookie);
  $user_id = $cookie_data["user_id"];
  $user_name = $cookie_data["user_name"];
  $delete = $DB->Delete(
    "DELETE FROM cart WHERE product_id='$cart_id' AND user_id='$user_id'"
  );
  if ($delete) {
    echo json_encode([
      "status" => "success",
      "message" => "Product Removed",
    ]);
  } else {
    echo json_encode([
      "status" => "failed",
      "message" => "Failed To Remove Product",
    ]);
  }
} else {
  echo json_encode([
    "status" => "failed",
    "message" => "GET Request Available Only !",
  ]);
}
?>
