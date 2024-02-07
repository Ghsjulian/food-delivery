<?php
require "../config/jwt.php";
require_once "auth.php";
function __HandleSignup__($data, $db)
{
  $message = "";
  $status = "";
  $token = "";
  $user_name = trim($data["user_name"]);
  $user_email = trim($data["user_email"]);
  $user_pass = trim($data["user_password"]);
  $enc_password = sha1($user_pass);
  if ($user_name && $user_pass && $user_email) {
    $sql_1 = "SELECT * FROM users WHERE user_email = '$user_email'";
    if (!$db->isExist($sql_1)) {
      $sql = "INSERT INTO users (user_name,user_email,user_password,user_avtar,login_token) VALUES('$user_name','$user_email','$enc_password','','')";
      $query = $db->__SIGNUP__($sql);
      if ($query) {
        $sql = "SELECT * FROM users WHERE user_name='$user_name' AND user_email='$user_email'";
        $Data = $db->Select_Single($sql);
        $tok = encode_jwt([
          "user_id" => $Data["user_id"],
          "user_name" => $Data["user_name"],
          "time" => time(),
        ]);
        $SQL_3 = "UPDATE users SET login_token='$tok' WHERE user_email='$user_email' AND user_password='$enc_password'";
        $product = $db->Insert($SQL_3);
        $token = $tok;
        $message = "Registration Successfully";
        $status = "success";
      } else {
        $message = "Registration Failed";
        $status = "failed";
      }
    } else {
      $status = "failed";
      $message = "User Already Registered With This Email";
    }
  } else {
    $message = "Fields Are Required !";
    $status = "failed";
  }
  return [
    "status" => $status,
    "message" => $message,
    "token" => $token ? $token : "No Token",
  ];
}

?>
