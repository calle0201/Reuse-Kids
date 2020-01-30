<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');   

if( isset($_SESSION['userid'])) {
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$userid = $_POST['userid'];



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


if( !empty($_POST['userid']) ) 
{
   
        $sql = "select * from advertisment where userid='$userid'";
        $result = $connect ->query($sql);
        
        $return_arr = array();

        if($result = mysqli_query($connect, $sql))  {
            while($row = mysqli_fetch_assoc($result)) {
                $row_array['id'] = $row['id'];
                $row_array['picture'] = $row['picture'];
                $row_array['title'] = $row['title'];
                $row_array['date'] = $row['date'];

              
                array_push($return_arr, $row_array);
            }
        }    
        mysqli_close($connect);
        echo json_encode($return_arr);

    
} 

}
?>