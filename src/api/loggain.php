<?php

session_start();


header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');   

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


$email = $_POST['loginEmail'];
$loginPassword = $_POST['loginPassword'];


$errors = array();

if(isset($_POST['loginEmail']) && $_POST['loginEmail'] !="") {
  //echo $_POST['loginEmail'];
} else {
  $errors[] = "no Username";
}

if(isset($_POST['loginPassword']) && $_POST['loginPassword'] !="") {
 // echo $_POST['loginPassword'];
} else {
  $errors[] = "no password";
}

//var_dump($errors);

if(empty($errors)) {
  $servername = $_POST['host'];
  $username = $_POST['user'];
  $password = $_POST['password'];
  $dbname = $_POST['database'];
  
  $connect = mysqli_connect($servername, $username, $password, $dbname);
  
  $sql = "SELECT email FROM user WHERE email='$email' AND password='$password'";

  if($result->num_rows == 1) {
    //echo "Found user";
    $_SESSION['email'] = $email;
    //redirect to myside
  }

  $result->close();
}

$mysqli->close();

?>