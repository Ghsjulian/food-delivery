<?php
require "../config/header.php";
require "../database/database.php";
$DB = new database();
$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($requestMethod === "GET") {
  if(isset($_GET["product_id"])){
  $data = json_decode(file_get_contents("php://input"), true);
  $product_id = $_GET["product_id"];
  $SQL_1 = "SELECT * FROM products WHERE product_id='$product_id'";
  if ($DB->isExist($SQL_1)) {
    $SQL_2 = "DELETE FROM products WHERE product_id='$product_id'";
    if ($DB->Delete($SQL_2)) {
      echo json_encode([
        "status" => "success",
        "data" => "Product Deleted Successfully",
      ]);
    } else {
      echo json_encode([
        "status" => "failed",
        "data" => "Product Deleted Unuccessfully",
      ]);
    }
  } else {
    echo json_encode([
      "status" => "failed",
      "message" => "No Product Found !",
    ]);
  }
  }else{
    echo json_encode([
    "status" => "failed",
    "message" => "Required 'product_id' In URL",
  ]);
  }
} else {
  echo json_encode([
    "status" => "failed",
    "message" => "GET Request Available Only !",
  ]);
}
?>
