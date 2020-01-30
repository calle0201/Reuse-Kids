<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$email = $_POST['email'];
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
      

if(!empty($email)) 
{
        http_response_code(200);
      
        $email =  mysqli_real_escape_string($connect, $_POST['email']);
        $date = date("Y-m-d");

        
     

        $sql = "INSERT INTO newsletter ( email, date) VALUES ('$email','$date')";
                    
        $result = $connect ->query($sql);
        $return_arr = array();

        $response = 1;
        echo json_encode($response);

        mysqli_close($connect);

}else{
      
       $response = 2;
       echo json_encode($response);
}

?>