var loggedIn = 0;
var connected = 1; // ie. 1 = connected, 0 = not connected













$(document).ready(function() {	
	




clean(document); // clean the DOM of unwanted nodes/spaces via the 'clean' function

//var loggedIn = localforage.getItem("loggedIn");

if ((loggedIn == 1) && (connected == 1)) {
		$('#landing').fadeOut(0);
		$('#login-screen').hide();
		$('#pincode-screen').hide();
		$('#menu-fader').hide();
		$('#menu').fadeIn(50);
		$('.secondary').animate({"right":"-100vw"}, 50);
		$('#tracks').animate({"right":"0px"}, 150);

} else if (connected == 0) {
		$('#landing').fadeIn(100);
		$("#imageLoading").addClass("imageRotateHorizontal").fadeIn(1000).delay(4000).queue(function(){
				//$(this).removeClass("imageRotateHorizontal").dequeue().fadeIn(750);
				$('#landing').fadeOut(0);
				//$('#login-screen').delay(0).fadeIn(10);
				//$('#pincode-screen').delay(0).fadeIn(10);
				$('#tracksLogBtn').css("opacity", .2);
				$('#tracksSettingsBtn').css("opacity", .2);
				$('#menu-fader').show();
				$('#menu').show();
				$('.secondary').animate({"right":"-100vw"}, 20);
				$('#tracks').animate({"right":"0px"}, 150);
		});
						
} else {
		
		$('#menu-fader').hide();
		$('#landing').fadeIn(100);
		$("#imageLoading").addClass("imageRotateHorizontal").fadeIn(1000).delay(4000).queue(function(){
				//$(this).removeClass("imageRotateHorizontal").dequeue().fadeIn(750);
				$('#landing').fadeOut(0);
				$('#status').fadeOut(0);
				$('#login-screen').delay(0).fadeIn(10);
		});

}
	
});



// Toggle Authentication Screens - Login / Pincode

$("#show-pincode").click(function(){
		$('#login-screen').fadeOut(100);
		$('#pincode-screen').delay(100).fadeIn(100);
});

$("#show-login-temp").click(function(){
		resetPincode();
		$('.pincode_error').hide();
		$('.form_error').css('opacity', 0);
		$('#pincode-screen').fadeOut(100);
		$('#login-screen').delay(100).fadeIn(100);
});



// Clear Pincode

$("#clear-pincode").click(function(){
		resetPincode();
});




//Log Out

$("#logout").click(function(){
	localforage.setItem("loggedIn", null);
	localforage.setItem("emailIdentity", null);
	localforage.setItem("storedEmail", null);
	localforage.setItem("storedPassword", null);
	localforage.setItem("data", null);
	location.reload();
});






$("#takePicBtn").click(function(){
		capturePhoto();
});





$(document).ready(function() {
(function blink() { 
  $('.blink_me').fadeOut(400).fadeIn(300, blink); 
})();
});





