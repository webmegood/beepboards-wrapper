<?php
$username="mediathr_peterc";
$password="DustyMartin04";
$database="mediathr_beepboards";
$servername="localhost";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

?> 