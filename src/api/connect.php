<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');
    //header('Access-Control-Allow-Origin: *');
   // header("Content-Type:application/json");
   
    $servername = $_POST['host'];
    $user = $_POST['user'];
    $password = $_POST['password'];
    $dbname = $_POST['database'];
    
           
        $connect = mysqli_connect($servername, $username, $password, $dbname);

     
        if (mysqli_connect_errno()){
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
            die();
        }
       
        mysqli_set_charset($connect, 'utf8');
        $sql = "select * from advertisment";
        $result = $connect->query($sql);
        

?>