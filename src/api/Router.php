<?php
$router = new Router;

$router->get('/some/route', function($request) {
    // The $request argument of the callback 
    // will contain information about the request
    return "Content";
});
// How POST requests will be defined
$router->post('/some/route', function($request) {
    // How to get data from request body
    $body = $request->getBody();
});

?>