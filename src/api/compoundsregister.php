<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$compound = $_POST['compound'];
$registerPassword = $_POST['registerPassword'];
$date = date("Y-m-d");


$servername = $_POST['host'];
$username = $_POST['user'];
$password = $_POST['password'];
$dbname = $_POST['database'];


$connect = mysqli_connect($servername, $username, $password, $dbname);

if( !empty($compound) && !empty($registerPassword) ) 
{
       
        $compound_ordinary =  mysqli_real_escape_string($connect, $_POST['compound']);
        $compound_lower = strtolower($compound_ordinary);
        $registerPassword =  mysqli_real_escape_string($connect, $_POST['registerPassword']);
        $date = date("Y-m-d");

        $hash = password_hash($registerPassword, PASSWORD_BCRYPT);

        $sql = "INSERT INTO compoundslogin (compound, password, date) VALUES ('$compound_lower','$hash', '$date')"; 
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
        $response = 3;
		echo json_encode($response);
}

?>