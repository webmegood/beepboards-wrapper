<?php

require("phpsqlajax_dbinfo.php");



if ($stmt = $conn->prepare("SELECT id, pincode FROM users_drivers WHERE email=?")) {

//$userEmail = "peter.cassidy@mediathrong.com";
//$userPincode = 5919;

$userEmail = $_POST['email'];
$userPincode = $_POST['pincode'];


 
    // Bind a variable to the parameter as a string. 
    $stmt->bind_param("s", $userEmail);
 
    // Execute the statement.
    $stmt->execute();
 
    // Get the variables from the query.
    $stmt->bind_result($id, $capturedPincode);
		
		
   while ($stmt->fetch()) {
				
			// Compare data
		 if ($capturedPincode == $userPincode) {
				//echo $id;
				echo "true";
			} else {
				echo "";
			}
				
    }

   /* free results */
   $stmt->free_result();
 
 
 
    // Close the prepared statement.
    $stmt->close();
 
}








$conn->close();
?>