<?php
require "../config/header.php";
require "../database/database.php";
$DB = new database();
$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($requestMethod === "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
  $product_id = $data["product_id"];
  $SQL_1 = "SELECT * FROM products WHERE product_id='$product_id'";
  $product = $DB->Select_Single($SQL_1);
  if ($product) {
    $product_name = $data["product_name"]
      ? $data["product_name"]
      : $product["product_name"];
    $product_img = $data["product_img"]
      ? $data["product_img"]
      : $product["product_img"];
    $description = $data["product_description"]
      ? $data["product_description"]
      : $product["product_description"];
    $product_price = $data["product_price"]
      ? $data["product_price"]
      : $product["product_price"];
    $category = $data["category"] ? $data["category"] : $product["category"];

    $SQL = "UPDATE `products` SET product_name='$product_name',product_img='$product_img',product_description='$description',product_price='$product_price',category='$category' WHERE product_id='$product_id'";
    $update = $DB->Update($SQL);
    if ($update) {
      echo json_encode([
        "status" => "success",
        "message" => "Product Updated Successfully",
      ]);
    } else {
      echo json_encode([
        "status" => "failed",
        "message" => "Failed To Updated Product !",
      ]);
    }
  } else {
    echo json_encode([
      "status" => "failed",
      "message" => "No Product Found !",
    ]);
  }
} else {
  echo json_encode([
    "status" => "failed",
    "message" => "POST Request Available Only !",
  ]);
}
?>
