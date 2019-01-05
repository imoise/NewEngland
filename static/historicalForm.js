//Instantiate variable "pattern" containing a regular expression that only allows numbers between 0-9
var pattern = /[^0-9]/g;

/* Begin Noah Webster House Section*/
	//Instantiate variable "adultWebsterPrice" with 0.00
	var adultWebsterPrice = 0.00;
	//Instantiate variable "childWebsterPrice" with 0.00
	var childWebsterPrice = 0.00;
	//Instantiate variable "totalWebsterPrice" with 0.00
	var totalWebsterPrice = 0.00; 
	
	//Function that takes the number of adult tickets the user selects from the dropdown and outputs the price of all of them into an input box 
	function updateWebsterAdult(){
		//Retrieve number of adult tickets then multiply by adult ticket price then store in variable "adultWebsterPrice" to calculate adult ticket price
		adultWebsterPrice = document.getElementById('websterAdult').value * 7.00;
		//Take the calculated adult ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('adultWebsterPrice').value =  adultWebsterPrice.toFixed(2);
		//Call function to update new price total to account for the new adult ticket price
		websterTotal();
	}
	
	//Function that takes the number of child tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updateWebsterChild(){
		//Retrieve number of child tickets then multiply by child ticket price then store in variable "childWebsterPrice" to calculate child ticket price
		childWebsterPrice = document.getElementById('websterChild').value * 5.00;
		//Take the calculated child ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('childWebsterPrice').value =  childWebsterPrice.toFixed(2);
		//Call function to update new price total to account for the new child ticket price
		websterTotal();
	}
	
	//Function that takes the price of both child and adult tickets and outputs the price of all of them into an input box
	function websterTotal(){
		//Store in "totalWebsterPrice" the total price of adult and child tickets
		totalWebsterPrice = adultWebsterPrice + childWebsterPrice;
		//Take the calculated adult and child ticket price then add to it, 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('totalWebsterPrice').value = totalWebsterPrice.toFixed(2);
	}  
	//Function that checks what the user inputs in the credit card section and if it isn't a number between 0-9, erase it 
	function limitWebster(){
		//Store in "creditWebster" the credit card number the user entered
		var creditWebster = document.getElementById("websterCredit").value;
		//If there is anything that isn't a number between 0-9 in the credit card box, remove it
		document.getElementById("websterCredit").value = creditWebster.replace(pattern, '');	
	}
	
	//Function that checks if credist card input field is exactly 16 digits then sends confirmation window asing to confirm their order
	function websterSubmission(){
	var websterCredit = document.getElementById("websterCredit").value;
		//If credit card it equal to 16 digits, show confirmation window when user clicks submit to submit order
		if ((websterCredit).length == 16){
			var websterConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
	
	
/* End Noah Webster House Section*/

/* Begin Sabbathday Lake Shaker Village Section*/
	//Instantiate variable "adultShakerPrice" with 0.00
	var adultShakerPrice = 0.00;
	//Instantiate variable "childShakerPrice" with 0.00
	var childShakerPrice = 0.00;
	//Instantiate variable "totalWebsterPrice" with 0.00
	var totalShakerPrice = 0.00; 
	
	//Function that takes the number of adult tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updateShakerAdult(){
		//Retrieve number of adult tickets then multiply by adult ticket price then store in variable "adultShakerPrice" to calculate adult ticket price
		adultShakerPrice = document.getElementById('shakerAdult').value * 10.00;
		//Take the calculated adult ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('adultShakerPrice').value =  adultShakerPrice.toFixed(2);
		//Call function to update new price total to account for the new adult ticket price
		shakerTotal();
	}
	
	//Function that takes the number of child tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updateShakerChild(){
		//Retrieve number of child tickets then multiply by child ticket price then store in variable "childShakerPrice" to calculate child ticket price
		childShakerPrice = document.getElementById('shakerChild').value * 2.00;
		//Take the calculated child ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('childShakerPrice').value =  childShakerPrice.toFixed(2);
		//Call function to update new price total to account for the new child ticket price
		shakerTotal();
	}

	//Function that takes the price of both child and adult tickets and outputs the price of all of them into an input box
	function shakerTotal(){
		//Store in "totalShakerPrice" the total price of adult and child tickets
		totalShakerPrice = adultShakerPrice + childShakerPrice;
		//Take the calculated adult and child ticket price then add to it, 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('totalShakerPrice').value = totalShakerPrice.toFixed(2);
	} 
	//Function that checks what the user inputs in the credit card section and if it isn't a number between 0-9, erase it 
	function limitShaker(){
		//Store in "creditShaker" the credit card number the user entered
		var creditShaker = document.getElementById("shakerCredit").value;
		//If there is anything that isn't a number between 0-9 in the credit card box, remove it
		document.getElementById("shakerCredit").value = creditShaker.replace(pattern, '');	
	}
	
	//Function that checks if credist card input field is exactly 16 digits then sends confirmation window asing to confirm their order
	function shakerSubmission(){
		var shakerCredit = document.getElementById("shakerCredit").value;
		//If credit card it equal to 16 digits, show confirmation window when user clicks submit to submit order
		if ((shakerCredit).length == 16){
			var shakerConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
	
/* End Sabbathday Lake Shaker Village Section*/

/* Begin John Paul Jones House Section*/
	//Instantiate variable "adultJonesPrice" with 0.00
	var adultJonesPrice = 0.00;
	//Instantiate variable "childJonesPrice" with 0.00
	var childJonesPrice = 0.00;
	//Instantiate variable "totalJonesPrice" with 0.00
	var totalJonesPrice = 0.00; 
	
	//Function that takes the number of adult tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updateJonesAdult(){
		//Retrieve number of adult tickets then multiply by adult ticket price then store in variable "adultJonesPrice" to calculate adult ticket price
		adultJonesPrice = document.getElementById('jonesAdult').value * 6.00;
		//Take the calculated adult ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('adultJonesPrice').value =  adultJonesPrice.toFixed(2);
		//Call function to update new price total to account for the new adult ticket price
		jonesTotal();
	}

	//Function that takes the number of child tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updateJonesChild(){
		//Retrieve number of child tickets then multiply by child ticket price then store in variable "childJonesPrice" to calculate child ticket price
		childJonesPrice = document.getElementById('jonesChild').value * 0.00;
		//Take the calculated child ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('childJonesPrice').value =  childJonesPrice.toFixed(2);
		//Call function to update new price total to account for the new child ticket price
		jonesTotal();
	}

	//Function that takes the price of both child and adult tickets and outputs the price of all of them into an input box
	function jonesTotal(){
		//Store in "totalJonesPrice" the total price of adult and child tickets
		totalJonesPrice = adultJonesPrice + childJonesPrice;
		//Take the calculated adult and child ticket price then add to it, 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('totalJonesPrice').value = totalJonesPrice.toFixed(2);
	}  
	
	//Function that checks what the user inputs in the credit card section and if it isn't a number between 0-9, erase it 
	function limitJones(){
		//Store in "creditJones" the credit card number the user entered
		var creditJones = document.getElementById("jonesCredit").value;
		//If there is anything that isn't a number between 0-9 in the credit card box, remove it
		document.getElementById("jonesCredit").value = creditJones.replace(pattern, '');	
	}
	
	//Function that checks if credist card input field is exactly 16 digits then sends confirmation window asing to confirm their order
	function jonesSubmission(){
		var jonesCredit = document.getElementById("jonesCredit").value;
		//If credit card it equal to 16 digits, show confirmation window when user clicks submit to submit order
		if ((jonesCredit).length == 16){
			var jonesConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
	
/* End John Paul Jones House Section*/
 
/* Begin Plimoth Plantation Section*/
	//Instantiate variable "adultPlimothPrice" with 0.00
	var adultPlimothPrice = 0.00;
	//Instantiate variable "childPlimothPrice" with 0.00
	var childPlimothPrice = 0.00;
	//Instantiate variable "totalPlimothPrice" with 0.00
	var totalPlimothPrice = 0.00;
	
	//Function that takes the number of adult tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updatePlimothAdult(){
		//Retrieve number of adult tickets then multiply by adult ticket price then store in variable "adultPlimothPrice" to calculate adult ticket price
		adultPlimothPrice = document.getElementById('plimothAdult').value * 28.00;
		//Take the calculated adult ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('adultPlimothPrice').value =  adultPlimothPrice.toFixed(2);
		//Call function to update new price total to account for the new adult ticket price
		plimothTotal();
	}

	//Function that takes the number of child tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updatePlimothChild(){
		//Retrieve number of child tickets then multiply by child ticket price then store in variable "childPlimothPrice" to calculate child ticket price
		childPlimothPrice = document.getElementById('plimothChild').value * 16.00;
		//Take the calculated child ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('childPlimothPrice').value =  childPlimothPrice.toFixed(2);
		//Call function to update new price total to account for the new child ticket price
		plimothTotal();
	}

	//Function that takes the price of both child and adult tickets and outputs the price of all of them into an input box
	function plimothTotal(){
		//Store in "totalPlimothPrice" the total price of adult and child tickets
		totalPlimothPrice = adultPlimothPrice + childPlimothPrice;
		document.getElementById('totalPlimothPrice').value = totalPlimothPrice.toFixed(2);
	}  
	
	//Function that checks what the user inputs in the credit card section and if it isn't a number between 0-9, erase it 
	function limitPlimoth(){
		//Store in "creditPlimoth" the credit card number the user entered
		var creditPlimoth = document.getElementById("plimothCredit").value;
		//If there is anything that isn't a number between 0-9 in the credit card box, remove it
		document.getElementById("plimothCredit").value = creditPlimoth.replace(pattern, '');	
	}
	
	//Function that checks if credist card input field is exactly 16 digits then sends confirmation window asing to confirm their order
	function plimothSubmission(){
		var plimothCredit = document.getElementById("plimothCredit").value;
		//If credit card it equal to 16 digits, show confirmation window when user clicks submit to submit order
		if ((plimothCredit).length == 16){
			var plimothConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
	
/* End Plimoth Plantation Section*/

/* Begin Paul Revere House Section*/
	//Instantiate variable "adultReverePrice" with 0.00
	var adultReverePrice = 0.00;
	//Instantiate variable "childReverePrice" with 0.00
	var childReverePrice = 0.00;
	//Instantiate variable "totalReverePrice" with 0.00
	var totalReverePrice = 0.00; 
	
	//Function that takes the number of adult tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updateRevereAdult(){
		//Retrieve number of adult tickets then multiply by adult ticket price then store in variable "adultReverePrice" to calculate adult ticket price
		adultReverePrice = document.getElementById('revereAdult').value * 5.00;
		//Take the calculated adult ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('adultReverePrice').value =  adultReverePrice.toFixed(2);
		//Call function to update new price total to account for the new adult ticket price
		revereTotal();
	}

	//Function that takes the number of child tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updateRevereChild(){
		//Retrieve number of child tickets then multiply by child ticket price then store in variable "childReverePrice" to calculate child ticket price
		childReverePrice = document.getElementById('revereChild').value * 1.00;
		//Take the calculated child ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('childReverePrice').value =  childReverePrice.toFixed(2);
		//Call function to update new price total to account for the new child ticket price
		revereTotal();
	}

	//Function that takes the price of both child and adult tickets and outputs the price of all of them into an input box
	function revereTotal(){
		//Store in "totalReverePrice" the total price of adult and child tickets
		totalReverePrice = adultReverePrice + childReverePrice;
		//Take the calculated adult and child ticket price then add to it, 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('totalReverePrice').value = totalReverePrice.toFixed(2);
	}  
	
	//Function that checks what the user inputs in the credit card section and if it isn't a number between 0-9, erase it 
	function limitRevere(){
		//Store in "creditRevere" the credit card number the user entered
		var creditRevere = document.getElementById("revereCredit").value;
		//If there is anything that isn't a number between 0-9 in the credit card box, remove it
		document.getElementById("revereCredit").value = creditRevere.replace(pattern, '');	
	}
	
	//Function that checks if credist card input field is exactly 16 digits then sends confirmation window asing to confirm their order
	function revereSubmission(){
		var revereCredit = document.getElementById("revereCredit").value;
		//If credit card it equal to 16 digits, show confirmation window when user clicks submit to submit order
		if ((revereCredit).length == 16){
			var revereConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
/* End Paul Revere House Section*/

/* Begin Bennington Monument Section*/
	//Instantiate variable "adultBenningtonPrice" with 0.00
	var adultBenningtonPrice = 0.00;
	//Instantiate variable "childBenningtonPrice" with 0.00
	var childBenningtonPrice = 0.00;
	//Instantiate variable "totalBenningtonPrice" with 0.00
	var totalBenningtonPrice = 0.00; 
	
	//Function that takes the number of adult tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updateBenningtonAdult(){
		//Retrieve number of adult tickets then multiply by adult ticket price then store in variable "adultBenningPrice" to calculate adult ticket price
		adultBenningtonPrice = document.getElementById('benningtonAdult').value * 5.00;
		//Take the calculated adult ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('adultBenningtonPrice').value =  adultBenningtonPrice.toFixed(2);
		//Call function to update new price total to account for the new adult ticket price
		benningtonTotal();
	}

	//Function that takes the number of child tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updateBenningtonChild(){
		//Retrieve number of child tickets then multiply by child ticket price then store in variable "childBenningPrice" to calculate child ticket price
		childBenningtonPrice = document.getElementById('benningtonChild').value * 1.00;
		//Take the calculated child ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('childBenningtonPrice').value =  childBenningtonPrice.toFixed(2);
		//Call function to update new price total to account for the new child ticket price
		benningtonTotal();
	}

	//Function that takes the price of both child and adult tickets and outputs the price of all of them into an input box
	function benningtonTotal(){
		//Store in "totalBenningtonPrice" the total price of adult and child tickets
		totalBenningtonPrice = adultBenningtonPrice + childBenningtonPrice;
		//Take the calculated adult and child ticket price then add to it, 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('totalBenningtonPrice').value = totalBenningtonPrice.toFixed(2);
	} 
	
	//Function that checks what the user inputs in the credit card section and if it isn't a number between 0-9, erase it 
	function limitBennington(){
		//Store in "creditBennington" the credit card number the user entered
		var creditBennington = document.getElementById("benningtonCredit").value;
		//If there is anything that isn't a number between 0-9 in the credit card box, remove it
		document.getElementById("benningtonCredit").value = creditBennington.replace(pattern, '');	
	}
	
	//Function that checks if credist card input field is exactly 16 digits then sends confirmation window asking to confirm their order
	function benningtonSubmission(){
		var benningtonCredit = document.getElementById("benningtonCredit").value;
		//If credit card it equal to 16 digits, show confirmation window when user clicks submit to submit order
		if ((benningtonCredit).length == 16){
			var benningtonConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
/* End Bennington Monument Section*/

/* Begin Slater Mill Section*/
	//Instantiate variable "adultSlaterPrice" with 0.00
	var adultSlaterPrice = 0.00;
	//Instantiate variable "childSlaterPrice" with 0.00
	var childSlaterPrice = 0.00;
	//Instantiate variable "totalSlaterPrice" with 0.00
	var totalSlaterPrice = 0.00; 
	
	//Function that takes the number of adult tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updateSlaterAdult(){
		//Retrieve number of adult tickets then multiply by adult ticket price then store in variable "adultSlaterPrice" to calculate adult ticket price
		adultSlaterPrice = document.getElementById('slaterAdult').value * 12.00;
		//Take the calculated adult ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('adultSlaterPrice').value =  adultSlaterPrice.toFixed(2);
		//Call function to update new price total to account for the new adult ticket price
		slaterTotal();
	}
	
	//Function that takes the number of child tickets the user selects from the dropdown and outputs the price of all of them into an input box
	function updateSlaterChild(){
		//Retrieve number of child tickets then multiply by child ticket price then store in variable "childSlaterPrice" to calculate child ticket price
		childSlaterPrice = document.getElementById('slaterChild').value * 6.50;
		//Take the calculated child ticket price then add to 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('childSlaterPrice').value =  childSlaterPrice.toFixed(2);
		//Call function to update new price total to account for the new child ticket price
		slaterTotal();
	}

	//Function that takes the price of both child and adult tickets and outputs the price of all of them into an input box
	function slaterTotal(){
		//Store in "totalSlaterPrice" the total price of adult and child tickets
		totalSlaterPrice = adultSlaterPrice + childSlaterPrice;
		//Take the calculated adult and child ticket price then add to it, 0s to make price go up to the hundredths in it's decimal place then add to input box
		document.getElementById('totalSlaterPrice').value = totalSlaterPrice.toFixed(2);
	}  
	
	//Function that checks what the user inputs in the credit card section and if it isn't a number between 0-9, erase it 
	function limitSlater(){
		//Store in "creditSlater" the credit card number the user entered
		var creditSlater = document.getElementById("slaterCredit").value;
		//If there is anything that isn't a number between 0-9 in the credit card box, remove it
		document.getElementById("slaterCredit").value = creditSlater.replace(pattern, '');	
	}
	
	//Function that checks if credist card input field is exactly 16 digits then sends confirmation window asing to confirm their order
	function slaterSubmission(){
		var slaterCredit = document.getElementById("slaterCredit").value;
		//If credit card it equal to 16 digits, show confirmation window when user clicks submit to submit order
		if ((slaterCredit).length == 16){
			var slaterConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
	
/* End Slater Mill Section*/
