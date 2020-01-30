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

echo $username;

$connect = mysqli_connect($servername, $username, $password, $dbname);

if (mysqli_connect_errno()){
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	die();
}

mysqli_set_charset($connect, 'utf8');

$id = $_POST['id'];

//echo $id;

if(!empty($id)) 
{
        http_response_code(200);
        $id =  mysqli_real_escape_string($connect, $_POST['id']);

        $sql = "DELETE FROM advertisment where id = '$id'";

        if($connect -> query($sql) === TRUE) {

                $response = 1;
                echo json_encode($response);        
        //echo 'Annonsen är nu raderad.';
        }
        mysqli_close($connect);
}else{
}

?>