<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");


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


$email = $_POST['email'];
$file = $_FILES['file']['name'];
//$file = $_FILES['image']['name'];

$sql = "SELECT id FROM `advertisment` WHERE email='$email' order by id desc limit 1 ";
       
$result = $connect ->query($sql);
$return_arr = array();

if($result = mysqli_query($connect, $sql))  {
	while($row = mysqli_fetch_assoc($result)) {
		$id = $row['id'];
    }
    
    echo $id;
}    

if(isset($_FILES['image'])){
    $errors= array();
    $file_name = $_FILES['image']['name'];
    $file_size =$_FILES['image']['size'];
    $file_tmp =$_FILES['image']['tmp_name'];
    $file_type=$_FILES['image']['type'];
    $file_ext=strtolower(end(explode('.',$_FILES['image']['name'])));
    $expensions= array("jpeg","jpg","png", "mp3",
                       "acc", "wav", "3gpp", "mp4", "3gp", "m4a", "amr", "avi",
                      "flv", "gif");
  
    if(in_array($file_ext,$expensions)=== false){
       $errors[]="extension not allowed, please choose a JPEG or PNG file.";
       $response = 2;
       echo json_encode($response);
    }
  
    if($file_size > 2097152666655){
       $errors[]='File size must be excately 2 MB';
       $response = 3;
       echo json_encode($response);
    }
  
    if(empty($errors)==true){
        //$response = 'minskad bildstorlek';
        //json_encode($response);
        //echo compressImage($_FILES['image']['tmp_name'],$location,60);
        
        $image = new ImageResize('file_tmp');
        $image->scale(50);
$       $image->save('file_tmp')
        move_uploaded_file($file_tmp,"./../static/media/$id/".$file_name);
    }else{
       print_r($errors);
    }


  
}

function compressImage($source, $destination, $quality) {
    $info = getimagesize($source);

    if ($info['mime'] == 'image/jpeg') 
        $image = imagecreatefromjpeg($source);

    elseif ($info['mime'] == 'image/gif' )
        $image = imagecreatefromgif($source);    

    elseif ($info['mime'] == 'image/png' )
        $image = imagecreatefrompng($source);   
        
    $newimage = imagejpeg($image, $destination, $quality);    
    echo $newimage;
}

?>