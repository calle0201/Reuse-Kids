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
$title = $_POST['title'];
$text = $_POST['text'];
$price = $_POST['price'];
$size = $_POST['size'];
$sort = $_POST['sort'];
$picture = $_POST['picture'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$municipality = $_POST['municipality'];
$county = $_POST['county'];
$marketingpicture = $_POST['marketingpicture'];
$date = date("Y-m-d");


$connect = mysqli_connect($servername, $username, $password, $dbname);
 
if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    die();
}

mysqli_set_charset($connect, 'utf8');


if(!empty($compound) && !empty($title) && !empty($text) && !empty($price) && !empty($sort) && !empty($picture) && !empty($name) && !empty($email) && !empty($date)) 
{
        http_response_code(200);
        $compound =  mysqli_real_escape_string($connect, $_POST['compound']);
        $title =  mysqli_real_escape_string($connect,$_POST['title']);
        $text =  mysqli_real_escape_string($connect, $_POST['text']);
        $price =  mysqli_real_escape_string($connect, $_POST['price']);
        $size =  mysqli_real_escape_string($connect, $_POST['size']);
        $sort =  mysqli_real_escape_string($connect, $_POST['sort']);
        $picture =  mysqli_real_escape_string($connect, $_POST['picture']);
        $name =  mysqli_real_escape_string($connect, $_POST['name']);
        $email_ordinary =  mysqli_real_escape_string($connect, $_POST['email']);
        $phone =  mysqli_real_escape_string($connect, $_POST['phone']);
        $municipality =  mysqli_real_escape_string($connect, $_POST['municipality']);
        $county =  mysqli_real_escape_string($connect, $_POST['county']);
        $marketingpicture = mysqli_real_escape_string($connect, $_POST['marketingpicture']);
        $date = date("Y-m-d");
        $enddate = date("Y-m-d", strtotime($date . " +90 day"));

        $email = strtolower($email_ordinary);


        $sql = "INSERT INTO compoundadvertisment ( compoundid, title, text, price, size, sort, userid, picture, name, email, phone, date, enddate) VALUES ((select compoundid FROM compoundslogin WHERE compound='$compound'),'$title','$text','$price','$size','$sort',(select userid FROM compounduser WHERE email='$email'),'$picture','$name','$email','$phone', '$date','$enddate')";
    
        if($connect -> query($sql) === TRUE) {

                
                $sql = "SELECT id, picture FROM compoundadvertisment WHERE email='$email' order by id desc limit 1 ";
                             
                $result = mysqli_query($connect, $sql);

                if (mysqli_num_rows($result) > 0) {
                        while($row = mysqli_fetch_assoc($result)) {
                                $id= $row["id"];
                                $picture= $row["picture"];
                        }
                 

                        mkdir("./../static/media/$id/");
                     

                        $sql = "UPDATE advertisment SET picture = 'static/media/compoundsadvertisment/$id/$picture' WHERE id='$id'";

                       
                        $response = 1;
			echo json_encode($response);
        
                } else {
                        echo "There was an error uploading the file, please try again!";
                }
                    
                      
                                        
                $result = $connect ->query($sql);
                $return_arr = array();
                      
        } else {
                echo "Error: " .$sql . "<br>" . $connect-> error;
        }
        
        mysqli_close($connect);
} else {

       $response = 2;
	echo json_encode($response);
}

?>