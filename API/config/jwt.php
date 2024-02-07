<?php
require "../config/header.php";
function secret_key()
{
  $path = __DIR__ . "/../db_config.json";
  $jsonString = file_get_contents($path);
  $jsonArray = json_decode($jsonString, true);
  return $jsonArray["db_info"]["secret_key"];
}

function encode_jwt($payload)
{
  $header = [
    "alg" => "HS256",
    "typ" => "JWT",
  ];
  $secretKey = secret_key();
  // Encode the header and payload
  $headerEncoded = rtrim(
    strtr(base64_encode(json_encode($header)), "+/", "-_"),
    "="
  );
  // Payload Encoded
  $payloadEncoded = rtrim(
    strtr(base64_encode(json_encode($payload)), "+/", "-_"),
    "="
  );
  // Generate the signature
  $has_key = $headerEncoded . "." . $payloadEncoded . $secretKey;
  $signature = rtrim(
    strtr(base64_encode(hash_hmac("sha256", $has_key, true)), "+/", "-_"),
    "="
  );
  $JWT = $headerEncoded . "." . $payloadEncoded . "." . $signature;
  return $JWT;
}

function decode_jwt($jwt)
{
  // Split the JWT into its three parts
  $parts = explode(".", $jwt);
  // Decode the header and payload
  $header = json_decode(base64_decode(strtr($parts[0], "-_", "+/")), true);
  $payload = json_decode(base64_decode(strtr($parts[1], "-_", "+/")), true);

  $has_key = $parts[0] . "." . $parts[1] . $secretKey;
  // Verify the signature
  $secretKey = secret_key();
  $signature = hash_hmac("sha256", $has_key, true);
  $signature = rtrim(strtr(base64_encode($signature), "+/", "-_"), "=");

  // Check if the signature is valid
  if ($signature === $parts[2]) {
    // Output the decoded JWT
   return $payload;
  } else {
    echo "Invalid signature";
  }
}

/*
Example Of Using....
*
*
*
$data = [
  "user_id" => 123,
  "name" => "Ghs Julian",
  "time" => time(),
];
$jwt = encode_jwt($data);
echo $jwt;
echo "<br><br>";
echo decode_jwt($jwt);
*/
?>

