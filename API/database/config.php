<?php
function Config_Data()
{
  $path = __DIR__."/db_config.json";
  $jsonString = file_get_contents($path);
  $jsonArray = json_decode($jsonString, true);
  return $jsonArray["db_info"];
}
?>
