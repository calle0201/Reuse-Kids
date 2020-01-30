<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');   

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$email = $_POST['email'];
$password = $_POST['password'];
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




if(!empty($email) && !empty($password) ) 
{
        http_response_code(200);
      
        $email =  mysqli_real_escape_string($connect, $_POST['email']);
        $password =  mysqli_real_escape_string($connect, $_POST['password']);
        $date = date("Y-m-d");

        $sql = "SELECT email FROM user WHERE email = '$email'";
        $result = mysqli_query($connect, $sql);

        $num = mysqli_num_rows($result);
        
        if($num > 0) {
            $response = 1;
			echo json_encode($response);
        }
        else {
            $hash = password_hash($password, PASSWORD_BCRYPT);

            $sql = "INSERT INTO user ( email, password) VALUES ('$email','$hash')";
                        
            $result = $connect ->query($sql);
            $return_arr = array();
               
        }

        
        
      
        mysqli_close($connect);
}else{
       echo 'saknas uppgifter';
}

?>