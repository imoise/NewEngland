/*-----Connecticut Quiz Begin-----*/
	//Instantiate variable messageCT to display whether answer is correct or not
	var messageCT;
	//Instantiate variable messageColoredCT to store the the message from messageCT once colored
	var messageColoredCT;
	
	//Opens CT quiz in a new window
	function ctFunction(){ 
		var myWindow=window.open("CT_Quiz","","width=500 px,height=400 px"); 
	}
	//Checks answer for CT Quiz question 1 and alerts user whether right or wrong 
	function ctAnswer1(){
		//If user choses answer 3 show correct
		if (document.getElementById('name3').checked == true){
			//Store string saying correct in "messageCT"
			messageCT = "Correct!";
			//Add font color to "messageCT" and store it in "messageColoredCT"
			messageColoredCT = messageCT.fontcolor("rgb(0,100,0)");
			//Add to div in CT Quiz the string in messageColoredCT
			document.getElementById('ctNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			//Add to div in CT Quiz, a green background color
			document.getElementById('ctNotice1').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in CT Quiz a transition for 2 seconds
			document.getElementById("ctNotice1").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageCT"
			messageCT = "Incorrect!";
			//Add font color to "messageCT" and store it in "messageColoredCT"
			messageColoredCT = messageCT.fontcolor("rgb(255,0,0)");
			//Add to div in CT Quiz the string in messageColoredCT
			document.getElementById('ctNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			//Add to div in CT Quiz, a red background color
			document.getElementById('ctNotice1').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in CT Quiz a transition for 2 seconds
			document.getElementById("ctNotice1").style.transition = "all 2s";
		}	
	}
	
	//Checks answer for CT Quiz question 3 and alerts user whether right or wrong
	function ctAnswer2(){
		//If user choses answer 1 show correct
		if (document.getElementById('year1').checked == true){
			//Store string saying correct in "messageCT"
			messageCT = "Correct!";
			//Add font color to "messageCT" and store it in "messageColoredCT"
			messageColoredCT = messageCT.fontcolor("rgb(0,100,0)");
			//Add to div in CT Quiz the string in messageColoredCT
			document.getElementById('ctNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			//Add to div in CT Quiz, a green background color
			document.getElementById('ctNotice2').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in CT Quiz a transition for 2 seconds
			document.getElementById("ctNotice2").style.transition = "all 2s";
		}
		//If user choses anything else show incorrect
		else {
			//Store string saying incorrect in "messageCT"
			messageCT = "Incorrect!";
			//Add font color to "messageCT" and store it in "messageColoredCT"
			messageColoredCT = messageCT.fontcolor("rgb(255,0,0)");
			//Add to div in CT Quiz the string in messageColoredCT
			document.getElementById('ctNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			//Add to div in CT Quiz, a red background color
			document.getElementById('ctNotice2').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in CT Quiz a transition for 2 seconds
			document.getElementById("ctNotice2").style.transition = "all 2s";
		}	
	}
	
	//Checks answer for CT Quiz question 3 and alerts user whether right or wrong
	function ctAnswer3(){
		//If user choses answer 1 show correct
		if (document.getElementById('bird1').checked == true){
			//Store string saying correct in "messageCT"
			messageCT = "Correct!";
			//Add font color to "messageCT" and store it in "messageColoredCT"
			messageColoredCT = messageCT.fontcolor("rgb(0,100,0)");
			//Add to div in CT Quiz the string in messageColoredCT
			document.getElementById('ctNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			//Add to div in CT Quiz, a green background color
			document.getElementById('ctNotice3').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in CT Quiz a transition for 2 seconds
			document.getElementById("ctNotice3").style.transition = "all 2s";
		}
		else {
			//Store string saying incorrect in "messageCT"
			messageCT = "Incorrect!";
			//Add font color to "messageCT" and store it in "messageColoredCT"
			messageColoredCT = messageCT.fontcolor("rgb(255,0,0)");
			//Add to div in CT Quiz the string in messageColoredCT
			document.getElementById('ctNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			//Add to div in CT Quiz, a red background color
			document.getElementById('ctNotice3').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in CT Quiz a transition for 2 seconds
			document.getElementById("ctNotice1").style.transition = "all 2s";
		}	
	}
/*-----Connecticut Quiz End-----*/


/*-----Massachusetts Quiz Begin-----*/
	//Instantiate variable messageMA to display whether answer is correct or not
	var messageMA;
	//Instantiate variable messageColoredMA to store the the message from messageMA once colored
	var messageColoredMA;
	function maFunction(){ 
		//Opens MA quiz in a new window
		var myWindow=window.open("MA_Quiz","","width=500 px,height=400 px"); 
		
	}
	function maAnswer1(){
		//If user choses answer 2 show correct
		if (document.getElementById('insect2').checked == true){
			//Store string saying correct in "messageMA"
			messageMA = "Correct!";
			//Add font color to "messageMA" and store it in "messageColoredMA"
			messageColoredMA = messageMA.fontcolor("rgb(0,100,0)");
			//Add to div in MA Quiz the string in messageColoredMA
			document.getElementById('maNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			//Add to div in MA Quiz, a green background color
			document.getElementById('maNotice1').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in MA Quiz a transition for 2 seconds
			document.getElementById("maNotice1").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageMA"
			messageMA = "Incorrect!";
			//Add font color to "messageMA" and store it in "messageColoredMA"
			messageColoredMA = messageMA.fontcolor("rgb(255,0,0)");
			//Add to div in MA Quiz the string in messageColoredMA
			document.getElementById('maNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			//Add to div in MA Quiz, a red background color
			document.getElementById('maNotice1').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in MA Quiz a transition for 2 seconds
			document.getElementById("maNotice1").style.transition = "all 2s";
		}	
	}
	
	function maAnswer2(){
		//If user choses answer 2 show correct
		if (document.getElementById('president2').checked == true){
			//Store string saying correct in "messageMA"
			messageMA = "Correct!";
			//Add font color to "messageMA" and store it in "messageColoredMA"
			messageColoredMA = messageMA.fontcolor("rgb(0,100,0)");
			//Add to div in MA Quiz the string in messageColoredMA
			document.getElementById('maNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			//Add to div in MA Quiz, a green background color
			document.getElementById('maNotice2').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in MA Quiz a transition for 2 seconds
			document.getElementById("maNotice2").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageMA"
			messageMA = "Incorrect!";
			//Add font color to "messageMA" and store it in "messageColoredMA"
			messageColoredMA = messageMA.fontcolor("rgb(255,0,0)");
			//Add to div in MA Quiz the string in messageColoredMA
			document.getElementById('maNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			//Add to div in MA Quiz, a red background color
			document.getElementById('maNotice2').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in MA Quiz a transition for 2 seconds
			document.getElementById("maNotice2").style.transition = "all 2s";
		}	
	}
	
	function maAnswer3(){
		//If user choses answer 2 show correct
		if (document.getElementById('nickname2').checked == true){
			//Store string saying correct in "messageMA"
			messageMA = "Correct!";
			//Add font color to "messageMA" and store it in "messageColoredMA"
			messageColoredMA = messageMA.fontcolor("rgb(0,100,0)");
			//Add to div in MA Quiz the string in messageColoredMA
			document.getElementById('maNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			//Add to div in MA Quiz, a green background color
			document.getElementById('maNotice3').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in MA Quiz a transition for 2 seconds
			document.getElementById("maNotice3").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageMA"
			messageMA = "Incorrect!"
			//Add font color to "messageMA" and store it in "messageColoredMA"
			messageColoredMA = messageMA.fontcolor("rgb(255,0,0)");
			//Add to div in MA Quiz the string in messageColoredMA
			document.getElementById('maNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			//Add to div in MA Quiz, a red background color
			document.getElementById('maNotice3').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in MA Quiz a transition for 2 seconds
			document.getElementById("maNotice3").style.transition = "all 2s";
		}	
	}
/*-----Massachusetts Quiz End-----*/


/*-----New Hampshire Quiz Begin-----*/
	//Instantiate variable messageNH to display whether answer is correct or not
	var messageNH;
	//Instantiate variable messageColoredNH to store the the message from messageMA once colored
	var messageColoredNH;
	function nhFunction(){ 
		//Opens NH quiz in a new window
		var myWindow=window.open("NH_Quiz","","width=500 px,height=400 px"); 
		
	}
	function nhAnswer1(){
		//If user choses answer 1 show correct
		if (document.getElementById('fruit1').checked == true){
			//Store string saying correct in "messageNH"
			messageNH = "Correct!";
			//Add font color to "messageNH" and store it in "messageColoredNH"
			messageColoredNH = messageNH.fontcolor("rgb(0,100,0)");
			//Add to div in NH Quiz the string in messageColoredNH
			document.getElementById('nhNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			//Add to div in NH Quiz, a green background color
			document.getElementById('nhNotice1').style.backgroundColor = "rgb(127,255,0)";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageNH"
			messageNH= "Incorrect!"
			//Add font color to "messageNH" and store it in "messageColoredNH"
			messageColoredNH = messageNH.fontcolor("rgb(255,0,0)");
			//Add to div in NH Quiz the string in messageColoredNH
			document.getElementById('nhNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			//Add to div in NH Quiz, a red background color
			document.getElementById('nhNotice1').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in NH Quiz a transition for 2 seconds
			document.getElementById("nhNotice1").style.transition = "all 2s";
		}	
	}
	
	function nhAnswer2(){
		//If user choses answer 3 show correct
		if (document.getElementById('flower3').checked == true){
			//Store string saying correct in "messageNH"
			messageNH = "Correct!";
			//Add font color to "messageNH" and store it in "messageColoredNH"
			messageColoredNH = messageNH.fontcolor("rgb(0,100,0)");
			//Add to div in NH Quiz the string in messageColoredNH
			document.getElementById('nhNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			//Add to div in NH Quiz, a green background color
			document.getElementById('nhNotice2').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in NH Quiz a transition for 2 seconds
			document.getElementById("nhNotice2").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageNH"
			messageNH = "Incorrect!"
			//Add font color to "messageNH" and store it in "messageColoredNH"
			messageColoredNH = messageNH.fontcolor("rgb(255,0,0)");
			//Add to div in NH Quiz the string in messageColoredNH
			document.getElementById('nhNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			//Add to div in NH Quiz, a red background color
			document.getElementById('nhNotice2').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in NH Quiz a transition for 2 seconds
			document.getElementById("nhNotice2").style.transition = "all 2s";
		}	
	}
	
	function nhAnswer3(){
		//If user choses answer 1 show correct
		if (document.getElementById('bird1').checked == true){
			//Store string saying correct in "messageNH"
			messageNH = "Correct!";
			//Add font color to "messageNH" and store it in "messageColoredNH"
			messageColoredNH = messageNH.fontcolor("rgb(0,100,0)");
			//Add to div in NH Quiz the string in messageColoredNH
			document.getElementById('nhNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			//Add to div in NH Quiz, a green background color
			document.getElementById('nhNotice3').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in NH Quiz a transition for 2 seconds
			document.getElementById("nhNotice3").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying iincorrect in "messageNH"
			messageNH = "Incorrect!";
			//Add font color to "messageNH" and store it in "messageColoredNH"
			messageColoredNH = messageNH.fontcolor("rgb(255,0,0)");
			//Add to div in NH Quiz the string in messageColoredNH
			document.getElementById('nhNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			//Add to div in NH Quiz, a red background color
			document.getElementById('nhNotice3').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in NH Quiz a transition for 2 seconds
			document.getElementById("nhNotice3").style.transition = "all 2s";
		}	
	}
/*-----New Hampshire Quiz End-----*/

/*-----Maine Quiz Begin-----*/
	//Instantiate variable messageME to display whether answer is correct or not
	var messageME;
	//Instantiate variable messageColoredME to store the the message from messageMA once colored
	var messageColoredME;
	function meFunction(){
		//Opens ME quiz in a new window
		var myWindow=window.open("ME_Quiz","","width=500 px,height=400 px"); 
		
	}
	function meAnswer1(){
		//If user choses answer 1 show correct
		if (document.getElementById('capital1').checked == true){
			//Store string saying correct in "messageME"
			messageME = "Correct!";
			//Add font color to "messageME" and store it in "messageColoredME"
			messageColoredME = messageME.fontcolor("rgb(0,100,0)");
			//Add to div in ME Quiz the string in messageColoredME
			document.getElementById('meNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			//Add to div in ME Quiz, a green background color
			document.getElementById('meNotice1').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in ME Quiz a transition for 2 seconds
			document.getElementById("meNotice1").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageME"
			messageME = "Incorrect!";
			//Add font color to "messageME" and store it in "messageColoredME"
			messageColoredME = messageME.fontcolor("rgb(255,0,0)");
			//Add to div in ME Quiz the string in messageColoredME
			document.getElementById('meNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			//Add to div in ME Quiz, a red background color
			document.getElementById('meNotice1').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in ME Quiz a transition for 2 seconds
			document.getElementById("meNotice1").style.transition = "all 2s";
		}	
	}
	
	function meAnswer2(){
		//If user choses answer 2 show correct
		if (document.getElementById('animal2').checked == true){
			//Store string saying correct in "messageME"
			messageME = "Correct!";
			//Add font color to "messageME" and store it in "messageColoredME"
			messageColoredME = messageME.fontcolor("rgb(0,100,0)");
			//Add to div in ME Quiz the string in messageColoredME
			document.getElementById('meNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			//Add to div in ME Quiz, a green background color
			document.getElementById('meNotice2').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in ME Quiz a transition for 2 seconds
			document.getElementById("meNotice2").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageME"
			messageME = "Incorrect!";
			//Add font color to "messageME" and store it in "messageColoredME"
			messageColoredME = messageME.fontcolor("rgb(255,0,0)");
			//Add to div in ME Quiz the string in messageColoredME
			document.getElementById('meNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			//Add to div in ME Quiz, a red background color
			document.getElementById('meNotice2').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in ME Quiz a transition for 2 seconds
			document.getElementById("meNotice2").style.transition = "all 2s";
		}	
	}
	
	function meAnswer3(){
		//If user choses answer 2 show correct
		if (document.getElementById('tree2').checked == true){
			//Store string saying correct in "messageME"
			messageME = "Correct!";
			//Add font color to "messageME" and store it in "messageColoredME"
			messageColoredME = messageME.fontcolor("rgb(0,100,0)");
			//Add to div in ME Quiz the string in messageColoredME
			document.getElementById('meNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			//Add to div in ME Quiz, a green background color
			document.getElementById('meNotice3').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in ME Quiz a transition for 2 seconds
			document.getElementById("meNotice3").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageME"
			messageME = "Incorrect!";
			//Add font color to "messageME" and store it in "messageColoredME"
			messageColoredME = messageME.fontcolor("rgb(255,0,0)");
			//Add to div in ME Quiz the string in messageColoredME
			document.getElementById('meNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			//Add to div in ME Quiz, a red background color
			document.getElementById('meNotice3').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in ME Quiz a transition for 2 seconds
			document.getElementById("meNotice3").style.transition = "all 2s";
		}	
	}
/*-----Maine Quiz End-----*/


/*-----Rhode Island Quiz Begin-----*/
	//Instantiate variable messageRI to display whether answer is correct or not
	var messageRI;
	//Instantiate variable messageColoredRI to store the the message from messageMA once colored
	var messageColoredRI;
	function riFunction(){ 
		//Opens RI quiz in a new window
		var myWindow=window.open("RI_Quiz","","width=500 px,height=400 px"); 
		
	}
	function riAnswer1(){
		//If user choses answer 3 show correct
		if (document.getElementById('motto3').checked == true){
			//Store string saying correct in "messageRI"
			messageRI = "Correct!";
			//Add font color to "messageRI" and store it in "messageColoredRI"
			messageColoredRI = messageRI.fontcolor("rgb(0,100,0)");
			//Add to div in RI Quiz the string in messageColoredRI
			document.getElementById('riNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			//Add to div in RI Quiz, a green background color
			document.getElementById('riNotice1').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in RI Quiz a transition for 2 seconds
			document.getElementById("riNotice1").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageRI"
			messageRI = "Incorrect!"
			//Add font color to "messageRI" and store it in "messageColoredRI"
			messageColoredRI = messageRI.fontcolor("rgb(255,0,0)");
			//Add to div in RI Quiz the string in messageColoredRI
			document.getElementById('riNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			//Add to div in RI Quiz, a red background color
			document.getElementById('riNotice1').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in RI Quiz a transition for 2 seconds
			document.getElementById("riNotice1").style.transition = "all 2s";
		}	
	}
	
	function riAnswer2(){
		//If user choses answer 2 show correct
		if (document.getElementById('slogan2').checked == true){
			//Store string saying correct in "messageRI"
			messageRI = "Correct!";
			//Add font color to "messageRI" and store it in "messageColoredRI"
			messageColoredRI = messageRI.fontcolor("rgb(0,100,0)");
			//Add to div in RI Quiz the string in messageColoredRI
			document.getElementById('riNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			//Add to div in RI Quiz, a green background color
			document.getElementById('riNotice2').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in RI Quiz a transition for 2 seconds
			document.getElementById("riNotice2").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageRI"
			messageRI = "Incorrect!";
			//Add font color to "messageRI" and store it in "messageColoredRI"
			messageColoredRI = messageRI.fontcolor("rgb(255,0,0)");
			//Add to div in RI Quiz the string in messageColoredRI
			document.getElementById('riNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			//Add to div in RI Quiz, a red background color
			document.getElementById('riNotice2').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in RI Quiz a transition for 2 seconds
			document.getElementById("riNotice2").style.transition = "all 2s";
		}	
	}
	
	function riAnswer3(){
		//If user choses answer 3 show correct
		if (document.getElementById('drink3').checked == true){
			//Store string saying correct in "messageRI"
			messageRI = "Correct!";
			//Add font color to "messageRI" and store it in "messageColoredRI"
			messageColoredRI = messageRI.fontcolor("rgb(0,100,0)");
			//Add to div in RI Quiz the string in messageColoredRI
			document.getElementById('riNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			//Add to div in RI Quiz, a green background color
			document.getElementById('riNotice3').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in RI Quiz a transition for 2 seconds
			document.getElementById("riNotice3").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageRI"
			messageRI = "Incorrect!"
			//Add font color to "messageRI" and store it in "messageColoredRI"
			messageColoredRI = messageRI.fontcolor("rgb(255,0,0)");
			//Add to div in RI Quiz the string in messageColoredRI
			document.getElementById('riNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			//Add to div in RI Quiz, a red background color
			document.getElementById('riNotice3').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in RI Quiz a transition for 2 seconds
			document.getElementById("riNotice3").style.transition = "all 2s";
		}	
	}
/*-----Rhode Island Quiz End-----*/


/*-----Vermont Quiz Begin-----*/
	//Instantiate variable messageVT to display whether answer is correct or not
	var messageVT;
	//Instantiate variable messageColoredVT to store the the message from messageVT once colored
	var messageColoredVT;
	function vtFunction(){ 
		//Opens VT quiz in a new window
		var myWindow=window.open("VT_Quiz","","width=500 px,height=400 px"); 
		
	}
	function vtAnswer1(){
		//If user choses answer 1 show correct
		if (document.getElementById('rep1').checked == true){
			//Store string saying correct in "messageVT"
			messageVT = "Correct!";
			//Add font color to "messageVT" and store it in "messageColoredVT"
			messageColoredVT = messageVT.fontcolor("rgb(0,100,0)");
			//Add to div in VT Quiz the string in messageColoredVT
			document.getElementById('vtNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			//Add to div in VT Quiz, a green background color
			document.getElementById('vtNotice1').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in VT Quiz a transition for 2 seconds
			document.getElementById("vtNotice1").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying correct in "messageVT"
			messageVT = "Incorrect!";
			//Add font color to "messageVT" and store it in "messageColoredVT"
			messageColoredVT = messageVT.fontcolor("rgb(255,0,0)");
			//Add to div in VT Quiz the string in messageColoredVT
			document.getElementById('vtNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			//Add to div in VT Quiz, a red background color
			document.getElementById('vtNotice1').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in VT Quiz a transition for 2 seconds
			document.getElementById("vtNotice1").style.transition = "all 2s";
			
		}	
	}
	
	function vtAnswer2(){
		//If user choses answer 3 show correct
		if (document.getElementById('gem3').checked == true){
			//Store string saying correct in "messageVT"
			messageVT = "Correct!";
			//Add font color to "messageVT" and store it in "messageColoredVT"
			messageColoredVT = messageVT.fontcolor("rgb(0,100,0)");
			//Add to div in VT Quiz the string in messageColoredVT
			document.getElementById('vtNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			//Add to div in VT Quiz, a green background color
			document.getElementById('vtNotice2').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in VT Quiz a transition for 2 seconds
			document.getElementById("vtNotice2").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageVT"
			messageVT = "Incorrect!";
			//Add font color to "messageVT" and store it in "messageColoredVT"
			messageColoredVT = messageVT.fontcolor("rgb(255,0,0)");
			//Add to div in VT Quiz the string in messageColoredVT
			document.getElementById('vtNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			//Add to div in VT Quiz, a red background color
			document.getElementById('vtNotice2').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in VT Quiz a transition for 2 seconds
			document.getElementById("vtNotice2").style.transition = "all 2s";
		}	
	}
	
	function vtAnswer3(){
		//If user choses answer 2 show correct
		if (document.getElementById('song2').checked == true){
			//Store string saying correct in "messageVT"
			messageVT = "Correct!";
			//Add font color to "messageVT" and store it in "messageColoredVT"
			messageColoredVT = messageVT.fontcolor("rgb(0,100,0)");
			//Add to div in VT Quiz the string in messageColoredVT
			document.getElementById('vtNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			//Add to div in VT Quiz, a green background color
			document.getElementById('vtNotice3').style.backgroundColor = "rgb(127,255,0)";
			//Add to div in VT Quiz a transition for 2 seconds
			document.getElementById("vtNotice3").style.transition = "all 2s";
		}
		//If user selects anything else show incorrect
		else {
			//Store string saying incorrect in "messageVT"
			messageVT = "Incorrect!";
			//Add font color to "messageVT" and store it in "messageColoredVT"
			messageColoredVT = messageVT.fontcolor("rgb(255,0,0)");
			//Add to div in VT Quiz the string in messageColoredVT
			document.getElementById('vtNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			//Add to div in VT Quiz, a red background color
			document.getElementById('vtNotice3').style.backgroundColor = "rgb(220,20,60)";
			//Add to div in VT Quiz a transition for 2 seconds
			document.getElementById("vtNotice3").style.transition = "all 2s";
		}	
	}
/*-----Vermont Quiz End-----*/