<?php
/* Displays all error messages */
session_start();


header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Credentials: true");
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);


$email = $_POST['email'];
$registerPassword = $_POST['registerPassword'];

$servername = $_POST['host'];
$username = $_POST['user'];
$password = $_POST['password'];
$dbname = $_POST['database'];


/* Registration process, inserts user info into the database 
   and sends account confirmation email message
 */

// Set session variables to be used on profile.php page
$_SESSION['email'] = $_POST['email'];
$_SESSION['password'] = $_POST['registerPassword'];


$email = $mysqli->escape_string($_POST['email']);
$result = $mysqli->query("SELECT * FROM user WHERE email='$email'");

if ( $result->num_rows == 0 ){ // User doesn't exist
    $_SESSION['message'] = "User with that email doesn't exist!";
   // header("location: error.php");
}
else { // User exists
    $user = $result->fetch_assoc();

    if ( password_verify($_POST['registerPassword'], $user['password']) ) {
        
        $_SESSION['email'] = $user['email'];
       
        $_SESSION['active'] = $user['active'];
        
        // This is how we'll know the user is logged in
        $_SESSION['logged_in'] = true;

      //  header("location: profile.php");
    }
    else {
        $_SESSION['message'] = "You have entered wrong password, try again!";
      //  header("location: error.php");
    }
}


///Registrering


// Escape all $_POST variables to protect against SQL injections
$email = $mysqli->escape_string($_POST['email']);
$registerPassword = $mysqli->escape_string( password_hash($_POST['registerPassword'], PASSWORD_BCRYPT) );
$hash = $mysqli->escape_string( md5( rand(0,1000) ) );

// Check if user with that email already exists
//$result = $mysqli->query("SELECT * FROM users WHERE email='$email'") or die($mysqli->error);

// We know user email exists if the rows returned are more than 0
/*if ( $result->num_rows > 0 ) {
    
    $_SESSION['message'] = 'User with this email already exists!';
    header("location: error.php");
    
}
else { // Email doesn't already exist in a database, proceed...*/

    // active is 0 by DEFAULT (no need to include it here)
    $sql = "INSERT INTO users (email, password, hash) " 
            . "VALUES ('$email','$registerPassword', '$hash')";

    // Add user to the database
    if ( $mysqli->query($sql) ){

        $_SESSION['active'] = 0; //0 until user activates their account with verify.php
        $_SESSION['logged_in'] = true; // So we know the user has logged in
        $_SESSION['message'] =
                
                 "Confirmation link has been sent to $email, please verify
                 your account by clicking on the link in the message!";

        // Send registration confirmation link (verify.php)
        $to      = $email;
        $subject = 'Account Verification ( clevertechie.com )';
        $message_body = '
        Hello '.$first_name.',

        Thank you for signing up!

        Please click this link to activate your account:

        http://localhost/login-system/verify.php?email='.$email.'&hash='.$hash;  

        mail( $to, $subject, $message_body );

        header("location: profile.php"); 

    }

    else {
        $_SESSION['message'] = 'Registration failed!';
        header("location: error.php");
    }


?>