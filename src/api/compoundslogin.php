<?php


header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');   

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


$compound = $_POST['compound'];
$compoundPassword = $_POST['compoundPassword'];

$servername = $_POST['host'];
$username = $_POST['user'];
$password = $_POST['password'];
$dbname = $_POST['database'];

$connect = mysqli_connect($servername, $username, $password, $dbname);


if (mysqli_connect_errno()){
   // echo "Failed to connect to MySQL: " . mysqli_connect_error();
    die();
}

if (!mysqli_query($connect, "DROP TABLE IF EXISTS test") || !mysqli_query($connect, "CREATE TABLE test(id INT")) {
	//echo "Table creation failed: " . mysqli_error($connect);
}

if (!($stmt = mysqli_prepare($connect, "INSERT INTO test(id) VALUES (?)"))) {
	//echo "Prepare failed: " . mysqli_error($connect);
}	

mysqli_set_charset($connect, 'utf8');



if( !empty($_POST['compound']) && !empty($_POST['compoundPassword'])) 
{
	
	$compound =  mysqli_real_escape_string($connect, $_POST['compound']);
	
	$compoundPassword =  mysqli_real_escape_string($connect, $_POST['compoundPassword']);
	//$hashpassword = password_hash($compoundPassword, PASSWORD_BCRYPT);

	//$password = password_verify($password, row['password']);
	//echo $email;

	//echo $hashpassword;
	$sql = "SELECT compound FROM compoundslogin WHERE compound='$compound'";

	$result = mysqli_query($connect, $sql) or die("Query died: loginEmail");
	$num = mysqli_num_rows($result);


	if($num >0)  //användaren hittades
	{

	
		$sql = "SELECT password FROM compoundslogin WHERE compound='$compound'";
		//$sql = "SELECT email FROM user WHERE password='$password' AND email='$email'";
		//$sql = "SELECT password FROM password WHERE password='$password' AND userid = (SELECT userid FROM user WHERE email='$email') ";
	
		$return_arr = array();

		if($result = mysqli_query($connect, $sql))  {
			while($row = mysqli_fetch_assoc($result)) {
				$id = $row['id'];
				$db_password = $row['password'];
				array_push($return_arr, $row_array);
				
				//$_SESSION['userid'] = $id;
				//echo $_SESSION['userid'];
			}
		}  
		//echo $db_password;
		$ver_password = password_verify($compoundPassword, $db_password);
		//echo $ver_password;

			if ($ver_password == 1){
				$response = 1;
				echo json_encode($response);
			} else {
				$response = 2;
				echo json_encode($response);
			}


	}
	else {
		$message_1 = "The User Name you entered does not exists! Please try again.";
		$response = 3;
		echo json_encode($response);
	}
}

?>