<?php

$con = mysql_connect($host,$database,$username,$password) or die(mysql_error());

if (!$con) {
    echo "Unable to connect to DB: " . mysql_error();
    exit;
}

if (!mysql_select_db("DATABASENAME")) {
    echo "Unable to select mydbname: " . mysql_error();
    exit;
}

?>
