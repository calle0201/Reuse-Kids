<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');   

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$email = $_POST['email'];
$registerPassword = $_POST['registerPassword'];
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




if(!empty($email) && !empty($registerPassword) ) 
{
        http_response_code(200);
      
        $email_ordinary =  mysqli_real_escape_string($connect, $_POST['email']);
        $email_lower = strtolower($email_ordinary);
        $registerPassword =  mysqli_real_escape_string($connect, $_POST['registerPassword']);
        $date = date("Y-m-d");

        //echo $registerPassword;

        $sql = "SELECT email FROM user WHERE email = '$email_lower'";
        $result = mysqli_query($connect, $sql);

        $num = mysqli_num_rows($result);
        
        if($num > 0) {
            $response = 1;
			echo json_encode($response);
        }
        else {
            $hash = password_hash($registerPassword, PASSWORD_BCRYPT);

            $sql = "INSERT INTO user ( email, password) VALUES ('$email_lower','$hash')";
                        
            $result = $connect ->query($sql);
            $return_arr = array();
               
        }

        
        
      
        mysqli_close($connect);
}else{
       echo 'saknas uppgifter';
}

?>