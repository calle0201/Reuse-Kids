<?php
session_start(); 

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

/*$userid = $_SESSION['userid'];
echo $userid;
   
    if(!isset($_SESSION['userid'])) {
        echo 'Du är inte inloggad';
         $response = 1;
         echo json_encode($response);
     }
     else {  

 
    $userid =  $_SESSION['userid'];
    echo $userid;
   


    echo 'userid:' . $_SESSION['userid'];   */
    

       // header('Access-Control-Allow-Origin: *');
       // header('Content-type: application/json');

        $rest_json = file_get_contents("php://input");
        $_POST = json_decode($rest_json, true);

        $id = $_SESSION['userid'];

            //$sql = "insert into advertisment (id, title, text, picture, price, userid, sportsid, date, municipality, landscape) values ('$row['id']','$row['title']',$row['price']' ) where userid="2";
        
            $sql = "select * from advertisment where userid= '$id'";
            $result = $connect ->query($sql);
            
            $return_arr = array();

            if($result = mysqli_query($connect, $sql))  {
                while($row = mysqli_fetch_assoc($result)) {
                    $row_array['id'] = $row['id'];
                    $row_array['firstname'] = $row['firstname'];
                    $row_array['lastname'] = $row['lastname'];
                    $row_array['municipality'] = $row['municipality'];
                    $row_array['county'] = $row['county'];
                    $row_array['title'] = $row['title'];
                    $row_array['price'] = $row['price'];

                

                    array_push($return_arr, $row_array);
                }
            } 
            mysqli_close($connect);
            echo json_encode($return_arr);

    }
?>