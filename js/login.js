emailPasswordIsValid = function(email,password) {

    var regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	authenticateEmailTest = regEmail.test(email);
	
	//password must have between 6 to 20 characters which contain at least one numeric digit, one uppercase, and one lowercase letter
	var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/;
	authenticatePasswordTest = regPassword.test(password);
	
  if (authenticateEmailTest === true){
		
			if (authenticatePasswordTest === true){		
	  		checkCredentials(email,password);
				//alert(email + " - " + password);
			}	else {
				
				$('.overlay').fadeIn(100).delay(1000).fadeOut(100);
				$('.spinner-logging-in').fadeIn(100).delay(1000).fadeOut(100);
				
				
				$('#add_err').css('opacity', 1);
				document.getElementById("add_err").textContent = "Please check your password";
			}	
		
	} else {
		
		$('.overlay').fadeIn(100).delay(1000).fadeOut(100);
		$('.spinner-logging-in').fadeIn(100).delay(1000).fadeOut(100);
		
		$('#add_err').css('opacity', 1);
	  document.getElementById("add_err").textContent = "Please check your email";
	}

};








checkCredentials = function(email,password) {

		  
			$.ajax({
		   type: "POST",
		   dataType: "json",
		   url: "https://www.mediathrong.com/beepboards/apps/wrapper/v1.0/scripts/checkLogin.php",
		   data: "email="+email+"&password="+password,
		   beforeSend:function() {
				 $('.overlay').show();
				 $('.spinner-logging-in').show();
		   },
		   success:function(data) {  
			    //alert(email + " - " + password);
					$('.overlay').hide();
					$('.spinner-logging-in').hide();
				  //alert("done");
					if(data==false) { //not correctly logged in
					
						$("#add_err").css('display', 'inline', 'important');
						$('#add_err').css('opacity', 1);
						$("#add_err").html("Your email & password do not match. Please try again.");

					} else {
						
						$('#authenticate').hide();
						$('#menu').delay(400).fadeIn(50);
						$('.secondary').animate({"right":"-100vw"}, 50);
						$('#tracks').delay(400).animate({"right":"0px"}, 150);
						localforage.setItem("loggedIn", 1);							
												
						// Save email for further usage (eg. alongside pin code)
						localforage.setItem('emailIdentity', email).then(function(value) {
							//alert(value + ' was set!');
						}, function(error) {
							console.error(error);
						});
						
					}
				 
		   }
				
		});
	
}







$(document).ready(function(){
	$("#add_err").css('display', 'block', 'important');
	$("#add_err").css('opacity', 0);
	$("#btn-login").click(function(){	
		 email=$("#txt-email").val();
		 password=$("#txt-password").val();
		 rememberMe=$("#chck-rememberme").val();
		 
		 //check if email has been entered correctly
		 emailPasswordIsValid(email,password);
		 return false;

		 
	});
});