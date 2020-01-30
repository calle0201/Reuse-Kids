<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');   


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$servername = $_POST['host'];
$username = $_POST['user'];
$password = $_POST['password'];
$dbname = $_POST['database'];
$name = $_POST['name'];
$email = $_POST['email'];
$title = $_POST['title'];
$message = $_POST['message'];
$date = date("Y-m-d");


   
$connect = mysqli_connect($servername, $username, $password, $dbname);

if (mysqli_connect_errno()){
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	die();
}

mysqli_set_charset($connect, 'utf8');



$sql = "INSERT INTO contact ( name, email, title, message, date) VALUES ('$name','$email','$title','$message','$date')";
  
if($connect -> query($sql) === TRUE) {
	$result = mysqli_query($connect, $sql) or die("Query died: ");
	//echo $result;
	$response = 1;
	echo json_encode($response);

} else {
	$response = 2;
echo json_encode($response);
}

mysqli_close($connect);
/*$result = mysqli_query($connect, $sql);
     
$return_arr = array();


mysqli_close($connect);
echo json_encode($return_arr);*/
?>