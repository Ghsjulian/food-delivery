<?php
require "../config/header.php";
require "../database/database.php";
require "../config/jwt.php";
$DB = new database();
$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($requestMethod === "POST") {
  $data = json_decode(file_get_contents("php://input"), true);
  $product_id = $data["product_id"];
  $cookie = $data["cookie"];
  $cookie_data = decode_jwt($cookie);
  $user_id = $cookie_data["user_id"];
  $user_name = $cookie_data["user_name"];
  $is_user = $DB->isExist(
    "SELECT * FROM users WHERE user_id='$user_id' AND user_name='$user_name'"
  );
  $is_product = $DB->isExist(
    "SELECT * FROM products WHERE product_id='$product_id'"
  );
  if ($is_user && $is_product) {
    $products = $DB->Select_Single(
      "SELECT * FROM products WHERE product_id='$product_id'"
    );
    $product_name = $products["product_name"];
    $product_price = $products["product_price"];
    $product_img = $products["product_img"];

/*
    $SQL = "INSERT INTO `cart`(`product_id`, `product_name`,`product_price`,`product_img`, `user_id`, `user_name`)VALUES('$product_id','$product_name','$product_price','$product_img','$user_id','$user_name')";
    */
$SQL = "INSERT INTO `cart`(`product_id`,`product_name`,`product_price`,`product_img`, `user_id`,`user_name`)VALUES('$product_id','$product_name','$product_price','$product_img','$user_id','$user_name')";


    $insert = $DB->Insert($SQL);
    if ($insert) {
      echo json_encode([
        "status" => "success",
        "message" => "Cart Added Successfully",
      ]);
    } else {
      echo json_encode([
        "status" => "failed",
        "message" => "Failed To Added Cart !",
      ]);
    }
  } else {
    echo json_encode([
      "status" => "failed",
      "message" => "Something Went Wrong",
    ]);
  }
} else {
  $cookie = $_GET["cookie"];
  $cookie_data = decode_jwt($cookie);
  $user_id = $cookie_data["user_id"];
  $user_name = $cookie_data["user_name"];
  $is_user = $DB->isExist(
    "SELECT * FROM users WHERE user_id='$user_id' AND user_name='$user_name'"
  );
  $is_cart = $DB->isExist("SELECT * FROM cart WHERE user_id='$user_id'");
  if ($is_user && $is_cart) {
    $SQL = "SELECT * FROM cart WHERE user_id='$user_id'";
    $cart_data = $DB->Select_All($SQL);
    if ($cart_data) {
      echo json_encode([
        "status" => "success",
        "data" => $cart_data,
      ]);
    } else {
      echo json_encode([
        "status" => "failed",
        "message" => "No Items Found In Cart!",
      ]);
    }
  } else {
    echo json_encode([
      "status" => "failed",
      "message" => "Something Went Wrong",
    ]);
  }
}
?>
