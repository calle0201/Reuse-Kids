<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
include("connect.php");


        //$sql = "insert into advertisment (id, title, text, picture, price, userid, sportsid, date, municipality, landscape) values ('$row['id']','$row['title']',$row['price']' ) where userid="2";
       
        $sql = "select * from advertisment";
        $result = $connect ->query($sql);
        
        $return_arr = array();

        if($result = mysqli_query($connect, $sql))  {
            while($row = mysqli_fetch_assoc($result)) {
                $row_array['id'] = $row['id'];
                $row_array['title'] = $row['title'];
                $row_array['text'] = $row['text'];
                $row_array['picture'] = $row['picture'];
                $row_array['size'] = $row['size'];
                $row_array['price'] = $row['price'];
                $row_array['name'] = $row['name'];
                $row_array['userid'] = $row['userid'];
                $row_array['sportid'] = $row['sportid'];
                $row_array['date'] = $row['date'];
                $row_array['municipality'] = $row['municipality'];
                $row_array[''] = $row['landscape'];

                array_push($return_arr, $row_array);
            }
        }    
        mysqli_close($connect);
        echo json_encode($return_arr);

  
?>