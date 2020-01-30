<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

include("connect.php");

$email = $_POST['loginEmail'];

$sql = "SELECT userid FROM `user` WHERE email='$email'";
       
$result = $connect ->query($sql);
$return_arr = array();

if($result = mysqli_query($connect, $sql))  {
	while($row = mysqli_fetch_assoc($result)) {
		$row_array['userid'] = $row['userid'];
		
			array_push($return_arr, $row_array);
	}
}    
mysqli_close($connect);
echo json_encode($return_arr);
?>