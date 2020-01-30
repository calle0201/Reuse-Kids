<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
include("connect.php");


        //$sql = "insert into advertisment (id, title, text, picture, price, userid, sportsid, date, municipality, landscape) values ('$row['id']','$row['title']',$row['price']' ) where userid="2";
       
        $sql = "select * from advertisment where userid='2'";
        $result = $connect ->query($sql);
        
        $return_arr = array();

        if($result = mysqli_query($connect, $sql))  {
            while($row = mysqli_fetch_assoc($result)) {
                $row_array['id'] = $row['id'];
                $row_array['title'] = $row['title'];
                $row_array['picture'] = $row['picture'];
                $row_array['price'] = $row['price'];
                array_push($return_arr, $row_array);
            }
        }    
        mysqli_close($connect);
        echo json_encode($return_arr);

  
?>