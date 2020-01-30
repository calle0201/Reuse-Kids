<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


$county = $_POST['county'];

$servername = $_POST['host'];
$username = $_POST['user'];
$password = $_POST['password'];
$dbname = $_POST['database'];

$connect = mysqli_connect($servername, $username, $password, $dbname);


if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    die();
}

mysqli_set_charset($connect, 'utf8');
      

$sql = "SELECT * from rentadvertisment where county = '$county' ";
       
$result = $connect ->query($sql);
$return_arr = array();

if($result = mysqli_query($connect, $sql))  {
	while($row = mysqli_fetch_assoc($result)) {
		$row_array['id'] = $row['id'];
		$row_array['title'] = $row['title'];
		$row_array['picture'] = $row['picture'];
		$row_array['text'] = $row['text'];
		$row_array['price'] = $row['price'];
		$row_array['phone'] = $row['phone'];
		$row_array['name'] = $row['name'];
		$row_array['email'] = $row['email'];
		$row_array['date'] = $row['date'];
		$row_array['municipality'] = $row['municipality'];
		$row_array['county'] = $row['county'];
			array_push($return_arr, $row_array);
	}
}    
mysqli_close($connect);
echo json_encode($return_arr);
?>