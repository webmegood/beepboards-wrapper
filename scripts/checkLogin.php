<?php

require("phpsqlajax_dbinfo.php");



if ($stmt = $conn->prepare("SELECT id, password FROM users_drivers WHERE email=?")) {

//$userEmail = "peter.cassidy@mediathrong.com";
//$userPassword = "Freezer30";

$userEmail = $_POST['email'];
$userPassword = $_POST['password'];



 
    // Bind a variable to the parameter as a string. 
    $stmt->bind_param("s", $userEmail);
 
    // Execute the statement.
    $stmt->execute();
 
    // Get the variables from the query.
    $stmt->bind_result($id, $capturedPassword);
		
		
   while ($stmt->fetch()) {
				
			// Compare data
		 if ($capturedPassword == $userPassword) {
				//echo $id;
				echo "true";
			} else {
				echo "false";
			}
				
    }

   /* free results */
   $stmt->free_result();
 
 
 
    // Close the prepared statement.
    $stmt->close();
 
}








$conn->close();
?>