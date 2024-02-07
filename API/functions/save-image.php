<?php
function save_image($image, $img_name)
{
  $imageData = base64_decode(
    preg_replace("#^data:image/\w+;base64,#i", "", $image)
  );
  $path = "../images/";
  if (file_put_contents($path . $img_name, $imageData)) {
    return true;
  } else {
    return false;
  }
}
