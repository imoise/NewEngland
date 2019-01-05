var pattern = /[^0-9]/g;

/* Begin Noah Webster House Section*/
	var adultWebsterPrice = 0.00;
	var childWebsterPrice = 0.00;
	var totalWebsterPrice = 0.00; 
	function updateWebsterAdult(){
		adultWebsterPrice = document.getElementById('websterAdult').value * 7.00;
		document.getElementById('adultWebsterPrice').value =  adultWebsterPrice.toFixed(2);
		websterTotal();
	}

	function updateWebsterChild(){
		childWebsterPrice = document.getElementById('websterChild').value * 5.00;
		document.getElementById('childWebsterPrice').value =  childWebsterPrice.toFixed(2);
		websterTotal();
	}

	function websterTotal(){
		totalWebsterPrice = adultWebsterPrice + childWebsterPrice;
		document.getElementById('totalWebsterPrice').value = totalWebsterPrice.toFixed(2);
	}  
	function limitWebster(){
		var creditWebster = document.getElementById("websterCredit").value;
		document.getElementById("websterCredit").value = creditWebster.replace(pattern, '');	
	}
	function websterSubmission(){
	var websterCredit = document.getElementById("websterCredit").value;
		if ((websterCredit).length == 16){
			var websterConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
	
	
/* End Noah Webster House Section*/

/* Begin Sabbathday Lake Shaker Village Section*/
	var adultShakerPrice = 0.00;
	var childShakerPrice = 0.00;
	var totalShakerPrice = 0.00; 
	function updateShakerAdult(){
		adultShakerPrice = document.getElementById('shakerAdult').value * 10.00;
		document.getElementById('adultShakerPrice').value =  adultShakerPrice.toFixed(2);
		shakerTotal();
	}

	function updateShakerChild(){
		childShakerPrice = document.getElementById('shakerChild').value * 2.00;
		document.getElementById('childShakerPrice').value =  childShakerPrice.toFixed(2);
		shakerTotal();
	}

	function shakerTotal(){
		totalShakerPrice = adultShakerPrice + childShakerPrice;
		document.getElementById('totalShakerPrice').value = totalShakerPrice.toFixed(2);
	} 
	function limitShaker(){
		var creditShaker = document.getElementById("shakerCredit").value;
		document.getElementById("shakerCredit").value = creditShaker.replace(pattern, '');	
	}
	function shakerSubmission(){
		var shakerCredit = document.getElementById("shakerCredit").value;
		if ((shakerCredit).length == 16){
			var shakerConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
	
/* End Sabbathday Lake Shaker Village Section*/

/* Begin John Paul Jones House Section*/
	var adultJonesPrice = 0.00;
	var childJonesPrice = 0.00;
	var totalJonesPrice = 0.00; 
	function updateJonesAdult(){
		adultJonesPrice = document.getElementById('jonesAdult').value * 6.00;
		document.getElementById('adultJonesPrice').value =  adultJonesPrice.toFixed(2);
		jonesTotal();
	}

	function updateJonesChild(){
		childJonesPrice = document.getElementById('jonesChild').value * 0.00;
		document.getElementById('childJonesPrice').value =  childJonesPrice.toFixed(2);
		jonesTotal();
	}

	function jonesTotal(){
		totalJonesPrice = adultJonesPrice + childJonesPrice;
		document.getElementById('totalJonesPrice').value = totalJonesPrice.toFixed(2);
	}  
	function limitJones(){
		var creditJones = document.getElementById("jonesCredit").value;
		document.getElementById("jonesCredit").value = creditJones.replace(pattern, '');	
	}
	function jonesSubmission(){
		var jonesCredit = document.getElementById("jonesCredit").value;
		if ((jonesCredit).length == 16){
			var jonesConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
	
/* End John Paul Jones House Section*/
 
/* Begin Plimoth Plantation Section*/
	var adultPlimothPrice = 0.00;
	var childPlimothPrice = 0.00;
	var totalPlimothPrice = 0.00; 
	function updatePlimothAdult(){
		adultPlimothPrice = document.getElementById('plimothAdult').value * 28.00;
		document.getElementById('adultPlimothPrice').value =  adultPlimothPrice.toFixed(2);
		plimothTotal();
	}

	function updatePlimothChild(){
		childPlimothPrice = document.getElementById('plimothChild').value * 16.00;
		document.getElementById('childPlimothPrice').value =  childPlimothPrice.toFixed(2);
		plimothTotal();
	}

	function plimothTotal(){
		totalPlimothPrice = adultPlimothPrice + childPlimothPrice;
		document.getElementById('totalPlimothPrice').value = totalPlimothPrice.toFixed(2);
	}  
	function limitPlimoth(){
		var creditPlimoth = document.getElementById("plimothCredit").value;
		document.getElementById("plimothCredit").value = creditPlimoth.replace(pattern, '');	
	}
	function plimothSubmission(){
		var plimothCredit = document.getElementById("plimothCredit").value;
		if ((plimothCredit).length == 16){
			var plimothConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
	
/* End Plimoth Plantation Section*/

/* Begin Paul Revere House Section*/
	var adultReverePrice = 0.00;
	var childReverePrice = 0.00;
	var totalReverePrice = 0.00; 
	function updateRevereAdult(){
		adultReverePrice = document.getElementById('revereAdult').value * 5.00;
		document.getElementById('adultReverePrice').value =  adultReverePrice.toFixed(2);
		revereTotal();
	}

	function updateRevereChild(){
		childReverePrice = document.getElementById('revereChild').value * 1.00;
		document.getElementById('childReverePrice').value =  childReverePrice.toFixed(2);
		revereTotal();
	}

	function revereTotal(){
		totalReverePrice = adultReverePrice + childReverePrice;
		document.getElementById('totalReverePrice').value = totalReverePrice.toFixed(2);
	}  
	function limitRevere(){
		var creditRevere = document.getElementById("revereCredit").value;
		document.getElementById("revereCredit").value = creditRevere.replace(pattern, '');	
	}
	function revereSubmission(){
		var revereCredit = document.getElementById("revereCredit").value;
		if ((revereCredit).length == 16){
			var revereConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
/* End Paul Revere House Section*/

/* Begin Bennington Monument Section*/
	var adultBenningtonPrice = 0.00;
	var childBenningtonPrice = 0.00;
	var totalBenningtonPrice = 0.00; 
	function updateBenningtonAdult(){
		adultBenningtonPrice = document.getElementById('benningtonAdult').value * 5.00;
		document.getElementById('adultBenningtonPrice').value =  adultBenningtonPrice.toFixed(2);
		benningtonTotal();
	}

	function updateBenningtonChild(){
		childBenningtonPrice = document.getElementById('benningtonChild').value * 1.00;
		document.getElementById('childBenningtonPrice').value =  childBenningtonPrice.toFixed(2);
		benningtonTotal();
	}

	function benningtonTotal(){
		totalBenningtonPrice = adultBenningtonPrice + childBenningtonPrice;
		document.getElementById('totalBenningtonPrice').value = totalBenningtonPrice.toFixed(2);
	} 
	function limitBennington(){
		var creditBennington = document.getElementById("benningtonCredit").value;
		document.getElementById("benningtonCredit").value = creditBennington.replace(pattern, '');	
	}
	function benningtonSubmission(){
		var benningtonCredit = document.getElementById("benningtonCredit").value;
		if ((benningtonCredit).length == 16){
			var benningtonConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
/* End Bennington Monument Section*/

/* Begin Slater Mill Section*/
	var adultSlaterPrice = 0.00;
	var childSlaterPrice = 0.00;
	var totalSlaterPrice = 0.00; 
	function updateSlaterAdult(){
		adultSlaterPrice = document.getElementById('slaterAdult').value * 12.00;
		document.getElementById('adultSlaterPrice').value =  adultSlaterPrice.toFixed(2);
		slaterTotal();
	}
	
	function updateSlaterChild(){
		childSlaterPrice = document.getElementById('slaterChild').value * 6.50;
		document.getElementById('childSlaterPrice').value =  childSlaterPrice.toFixed(2);
		slaterTotal();
	}

	function slaterTotal(){
		totalSlaterPrice = adultSlaterPrice + childSlaterPrice;
		document.getElementById('totalSlaterPrice').value = totalSlaterPrice.toFixed(2);
	}  
	function limitSlater(){
		var creditSlater = document.getElementById("slaterCredit").value;
		document.getElementById("slaterCredit").value = creditSlater.replace(pattern, '');	
	}
	
	function slaterSubmission(){
		var slaterCredit = document.getElementById("slaterCredit").value;
		if ((slaterCredit).length == 16){
			var slaterConfirm = confirm("Are you sure you would like to proceed with your order?");
		}
	}
	
/* End Slater Mill Section*/
