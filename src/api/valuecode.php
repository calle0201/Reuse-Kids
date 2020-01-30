<?php 

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


$servername = $_POST['host'];
$username = $_POST['user'];
$password = $_POST['password'];
$dbname = $_POST['database'];


$connect = mysqli_connect($servername, $username, $password, $dbname);

mysqli_set_charset($connect, 'utf8');
$rest_json = file_get_contents("php://input");
$_POST= json_decode($rest_json, true);

$valuecode = $_POST['code'];
$email = $_POST['email'];

if(!empty($valuecode) && !empty($email))
{
        http_response_code(200);
        $valuecode =  mysqli_real_escape_string($connect, $_POST['code']);
        $email=  mysqli_real_escape_string($connect,$_POST['email']);
     
        $sql = "SELECT COUNT(valuecode) FROM valuecode WHERE userid=(select userid FROM user WHERE email='$email') AND valuecode='Kalle'";
                             
        $result = mysqli_query($connect, $sql);

        if($result < 4) {

        $sql = "INSERT INTO valuecode ( valuecode, userid) VALUES ('$valuecode',(select userid FROM user WHERE email='$email'))";

           
        if (mysqli_num_rows($result) > 0) {
            $response = 1;
	        echo json_encode($response);
        }

        else {
            $response = 2;
	        echo json_encode($response);
        }
        mysqli_close($connect);
}else{
    $response = 3;
    echo json_encode($response);
}
?>