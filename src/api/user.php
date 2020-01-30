<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
//include("connect.php");

$servername = $_POST['host'];
$username = $_POST['user'];
$password = $_POST['password'];
$dbname = $_POST['database'];


   
$connect = mysqli_connect($servername, $username, $password, $dbname);

console.log($connect);

if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    die();
}

mysqli_set_charset($connect, 'utf8');

        $sql = "select * from user";
       
        $result = $connect ->query($sql);
        
        $return_arr = array();

        if($result = mysqli_query($connect, $sql))  {
            while($row = mysqli_fetch_assoc($result)) {
                $row_array['id'] = $row['id'];
                $row_array['username'] = $row['username'];
                $row_array['firstname'] = $row['firstname'];
                $row_array['lastname'] = $row['lastname'];
                $row_array['municipality'] = $row['municipality'];
                $row_array['landscape'] = $row['landscape'];

                array_push($return_arr, $row_array);
            }
        }    
        mysqli_close($connect);
        echo json_encode($return_arr);

  
?>