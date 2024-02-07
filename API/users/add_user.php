<?php
require_once"../config/header.php";
require_once"../database/__DB__.php";
$DB = new __database__();

$method = $_SERVER["REQUEST_METHOD"];
$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'];
$email = $data['email'];
$password = $data['password'];
$avtar = $data['avtar'];


$sql = "INSERT INTO `users`(`user_name`, `user_email`, `user_passeord`, `user_avtar`, `login_token`) VALUES ('$name','$email','$password','$avtar','')";
$query = $DB->__INSERT__($sql);
if($query){
  echo json_encode([
    "message" => "New User Added Successfully"
    ]);
}


?>