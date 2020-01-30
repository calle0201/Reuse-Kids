<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$email= $_POST['newpasswordEmail'];
$newPassword = $_POST['newPassword'];
$date = date("Y-m-d");

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


if( !empty($email) && !empty($newPassword) ) 
{
      //  http_response_code(200);
       
        $email_ordinary =  mysqli_real_escape_string($connect, $_POST['newpasswordEmail']);
        $email_lower = strtolower($email_ordinary);
        $newPassword =  mysqli_real_escape_string($connect, $_POST['newPassword']);
        $date = date("Y-m-d");

        $hash = password_hash($newPassword, PASSWORD_BCRYPT);

   

        $sql = "UPDATE user SET password = '$hash' WHERE email = '$email_lower'"; 
        if($connect -> query($sql) === TRUE) {
                $result = mysqli_query($connect, $sql) or die("Query died: Felaktigt lösenord");
               // echo $result;
                $response = 1;
		echo json_encode($response);

        } else {
                $response = 2;
		echo json_encode($response);
        }
        
        mysqli_close($connect);
}else{
       echo 'saknas uppgifter';
}

?>