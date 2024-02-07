<?php
function Token($length = 8) {
  $key = '';
  $keys = array_merge(range(0, 9), range('a', 'z'));

  for ($i = 0; $i < $length; $i++) {
    $key .= $keys[array_rand($keys)];
  }
return "ghs__".$key;
}
?>