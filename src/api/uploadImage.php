<?php
/*header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
include("connect.php");*/

move_uploaded_file($_FILES["image"]["tmp_name"], "./../../public/images/$id/" . $_FILES["image"]["name"]);
  
?>
