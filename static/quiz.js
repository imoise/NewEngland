/*-----Connecticut Quiz Begin-----*/
	var messageCT;
	var messageColoredCT;
	function ctFunction(){ 
		var myWindow=window.open("quizCT.html","","width=500 px,height=400 px"); 
	}
	function ctAnswer1(){
		if (document.getElementById('name3').checked == true){
			messageCT = "Correct!";
			messageColoredCT = messageCT.fontcolor("rgb(0,100,0)");
			document.getElementById('ctNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			document.getElementById('ctNotice1').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("ctNotice1").style.transition = "all 2s";
		}
		else {
			messageCT = "Incorrect!";
			messageColoredCT = messageCT.fontcolor("rgb(255,0,0)");
			document.getElementById('ctNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			document.getElementById('ctNotice1').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("ctNotice1").style.transition = "all 2s";
		}	
	}
	
	function ctAnswer2(){
		if (document.getElementById('year1').checked == true){
			messageCT = "Correct!";
			messageColoredCT = messageCT.fontcolor("rgb(0,100,0)");
			document.getElementById('ctNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			document.getElementById('ctNotice2').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("ctNotice2").style.transition = "all 2s";
		}
		else {
			messageCT = "Incorrect!";
			messageColoredCT = messageCT.fontcolor("rgb(255,0,0)");
			document.getElementById('ctNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			document.getElementById('ctNotice2').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("ctNotice2").style.transition = "all 2s";
		}	
	}
	
	function ctAnswer3(){
		if (document.getElementById('bird1').checked == true){
			messageCT = "Correct!";
			messageColoredCT = messageCT.fontcolor("rgb(0,100,0)");
			document.getElementById('ctNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			document.getElementById('ctNotice3').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("ctNotice3").style.transition = "all 2s";
		}
		else {
			messageCT = "Incorrect!";
			messageColoredCT = messageCT.fontcolor("rgb(255,0,0)");
			document.getElementById('ctNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredCT + "</h2>";
			document.getElementById('ctNotice3').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("ctNotice1").style.transition = "all 2s";
		}	
	}
/*-----Connecticut Quiz End-----*/


/*-----Massachusetts Quiz Begin-----*/
	var messageMA;
	var messageColoredMA;
	function maFunction(){ 
		var myWindow=window.open("quizMA.html","","width=500 px,height=400 px"); 
		
	}
	function maAnswer1(){
		if (document.getElementById('insect2').checked == true){
			messageMA = "Correct!";
			messageColoredMA = messageMA.fontcolor("rgb(0,100,0)");
			document.getElementById('maNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			document.getElementById('maNotice1').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("maNotice1").style.transition = "all 2s";
		}
		else {
			messageMA = "Incorrect!"
			messageColoredMA = messageMA.fontcolor("rgb(255,0,0)");
			document.getElementById('maNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			document.getElementById('maNotice1').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("maNotice1").style.transition = "all 2s";
		}	
	}
	
	function maAnswer2(){
		if (document.getElementById('president2').checked == true){
			messageMA = "Correct!";
			messageColoredMA = messageMA.fontcolor("rgb(0,100,0)");
			document.getElementById('maNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			document.getElementById('maNotice2').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("maNotice2").style.transition = "all 2s";
		}
		else {
			messageMA = "Incorrect!"
			messageColoredMA = messageMA.fontcolor("rgb(255,0,0)");
			document.getElementById('maNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			document.getElementById('maNotice2').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("maNotice2").style.transition = "all 2s";
		}	
	}
	
	function maAnswer3(){
		if (document.getElementById('nickname2').checked == true){
			messageMA = "Correct!";
			messageColoredMA = messageMA.fontcolor("rgb(0,100,0)");
			document.getElementById('maNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			document.getElementById('maNotice3').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("maNotice3").style.transition = "all 2s";
		}
		else {
			messageMA = "Incorrect!"
			messageColoredMA = messageMA.fontcolor("rgb(255,0,0)");
			document.getElementById('maNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredMA + "</h2>";
			document.getElementById('maNotice3').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("maNotice3").style.transition = "all 2s";
		}	
	}
/*-----Massachusetts Quiz End-----*/


/*-----New Hampshire Quiz Begin-----*/
	var messageNH;
	var messageColoredNH;
	function nhFunction(){ 
		var myWindow=window.open("quizNH.html","","width=500 px,height=400 px"); 
		
	}
	function nhAnswer1(){
		if (document.getElementById('fruit1').checked == true){
			messageNH = "Correct!";
			messageColoredNH = messageNH.fontcolor("rgb(0,100,0)");
			document.getElementById('nhNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			document.getElementById('nhNotice1').style.backgroundColor = "rgb(127,255,0)";
		}
		else {
			messageNH= "Incorrect!"
			messageColoredNH = messageNH.fontcolor("rgb(255,0,0)");
			document.getElementById('nhNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			document.getElementById('nhNotice1').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("nhNotice1").style.transition = "all 2s";
		}	
	}
	
	function nhAnswer2(){
		if (document.getElementById('flower3').checked == true){
			messageNH = "Correct!";
			messageColoredNH = messageNH.fontcolor("rgb(0,100,0)");
			document.getElementById('nhNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			document.getElementById('nhNotice2').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("nhNotice2").style.transition = "all 2s";
		}
		else {
			messageNH = "Incorrect!"
			messageColoredNH = messageNH.fontcolor("rgb(255,0,0)");
			document.getElementById('nhNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			document.getElementById('nhNotice2').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("nhNotice2").style.transition = "all 2s";
		}	
	}
	
	function nhAnswer3(){
		if (document.getElementById('bird1').checked == true){
			messageNH = "Correct!";
			messageColoredNH = messageNH.fontcolor("rgb(0,100,0)");
			document.getElementById('nhNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			document.getElementById('nhNotice3').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("nhNotice3").style.transition = "all 2s";
		}
		else {
			messageNH = "Incorrect!"
			messageColoredNH = messageNH.fontcolor("rgb(255,0,0)");
			document.getElementById('nhNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredNH + "</h2>";
			document.getElementById('nhNotice3').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("nhNotice3").style.transition = "all 2s";
		}	
	}
/*-----New Hampshire Quiz End-----*/

/*-----Maine Quiz Begin-----*/
	var messageME;
	var messageColoredME;
	function meFunction(){ 
		var myWindow=window.open("quizME.html","","width=500 px,height=400 px"); 
		
	}
	function meAnswer1(){
		if (document.getElementById('capital1').checked == true){
			messageME = "Correct!";
			messageColoredME = messageME.fontcolor("rgb(0,100,0)");
			document.getElementById('meNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			document.getElementById('meNotice1').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("meNotice1").style.transition = "all 2s";
		}
		else {
			messageME = "Incorrect!"
			messageColoredME = messageME.fontcolor("rgb(255,0,0)");
			document.getElementById('meNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			document.getElementById('meNotice1').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("meNotice1").style.transition = "all 2s";
		}	
	}
	
	function meAnswer2(){
		if (document.getElementById('animal2').checked == true){
			messageME = "Correct!";
			messageColoredME = messageME.fontcolor("rgb(0,100,0)");
			document.getElementById('meNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			document.getElementById('meNotice2').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("meNotice2").style.transition = "all 2s";
		}
		else {
			messageME = "Incorrect!"
			messageColoredME = messageME.fontcolor("rgb(255,0,0)");
			document.getElementById('meNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			document.getElementById('meNotice2').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("meNotice2").style.transition = "all 2s";
		}	
	}
	
	function meAnswer3(){
		if (document.getElementById('tree2').checked == true){
			messageME = "Correct!";
			messageColoredME = messageME.fontcolor("rgb(0,100,0)");
			document.getElementById('meNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			document.getElementById('meNotice3').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("meNotice3").style.transition = "all 2s";
		}
		else {
			messageME = "Incorrect!"
			messageColoredME = messageME.fontcolor("rgb(255,0,0)");
			document.getElementById('meNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredME + "</h2>";
			document.getElementById('meNotice3').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("meNotice3").style.transition = "all 2s";
		}	
	}
/*-----Maine Quiz End-----*/


/*-----Rhode Island Quiz Begin-----*/
	var messageRI;
	var messageColoredRI;
	function riFunction(){ 
		var myWindow=window.open("quizRI.html","","width=500 px,height=400 px"); 
		
	}
	function riAnswer1(){
		if (document.getElementById('motto3').checked == true){
			messageRI = "Correct!";
			messageColoredRI = messageRI.fontcolor("rgb(0,100,0)");
			document.getElementById('riNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			document.getElementById('riNotice1').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("riNotice1").style.transition = "all 2s";
		}
		else {
			messageRI = "Incorrect!"
			messageColoredRI = messageRI.fontcolor("rgb(255,0,0)");
			document.getElementById('riNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			document.getElementById('riNotice1').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("riNotice1").style.transition = "all 2s";
		}	
	}
	
	function riAnswer2(){
		if (document.getElementById('slogan2').checked == true){
			messageRI = "Correct!";
			messageColoredRI = message.fontcolor("rgb(0,100,0)");
			document.getElementById('riNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			document.getElementById('riNotice2').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("riNotice2").style.transition = "all 2s";
		}
		else {
			messageRI = "Incorrect!"
			messageColoredRI = messageRI.fontcolor("rgb(255,0,0)");
			document.getElementById('riNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			document.getElementById('riNotice2').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("riNotice2").style.transition = "all 2s";
		}	
	}
	
	function riAnswer3(){
		if (document.getElementById('drink3').checked == true){
			messageRI = "Correct!";
			messageColoredRI = messageRI.fontcolor("rgb(0,100,0)");
			document.getElementById('riNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			document.getElementById('riNotice3').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("riNotice3").style.transition = "all 2s";
		}
		else {
			messageRI = "Incorrect!"
			messageColoredRI = messageRI.fontcolor("rgb(255,0,0)");
			document.getElementById('riNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredRI + "</h2>";
			document.getElementById('riNotice3').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("riNotice3").style.transition = "all 2s";
		}	
	}
/*-----Rhode Island Quiz End-----*/


/*-----Vermont Quiz Begin-----*/
	var messageVT;
	var messageColoredVT;
	function vtFunction(){ 
		var myWindow=window.open("quizVT.html","","width=500 px,height=400 px"); 
		
	}
	function vtAnswer1(){
		if (document.getElementById('rep1').checked == true){
			messageVT = "Correct!";
			messageColoredVT = messageVT.fontcolor("rgb(0,100,0)");
			document.getElementById('vtNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			document.getElementById('vtNotice1').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("vtNotice1").style.transition = "all 2s";
		}
		else {
			messageVT = "Incorrect!"
			messageColoredVT = messageVT.fontcolor("rgb(255,0,0)");
			document.getElementById('vtNotice1').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			document.getElementById('vtNotice1').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("vtNotice1").style.transition = "all 2s";
			
		}	
	}
	
	function vtAnswer2(){
		if (document.getElementById('gem3').checked == true){
			messageVT = "Correct!";
			messageColoredVT = messageVT.fontcolor("rgb(0,100,0)");
			document.getElementById('vtNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			document.getElementById('vtNotice2').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("vtNotice2").style.transition = "all 2s";
		}
		else {
			messageVT = "Incorrect!"
			messageColoredVT = messageVT.fontcolor("rgb(255,0,0)");
			document.getElementById('vtNotice2').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			document.getElementById('vtNotice2').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("vtNotice2").style.transition = "all 2s";
		}	
	}
	
	function vtAnswer3(){
		if (document.getElementById('song2').checked == true){
			messageVT = "Correct!";
			messageColoredVT = messageVT.fontcolor("rgb(0,100,0)");
			document.getElementById('vtNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			document.getElementById('vtNotice3').style.backgroundColor = "rgb(127,255,0)";
			document.getElementById("vtNotice3").style.transition = "all 2s";
		}
		else {
			messageVT = "Incorrect!"
			messageColoredVT = messageVT.fontcolor("rgb(255,0,0)");
			document.getElementById('vtNotice3').innerHTML = "<h2 style = 'text-align: center;'>" + messageColoredVT + "</h2>";
			document.getElementById('vtNotice3').style.backgroundColor = "rgb(220,20,60)";
			document.getElementById("vtNotice3").style.transition = "all 2s";
		}	
	}
/*-----Vermont Quiz End-----*/