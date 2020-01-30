<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
include("connect.php");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$email= $_POST['email'];
$registerPassword = $_POST['registerPassword'];
$date = date("Y-m-d");

//echo $email;



if( !empty($email) && !empty($password) ) 
{
      //  http_response_code(200);
       
        $email_ordinary =  mysqli_real_escape_string($connect, $_POST['email']);
        $email_lower = strtolower($email_ordinary);
        $registerPassword =  mysqli_real_escape_string($connect, $_POST['registerPassword']);
        $date = date("Y-m-d");


        echo $email;

        $sql = "INSERT INTO user (email, password) VALUES ('$email_lower','$registerPassword')"; 
       // $sql = "INSERT INTO user (email, county) VALUES ('$email','$county')"; 
        //if($connect -> query($sql) === TRUE) {
        //$sql ="INSERT INTO password (userid, password) VALUES ((SELECT userid from user where email='$email'),'$password')";
        if($connect -> query($sql) === TRUE) {
                $result = mysqli_query($connect, $sql) or die("Query died: Felaktigt lösenord");
                echo $result;
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