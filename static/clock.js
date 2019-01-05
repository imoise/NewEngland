//Instantiate variable "zoneE" to store AM or Pm for eastern clock
var zoneE;
//Instantiate variable "zoneE" to store AM or Pm for pacific clock
var zoneP;

 function clock(){
/*Declares date function and variables for hours, minutes, and seconds  */ 
    var date = new Date();
        
    var hours = date.getHours();
        
    var minutes = date.getMinutes();
        
    var seconds = date.getSeconds();    
/*Makes a variable with the string PM to represent the time of day*/
    //Prevents clock from showing a 24 or 0 for military time
	if(hours == 0 || hours == 24)
    {
        hours = 12;
		 zoneE = "AM"; 
    }
	else if (hours < 12){
		 zoneE = "AM";
	}
	else if (hours == 12){
		zoneE ="PM";
	}
    else if(hours > 12){
		 hours = hours - 12;
		 zoneE ="PM";
	}  	
        /*If the number of minutes is less than 10, then the digit 0 will be put in front of the number of minutes*/
    minutes = (minutes < 10) ? "0" + minutes: minutes;
        /*If the number of seconds is less than 10, then the digit 0 will be put in front of the number of seconds*/
    seconds = (seconds < 10) ? "0" + seconds: seconds;
    
    var time =hours + ":" + minutes + ":" + seconds + "" + zoneE;
        /*Grabs the id of the div element and sets it equal to the time variable, so that the clock is displayed*/
    document.getElementById("etime").innerText = time;
        
    document.getElementById("etime").textContent = time;
    /*Sets a timer for the seconds on the clock*/
    setTimeout(clock, 1000);
    
}
/*Calls the function*/
clock();
        
   function pacific(){
       var date = new Date();
      /*Sets up the time difference for PST, 3 hours behind*/
       /*Declares hours, minutes, and seconds from computer using get methods*/
    var hours = date.getHours()-3; 
       
    var minutes = date.getMinutes();
       
    var seconds = date.getSeconds(); 
	if(hours < 0){
			 hours = hours + 12;
			 zoneP ="PM";
		} 
    else if(hours == 0 || hours == 24)
    {
        hours = 12;
		zoneP = "AM"; 
    }
	
	else if (hours < 12){
		 zoneP = "AM";
	}
	else if (hours == 12){
		zoneP ="PM";
	}
    else if(hours > 12){
		 hours = hours - 12;
		 zoneP ="PM";
	}
	 	
    
    
        /*If the number of minutes is less than 10, then the digit 0 will be put in front of the number of minutes*/
    minutes = (minutes < 10) ? "0" + minutes: minutes;
        /*If the number of seconds is less than 10, then the digit 0 will be put in front of the number of seconds*/
    seconds = (seconds < 10) ? "0" + seconds: seconds;
    /*Makes the time variable to concatenate the variables, separated by colons*/
    var time =hours + ":" + minutes + ":" + seconds + "" + zoneP;
       /*Sets a timer and calls the method*/
    setTimeout(pacific, 1000);
       /*Grabs the id of the div element and sets it equal to the time variable, so that the clock is displayed*/
    document.getElementById("ptime").innerText = time;
       
    document.getElementById("ptime").textContent = time;
        
   }
     /*Calls the method*/
    pacific();