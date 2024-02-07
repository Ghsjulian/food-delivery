<?php
require "../config/jwt.php";
function __HandleLogin__($email, $password, $db)
{
  $status = "";
  $message = "";
  $user_email = trim($email);
  $user_pass = trim($password);
  $enc_password = sha1($user_pass);
  if ($user_email && $password) {
    $sql = "SELECT user_email,user_password,login_token FROM users WHERE user_email='$user_email' AND user_password='$enc_password'";
    $query = $db->__LOGIN__($sql);
    if ($query) {
      $sql_2 = "SELECT * FROM users WHERE user_email='$user_email' AND user_password='$enc_password'";
      $token_query = $db->Select_Single($sql_2);
      $payload = [
        "user_id" => $token_query["user_id"],
        "user_name" => $token_query["user_name"],
        "time" => time(),
      ];
      $tok = encode_jwt($payload);
      $SQL_3 = "UPDATE users SET login_token='$tok' WHERE user_email='$user_email' AND user_password='$enc_password'";
      $product = $db->Insert($SQL_3);
      $token = $tok;
      $status = "success";
      $message = "Login Successfully";
    } else {
      $status = "failed";
      $message = "Login Failed, Invalid Credentials";
    }
  } else {
    $status = "failed";
    $message = "All Fields Are Required!";
  }
  return [
    "status" => $status,
    "token" => $token,
    "message" => $message,
  ];
}

?>
