<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type:application/json");

include("connect.php");

$sport = $[sport];

$sql = "SELECT * from advertisment where sportid = (SELECT id FROM `sports` WHERE sport = $sport AND county = $county)";
       
$result = $connect ->query($sql);
$return_arr = array();

if($result = mysqli_query($connect, $sql))  {
	while($row = mysqli_fetch_assoc($result)) {
		$row_array['title'] = $row['title'];
		$row_array['picture'] = $row['picture'];
		$row_array['price'] = $row['price'];
			array_push($return_arr, $row_array);
	}
}    
mysqli_close($connect);
echo json_encode($return_arr);
?>