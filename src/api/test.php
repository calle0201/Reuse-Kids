<?php
$content = $_POST['content'];
$response = array("success" => true, "message" => $content);

echo json_encode($response);

?>