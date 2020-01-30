<?php
session_start();

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$email = $_POST['loginEmail'];


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



if( !empty($_POST['loginEmail'])) 
{
    $email =  mysqli_real_escape_string($connect, $_POST['loginEmail']);
    $sql = "SELECT userid FROM `user` WHERE email='$email'";
        
    $result = $connect ->query($sql);
    $return_arr = array();

    if($result = mysqli_query($connect, $sql))  {
        while($row = mysqli_fetch_assoc($result)) {
            $id = $row['userid'];
        }
        $_SESSION['userid'] = $id;
       // echo $_SESSION['userid'];
        $response =  $_SESSION['userid'];
        echo json_encode($response);

        $sql = "INSERT INTO login (userid, loginTime) VALUES ('$id' ,NOW())";
        $result3 = mysqli_query($connect, $sql) or die("Query died: insert");

    }    

   // echo $_SESSION['userid'];
}
?>