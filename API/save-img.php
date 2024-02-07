<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$requestMethod = $_SERVER["REQUEST_METHOD"];


$data = json_decode(file_get_contents('php://input'), true);
$img = $data['image'];
$imageData = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $img));

/*
$image_name = md5(uniqid(rand(), true)).'.jpg';
$image_destination = 'images/'.$image_name;
*/
if (file_put_contents("images/image.jpg", $imageData)) {
    echo json_encode(['message' => 'File uploaded successfully.']);
} else {
    echo json_encode(['errors' => ['Error saving image.']]);
}

?>