$(document).ready(function(){
	
    $('#menu-tracks').click(function(){
				$('#menu-account').removeClass('current');
				$('#menu-jobs').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#tracks').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#map').hide();
				$('#go_back_to_tracks_log').hide(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
				$('#landing').hide();
    });
		
    $('#go_back_to_tracks').click(function(){
				$('#menu-account').removeClass('current');
				$('#menu-jobs').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#tracks').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#map').hide();
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
				$('#landing').hide();
    });
				
    $('#menu-account').click(function(){
				$('#menu-tracks').removeClass('current');
				$('#menu-jobs').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#account').show().delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#map').hide();
				$('#go_back_to_tracks_log').hide(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
				$('#landing').hide();
    });

    $('#menu-jobs').click(function(){
				$('#menu-tracks').removeClass('current');
				$('#menu-account').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#jobs').show().delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#map').hide();
				$('#go_back_to_tracks_log').hide(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
				$('#landing').hide();
    });

    $('#btn-photo').click(function(){
				$('#menu-tracks').removeClass('current');
				$('#menu-account').removeClass('current');
				$('.secondary').animate({"right":"-100vw"}, 50);
        $('#photo').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').hide(0);
				$('#go_back_to_tracks').hide(0);
				$('#landing').hide();
    });

});




// Main Buttons

$(document).ready(function(){
   
	  $('#tracksCurrentBtn').click(function(){
				$('#menu-tracks').addClass('current');
				$('#tracks').animate({"right":"-100vw"}, 50);
        $('#tracksCurrent').show();
				$('#tracksCurrent').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').delay(300).fadeIn(500);
				$('#go_back_to_tracks').delay(300).fadeIn(500);
				$('#landing').hide();				
    });

});


$(document).ready(function(){

	if ((loggedIn == 1) && (connected == 1)) { //only allow buttons to be active if there's a connection
    
		$('#tracksLogBtn').click(function(){
				$('#menu-tracks').addClass('current');
				$('#tracks').animate({"right":"-100vw"}, 50);
        $('#tracksLog').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').delay(300).fadeIn(500);
				$('#go_back_to_tracks').delay(300).fadeIn(500);
				$('#landing').hide();
    });
		
    $('#tracksSettingsBtn').click(function(){
				$('#menu-tracks').addClass('current');
				$('#tracks').animate({"right":"-100vw"}, 50);
        $('#tracksLog').delay(200).animate({"right":"0px"}, 150);
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').delay(300).fadeIn(500);
				$('#go_back_to_tracks').delay(300).fadeIn(500);
				$('#landing').hide();
    });
		
	}

});
		
		









//When clicking on active road icons

$(".mapUploaded").click(function(){
	$('.overlay').fadeIn(100).delay(1210).fadeOut(100);
	$('.spinner-loading').delay(100).fadeIn(10).delay(1200).fadeOut(100);
	$('.container').fadeOut(10);
	$('#map').fadeOut(0).delay(1200).fadeIn(50);
	$('#go_back_to_tracks').hide(0);
	$('#go_back_to_tracks_log').show(0);
});

$(document).ready(function(){
    $('#go_back_to_tracks_log').click(function(){
				$('#menu-tracks').addClass('current');
				$('#backgroundPanel').delay(1000).fadeIn(0);
				$('#btn-track-control').delay(300).fadeIn(500);
				$('#map').hide();
				$('#go_back_to_tracks_log').hide(0);
				$('#go_back_to_tracks').delay(300).fadeIn(500);
    });
});

			




$(document).ready(function(){
		
		

	var watchID;
	var geoLoc;


	// Get Updated Total Distance Travelled
	//var totalDistance;
	// Retrieve currently saved total distance
	if (localforage["totalDistance"]) {
	  var totalDistance = JSON.parse(localforage.getItem("totalDistance"));
		document.getElementById("totalDistance").textContent = totalDistance;
	} else {
	  var totalDistance = 0;
	}







		


	
});





var storedNames = "";



function showLocation(position) {
            

		
		var lat1 = position.coords.latitude;
    var lon1 = position.coords.longitude;
						


//get location name
						//var locationData = latitude;
						
						//compare with Melbourne
						var lat2 = -37.8136;
						var lon2 = 144.9631;
						
						
						
				//get distance from Melbourne		
				var radlat1 = Math.PI * lat1/180;
				var radlat2 = Math.PI * lat2/180;
				var radlon1 = Math.PI * lon1/180;
				var radlon2 = Math.PI * lon2/180;
				var theta = lon1-lon2;
				var radtheta = Math.PI * theta/180;
				var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
				dist = Math.acos(dist);
				dist = dist * 180/Math.PI;
				dist = dist * 60 * 1.1515;
				dist = dist * 1.609344; // convert to kms
				dist = (Math.round(dist*10))/10;


				
				//get bearing of location in relation to Melbourne
				function radians(n) {
					return n * (Math.PI / 180);
				}
				function degrees(n) {
					return n * (180 / Math.PI);
				}
				
					startLat = radians(lat1);
					startLong = radians(lon1);
					endLat = radians(lat2);
					endLong = radians(lon2);
				
					var dLong = endLong - startLong;
				
					var dPhi = Math.log(Math.tan(endLat/2.0+Math.PI/4.0)/Math.tan(startLat/2.0+Math.PI/4.0));
					if (Math.abs(dLong) > Math.PI){
						if (dLong > 0.0)
							 dLong = -(2.0 * Math.PI - dLong);
						else
							 dLong = (2.0 * Math.PI + dLong);
					}
				
					bearing = (degrees(Math.atan2(dLong, dPhi)) + 360.0) % 360.0;
					if (bearing < 11.25) {				
					direction = "S";
					} else if (bearing	< 33.75) {	
					direction = "SSW";
					} else if (bearing	< 56.25) {	
					direction = "SW";
					} else if (bearing	< 78.75) {	
					direction = "WSW";
					} else if (bearing	< 101.25) {	
					direction = "W";
					} else if (bearing	< 123.75) {	
					direction = "WNW";
					} else if (bearing	< 146.25) {	
					direction = "NW";
					} else if (bearing	< 168.75) {	
					direction = "NNW";
					} else if (bearing	< 191.25) {	
					direction = "N";
					} else if (bearing	< 213.75) {	
					direction = "NNE";
					} else if (bearing	< 236.25) {	
					direction = "NE";
					} else if (bearing	< 258.75) {	
					direction = "ENE";
					} else if (bearing	< 281.25) {	
					direction = "E";
					} else if (bearing	< 303.75) {	
					direction = "ESE";
					} else if (bearing	< 326.25) {	
					direction = "SE";
					} else if (bearing	< 348.75) {	
					direction = "SSE";
					} else if (bearing	< 360) {	
					direction = "S";
					} 
				
					
				//put distance and bearing together	
				var locationData = dist + "km " + direction  + " of Melb";
				//alert(locationData);
						
						//var timeStamp = Math.floor(Date.now() / 1000); //(is unix server time, but need offline...so use from GPS)
						var timeStamp = position.timestamp;
						
						
						
						if(storedNames) {
							var geoDataArray01 = storedNames;
							//alert(geoDataArray01);
							//alert("stored");
						} else {
							var geoDataArray01 = [];
							//alert("empty");
						}
						
						// Retrieve currently saved elapsed time
						elapsedTime = JSON.parse(localforage.getItem("activeTime"));



						
						var test = [timeStamp,locationData,lat1,lon1,elapsedTime];
						//geoDataArray01.unshift(test); //reverse order to have most recent entry showing first						
						geoDataArray01.push(test);
						//alert(test);
						//Save to Local Storage
						localforage.setItem("savedData", JSON.stringify(geoDataArray01));
						// Retrieve from Local Storage
						storedNames = JSON.parse(localforage.getItem("savedData"));
						



						
						
						//var watchCount = 1;
						//if(watchCount>=2) {	 // the 2nd time we use watchPosition is supposed to be more accurate than the 1st, so ignore 1st
							
							
							document.getElementById("current_location").textContent = locationData;
							//alert(geoDataArray01);
							
							//appendToTable(geoDataArray01);
							//watchCount++;
						//}
						
						
						
						
						prevlat = geoDataArray01[1][2];
						prevlon = geoDataArray01[1][3];


						
						//Calculate distance between 2 most recent points
						var newlat1 = Math.PI * lat1/180;
						var newlat2 = Math.PI * prevlat/180;
						var newlon1 = Math.PI * lon1/180;
						var newlon2 = Math.PI * prevlon/180;
						var theta = newlon1-newlon2;
						var radtheta = Math.PI * theta/180;
						var currentdist = Math.sin(newlat1) * Math.sin(newlat2) + Math.cos(newlat1) * Math.cos(newlat2) * Math.cos(radtheta);
						currentdist = Math.acos(currentdist);
						currentdist = currentdist * 180/Math.PI;
						currentdist = currentdist * 60 * 1.1515;
						currentdist = currentdist * 1.609344; // convert to kms
						currentdist = (Math.round(currentdist*10))/10;
						
						
					  // Retrieve currently saved total distance
						if (localforage["totalDistance"]) {
							var storedDistance = JSON.parse(localforage.getItem("totalDistance"));
							var totalDistance = (storedDistance + currentdist);
						} else {
							var totalDistance = currentdist;
						}
						totalDistance = Math.round( totalDistance * 10 ) / 10;						

						document.getElementById("totalDistance").textContent = totalDistance;
						//Save to Local Storage
						localforage.setItem("totalDistance", totalDistance);
						
						
						
	
	
					  // Retrieve currently saved elapsed time
						var storedElapsedTime = geoDataArray01[1][4];
												
						
						
						
						//elapsedHours = storedElapsedTime.getHours();
						//if (elapsedHours < 10) {
							//elapsedHours = "0" + elapsedHours;
						//}
						//elapsedMinutes = storedElapsedTime.getMinutes();
						//if (elapsedMinutes < 10) {
							//elapsedMinutes = "0" + elapsedMinutes;
						//}
						//elapsedSeconds = storedElapsedTime.getSeconds();
						//if (elapsedSeconds < 10) {
							//elapsedSeconds = "0" + elapsedSeconds;
						//}
						
						
						//document.getElementById("elapsedTime").textContent = elapsedHours + ":" + elapsedMinutes + ":" + elapsedSeconds;

						//Save to Local Storage
						localforage.setItem("elapsedTime", elapsedTime);
	
						
}






         function errorHandler(err) {
            if(err.code == 1) {
               alert("Error: Access is denied!");
            }
            else if( err.code == 2) {
               alert("Error: Position is unavailable!");
            }
						
				 }
						
			

			







	

	
	
	
	


	
$("#btn-start").click(function(){
	
	//change pause/start button classes
	$('.btn-start').fadeOut(0);
	$('.btn-pause').fadeIn(50);
	$('.status').hide();
	$('.status_blink').show();
	
	
	//Save active track to Local Storage
	localforage.setItem("trackActivity", JSON.stringify(1));
	
	//Set pause indicator to ensure checkLocation function starts
	localforage.setItem("stopLocationChecking", 1);
						
			
			
			
			




			
							var id;
							
							if(navigator.geolocation){
								
								
			
			
			
			

								
								
								 var options = {
									 
									 
									 //timeout: 10000,
									 enableHighAccuracy: true
									 //maximumAge: Infinity									 


									 //timeout:20000,
									 //desiredAccuracy: 10,
									 //stationaryRadius: 10,
									 //distanceFilter: 100,
									 //enableHighAccuracy: true,
									 //maximumAge: 0,
									 //interval: 10000 // <!-- poll for position every 30 secs 
									 //locationService: backgroundGeoLocation.service.ANDROID_FUSED_LOCATION,
									 //debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
									 //stopOnTerminate: true // <-- enable this to clear background location settings when the app terminates							 
									 
									 };
								
	

								//geoLoc = navigator.geolocation;
								//watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
								
	
	
	
	
	



function checkLocation(){

// Retrieve currently saved elapsed time
var locationCheckingStatus = JSON.parse(localforage.getItem("stopLocationChecking"));

if (locationCheckingStatus == 0) {
	} else {
    setTimeout(checkLocation, 5000); //check location every 30 seconds
		navigator.geolocation.getCurrentPosition(showLocation, errorHandler, options);
	}
}

checkLocation();	
	









} else {
								 alert("Sorry, browser does not support geolocation!");
							}
							
	
});






$("#btn-pause").click(function(){
	
	//change pause/start button classes
	$('.btn-pause').fadeOut(0);
	$('.btn-start').fadeIn(50);
	$('.status_blink').hide();
	$('.status').show();
	
	//Save active track to Local Storage
	localforage.setItem("trackActivity", JSON.stringify(0));
	//Set pause indicator to ensure checkLocation function stops
	localforage.setItem("stopLocationChecking", 0);

});




$("#btn_upload").click(function(){
	
	// Retrieve from Local Storage
	storedNames = JSON.parse(localforage.getItem("savedData"));
	$.ajax({
			type: "POST",
			//dataType: "json",
      cache: false,
			url: "http://www.mediathrong.com/beepboards/tracking/v1.0/scripts/upload_track_data.php",
			data: {data:storedNames},
      beforeSend: function() {
      	$('.overlay').show();
				$('.spinner-uploading').show();
      },
			success: function(data) {
				if (data == "done") {
					$('.overlay').hide();
					$('.spinner-uploading').hide();
				} else {
					$('.spinner-uploading').hide();
					$('.upload-error').hide();
				}
      }
	});
	
	clearAllSavedData();

});




$("#btn-clear").click(function(){
 clearAllSavedData();
});









function clearAllSavedData() {
	
		localforage.setItem("totalDistance", 0);
		localforage.setItem("activeTime", 0);
		localforage.setItem("savedData", 0);
		localforage.setItem("elapsedTime", 0);
		localforage.setItem("trackActivity", 0);
		//localforage.removeItem("totalDistance");
		document.getElementById("totalDistance").textContent = "";

}





//test connectivity


//go offline
document.addEventListener("offline", onOffline, false); 
function onOffline() {
	$('#yes-connectivity').hide();
	$('#no-connectivity').show();
}			


// go online
document.addEventListener("online", onOnline, false);
function onOnline() {
	$('#no-connectivity').hide();
	$('#yes-connectivity').show();
}				
				
			





function fetchfromMysqlDatabase() {
	
			var userid = storedUser;
			
                  $.ajax({
                    type: "GET",
                    dataType: "html",
                    url: "http://www.mediathrong.com/beepboards/scripts/getTrackLogs.php",
										data: {data:userid},
                    cache: false,
                    beforeSend: function() {
                       $('#res3').html('loading please wait...');
                    },
                    success: function(htmldata) {
                       $('#res3').html(htmldata);
                    }
                  });
                }
			












function clean(node)
{
  for(var n = 0; n < node.childNodes.length; n ++)
  {
    var child = node.childNodes[n];
    if
    (
      child.nodeType === 8 
      || 
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    )
    {
      node.removeChild(child);
      n --;
    }
    else if(child.nodeType === 1)
    {
      clean(child);
    }
  }
}







// Pincode Screen //

$("#pkd01").click(function(){
	pincodeFill(1);
});
$("#pkd02").click(function(){
	pincodeFill(2);
});
$("#pkd03").click(function(){
	pincodeFill(3);
});
$("#pkd04").click(function(){
	pincodeFill(4);
});
$("#pkd05").click(function(){
	pincodeFill(5);
});
$("#pkd06").click(function(){
	pincodeFill(6);
});
$("#pkd07").click(function(){
	pincodeFill(7);
});
$("#pkd08").click(function(){
	pincodeFill(8);
});
$("#pkd09").click(function(){
	pincodeFill(9);
});
$("#pkd00").click(function(){
	pincodeFill(0);
});


function pincodeFill(digit) {
	
	if ( $("#pd01").is(".pdFill") ) {
		
		if ( $("#pd02").is(".pdFill") ) {
			
			if ( $("#pd03").is(".pdFill") ) {
				
				if ( $("#pd04").is(".pdFill") ) {
				} else {
					$('#pd04').addClass('pdFill');
					var digit4 = digit;



		
					// Use err as your first argument.
					localforage.getItem('pincode', function(err, value) {
						if (err) {
							console.error('Error');
						} else {
							pincodeTemp4 = value;
							pincodeTemp4 = ("" + pincodeTemp4 + digit4);
							// A full setItem() call with Promises.
							localforage.setItem('pincode', pincodeTemp4).then(function(value) {
								//alert(value + ' was set!');
								checkPinCredentials(pincodeTemp4);
							}, function(error) {
								console.error(error);
							});
						}
					});
				}
				
			} else {
				$('#pd03').addClass('pdFill');
				var digit3 = digit;
				// Use err as your first argument.
				localforage.getItem('pincode', function(err, value) {
					if (err) {
						console.error('Error');
					} else {
						pincodeTemp3 = value;
						pincodeTemp3 = ("" + pincodeTemp3 + digit3);
						// A full setItem() call with Promises.
						localforage.setItem('pincode', pincodeTemp3).then(function(value) {
							//alert(value + ' was set!');
						}, function(error) {
							console.error(error);
						});
					}
				});
			}
			
		} else {
			$('#pd02').addClass('pdFill');
			var digit2 = digit;			
			// Use err as your first argument.
			localforage.getItem('pincode', function(err, value) {
				if (err) {
					console.error('Error');
				} else {
					pincodeTemp2 = value;
					pincodeTemp2 = ("" + pincodeTemp2 + digit2);
					// A full setItem() call with Promises.
					localforage.setItem('pincode', pincodeTemp2).then(function(value) {
						//alert(value + ' was set!');
					}, function(error) {
						console.error(error);
					});
				}
			});
		}
		
	} else {
		$('#pd01').addClass('pdFill');
		var digit1 = digit;
		var pincodeTemp1 = digit1;
		// A full setItem() call with Promises.
		localforage.setItem('pincode', pincodeTemp1).then(function(value) {
			//alert(value + ' was set!');
		}, function(error) {
			console.error(error);
		});





	}
}








function checkPinCredentials(pincode) {
						

					//var emailString = localforage.getItem("emailIdentity");
					var emailString = "peter.cassidy@mediathrong.com";
			
			
			

                  $.ajax({
		   							type: "POST",
		   							dataType: "json",
                    url: "https://www.mediathrong.com/beepboards/tracking/v1.1/scripts/checkPin.php",
		   							data: "email="+emailString+"&pincode="+pincode,
                    cache: false,
                    beforeSend: function() {
											$('.overlay').show();
											$('.spinner-logging-in').show();
                    },
                    success: function(data) {
											$('.overlay').delay(1500).fadeOut(500);
											$('.spinner-logging-in').delay(1500).fadeOut(500);
											$('#pincode-screen').hide();
											$('#login-screen').fadeOut(0);
											$('#menu').fadeIn(50);
											$('.secondary').animate({"right":"-100vw"}, 50);
											$('#menu-account').removeClass('current');
											$('#menu-jobs').removeClass('current');
											$('.secondary').animate({"right":"-100vw"}, 50);
											$('#tracks').show().animate({"right":"0px"}, 150);
											$('#backgroundPanel').delay(1000).fadeIn(0);
											$('#map').hide();
											$('#go_back_to_tracks_log').hide(0);
											$('#btn-track-control').hide(0);
											$('#go_back_to_tracks').hide(0);
											$('#landing').hide();
                    },
										error: function() {
											$('.overlay').delay(1000).fadeOut(100);
											$('.spinner-logging-in').delay(1000).fadeOut(100);
											$('.pincode_error').show().css('margin-top', '20px');											

											resetPincode();

										}
                  });
                }






function resetPincode() {
	$('#pd01').removeClass('pdFill');
	$('#pd02').removeClass('pdFill');
	$('#pd03').removeClass('pdFill');
	$('#pd04').removeClass('pdFill');
	localforage.setItem('pincode', '').then(function(value) {
		}, function(error) {
			console.error(error);
	});
}




// Page Transition //
function pageTransition() {
	$('.overlay').fadeIn(100).stop(100).fadeOut(100);
}


