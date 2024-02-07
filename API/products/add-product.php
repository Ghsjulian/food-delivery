<?php
require "../config/header.php";
require "../database/database.php";
$DB = new database();
$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($requestMethod === "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
  $product_name = $data["product_name"];
  $product_img = $data["product_img"];
  $description = $data["product_description"];
  $product_price = $data["product_price"];
  $category = $data["category"];
  $SQL = "INSERT INTO `products`(`product_name`, `product_img`, `product_description`,`product_price`, `category`)VALUES('$product_name','$product_img','$description','$product_price','$category')";
  $insert = $DB->Insert($SQL);
  if ($insert) {
    echo json_encode([
      "status" => "success",
      "message" => "Product Added Successfully",
    ]);
  } else {
    echo json_encode([
      "status" => "failed",
      "message" => "Failed To Added Product !",
    ]);
  }
} else {
  echo json_encode([
    "status" => "failed",
    "message" => "POST Request Available Only !",
  ]);
}
?>