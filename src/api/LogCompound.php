<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');


$rest_json = file_get_contents("php://input");
$_POST= json_decode($rest_json, true);

$post_obj = json_decode($post);

$servername = $_POST['host'];
$username = $_POST['user'];   
$password = $_POST['password'];
$dbname = $_POST['database'];
$compound = $_POST['compound'];
$log = $_POST['log'];



$connect = mysqli_connect($servername, $username, $password, $dbname);
 
if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    die();
}

mysqli_set_charset($connect, 'utf8');


if(!empty($compoundid) && !empty($log)) 
{
        http_response_code(200);
        $compoundid =  mysqli_real_escape_string($connect, $_POST['compoundid']);
        $log =  mysqli_real_escape_string($connect,$_POST['log']);
       


        $sql = "INSERT INTO compoundlog ( compoundid, log ) VALUES ((select compoundidid FROM compoundlogin WHERE compound='$compound'),'$log')";
    
        if($connect -> query($sql) === TRUE) {

                
                $sql = "SELECT id, picture FROM advertisment WHERE email='$email' order by id desc limit 1 ";
                             
                $result = mysqli_query($connect, $sql);

                if (mysqli_num_rows($result) > 0) {
                        while($row = mysqli_fetch_assoc($result)) {
                                $id= $row["compoundid"];
                                $picture= $row["log"];
                        }
                 

                        mkdir("./../static/media/compound/$id/");
                     

                        $sql = "UPDATE advertisment SET picture = 'static/media/$id/$picture' WHERE id='$id'";
                        //echo "Annonsen är nu upplagd!";
                       
                        $response = 1;
			echo json_encode($response);
                             //   echo "The file ".  basename ( $picture). " has been uploaded";
                        } else{
                                echo "There was an error uploading the file, please try again!";
                        }
                    
                      
                                        
                $result = $connect ->query($sql);
                $return_arr = array();
                      
        } else {
                echo "Error: " .$sql . "<br>" . $connect-> error;
        }
        
        mysqli_close($connect);
} else {
       //echo 'saknas uppgifter';
       $response = 2;
	echo json_encode($response);
}

?>