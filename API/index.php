<?php
require "config/header.php";
require_once "database/database.php";
$DB = new database();
$test = $DB->check();



echo json_encode([
  "message" => $test,
]);

?>
