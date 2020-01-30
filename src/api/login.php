<?php

session_start();

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');   

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


$email = $_POST['loginEmail'];
$loginPassword = $_POST['loginPassword'];

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



if( !empty($_POST['loginEmail']) && !empty($_POST['loginPassword'])) 
{
	
	$email =  mysqli_real_escape_string($connect, $_POST['loginEmail']);
	
	$loginPassword =  mysqli_real_escape_string($connect, $_POST['loginPassword']);
	//$hashpassword = password_hash($password, PASSWORD_BCRYPT);

	//$password = password_verify($password, row['password']);
	//echo $email;

	//echo $hashpassword;
	$sql = "SELECT email FROM user WHERE email='$email'";

	$result = mysqli_query($connect, $sql) or die("Query died: loginEmail");
	$num = mysqli_num_rows($result);


	if($num >0)  //användaren hittades
	{

	
		$sql = "SELECT password FROM user WHERE email='$email'";
		//$sql = "SELECT email FROM user WHERE password='$password' AND email='$email'";
		//$sql = "SELECT password FROM password WHERE password='$password' AND userid = (SELECT userid FROM user WHERE email='$email') ";
	
		$return_arr = array();

		if($result = mysqli_query($connect, $sql))  {
			while($row = mysqli_fetch_assoc($result)) {
				$id = $row['userid'];
				$db_password = $row['password'];
				array_push($return_arr, $row_array);
				
				//$_SESSION['userid'] = $id;
				//echo $_SESSION['userid'];
			}
		}  
		
		$ver_password = password_verify($loginPassword, $db_password);

			if ($ver_password == 1){
				//$_SESSION['userid'] = $id;

				//echo $_SESSION['userid'];
				//echo 'inloggad';

			
				$response = 1;
				echo json_encode($response);
			} else {
				//echo 'fel lösenord';
				$response = 2;
				echo json_encode($response);
			}

		//$_SESSION['auth']="yes";
	/*	$_SESSION['userid'] = $id;
		$sql = "INSERT INTO login (userid, loginTime) VALUES ('$_SESSION[]' ,NOW())";

		$response = 1;
		echo json_encode($response);

		$result3 = mysqli_query($connect, $sql) or die("Query died: insert");*/

	}
	else {
		$message_1 = "The User Name you entered does not exists! Please try again.";
		$response = 3;
		echo json_encode($response);
	}
}

?>