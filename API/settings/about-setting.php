<?php
require "../config/header.php";
require "../database/database.php";
require "../functions/save-image.php";

$DB = new database();
$requestMethod = $_SERVER["REQUEST_METHOD"];
if ($requestMethod === "POST") {
  $data = json_decode(file_get_contents("php://input"), true);

  $image = $data["image"];
  $img_name = $DB->get_string(12).".jpg";
  echo json_encode(save_image($image, $img_name));
  /*
  $SQL = "INSERT INTO `about_settings`(`about_img`, `about_text`)VALUES('$about_img','$about_text')";
  $insert = $DB->Insert($SQL);
  if ($insert) {
    echo json_encode([
      "status" => "success",
      "message" => "About Added Successfully",
    ]);
  } else {
    echo json_encode([
      "status" => "failed",
      "message" => "Failed To Added About !",
    ]);
  }
  */
} else {
  echo json_encode([
    "status" => "failed",
    "message" => "POST Request Available Only !",
  ]);
}
?>
