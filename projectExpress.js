/*Begin Node Import Packages List*/
	//Import node module express and store it variable express
	var express = require('express');
	//Create express object stored in variable app 
	var app     = express();
	//Import node module path and store it variable path
	var path    = require('path');
	//Import node module mysql and store it variable mysql
	var mysql = require('mysql');
	//Import node module body-parser and store it variable bodyParser
	var bodyParser = require('body-parser');
/*End Node Import Packages List*/

/*Create global variable logUser to store the username user
*When the user logs into the website or register, their username will be stored here
*This allows us to avoid the use of cookies to keep track of who is logged in*/
var logUser = "";

//Allows parsing of form data that is retrieved
	app.use(bodyParser.urlencoded({ extended: false }));
//Allows all css, clientside javascript, and images stored in folder static to be connected to HTML files on server when the request them
	app.use('/static', express.static(path.join(__dirname, 'static')));

/*Create connection to Database*/
	var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "XXX,",
	  database: "WebDevs"
	});

//When a get request is called to http://localhost:3000/ it redirects user to login screen which is HTML file 'loginUser.html'
	app.get('/',function(req,res){
		res.sendFile(path.join(__dirname+'/loginUser.html'));
	});
//When a get request is called to http://localhost:3000/Registration it edirects user to Registration page which is HTML file "registerUser.html'
	app.get('/Registration',function(req,res){
		res.sendFile(path.join(__dirname+'/registerUser.html')); 
	});

/*-----Begin NAV Bar GETs-----*/
	//When a get request is called to http://localhost:3000/Home it redirects user to Home page which is HTML file 'index.html'
		app.get('/Home',function(req,res){
			res.sendFile(path.join(__dirname+'/index.html')); 
		})
	//When a get request is called to http://localhost:3000/Historical it redirects user to Historical page which is HTML file 'Historical.html'
		app.get('/Historical',function(req,res){
			res.sendFile(path.join(__dirname+'/Historical.html')); 
		})
	//When a get request is called to http://localhost:3000/Cultural it redirects user to Cultural page which is HTML file 'Cultural.html'
		app.get('/Cultural',function(req,res){
			res.sendFile(path.join(__dirname+'/Cultural.html')); 
		})
	//When a get request is called to http://localhost:3000/Sports it redirects user to Sports page which is HTML file 'Sports.html'
		app.get('/Sports',function(req,res){
			res.sendFile(path.join(__dirname+'/sports.html')); 
		})
	//When a get request is called to http://localhost:3000/Educational it redirects user to Educational page which is HTML file 'Educational.html'
		app.get('/Educational',function(req,res){
			res.sendFile(path.join(__dirname+'/Educational.html')); 
		})
	//When a get request is called to http://localhost:3000/Tourism it redirects user to Tourism page which is HTML file 'Tourism.html'
		app.get('/Tourism',function(req,res){
			res.sendFile(path.join(__dirname+'/Tourism.html')); 
		})
	//When a get request is called to http://localhost:3000/Contact it redirects user to Contact page which is HTML file 'Contact.html'
		app.get('/Contact',function(req,res){
			res.sendFile(path.join(__dirname+'/Contact.html')); 
		})
/*-----End NAV Bar GETs-----*/

/*-----Begin Educational Quiz GETs----*/
	//When a get request is called to http://localhost:3000/CT_Quiz it opens in a new window the CT Quiz page which is HTML file 'quizCT.html'
		app.get('/CT_Quiz',function(req,res){
			res.sendFile(path.join(__dirname+'/quizCT.html')); 
		})
	//When a get request is called to http://localhost:3000/MA_Quiz it opens in a new window the MA Quiz page which is HTML file 'quizMA.html'
		app.get('/MA_Quiz',function(req,res){
			res.sendFile(path.join(__dirname+'/quizMA.html')); 
		})
	//When a get request is called to http://localhost:3000/NH_Quiz it opens in a new window the NH Quiz page which is HTML file 'quizNH.html'
		app.get('/NH_Quiz',function(req,res){
			res.sendFile(path.join(__dirname+'/quizNH.html')); 
		})
	//When a get request is called to http://localhost:3000/CT_Quiz it opens in a new window the CT Quiz page which is HTML file 'quizCT.html'
		app.get('/CT_Quiz',function(req,res){
			res.sendFile(path.join(__dirname+'/quizCT.html')); 
		})
	//When a get request is called to http://localhost:3000/ME_Quiz it opens in a new window the ME Quiz page which is HTML file 'quizME.html'
		app.get('/ME_Quiz',function(req,res){
			res.sendFile(path.join(__dirname+'/quizME.html')); 
		})
	//When a get request is called to http://localhost:3000/RI_Quiz it opens in a new window the RI Quiz page which is HTML file 'quizRI.html'
		app.get('/RI_Quiz',function(req,res){
			res.sendFile(path.join(__dirname+'/quizRI.html')); 
		})
	//When a get request is called to http://localhost:3000/VT_Quiz it opens in a new window the VT Quiz page which is HTML file 'quizVT.html'
		app.get('/VT_Quiz',function(req,res){
			res.sendFile(path.join(__dirname+'/quizVT.html')); 
		})
/*-----End Educational Quiz GETs-----*/

//When a POST request is called to http://localhost:3000/signUser it sends the form data from the Sign in page to be compared against database table "Login" to see if the user is a registered user or not
	app.post('/signUser',function(req,res){
		//Stores username retrieved from sign in in variable "user" 
		var user = req.body.user;
		//Stores password retrieved from sign in in variable "paswordS"
		var passwordS = req.body.passwordS;
		//Query into database table Login and select all  cells from columns Username and Password that match variable "user" and "passwordS respectively, then store fields in variable results"
		con.query('SELECT Username, Password FROM Login WHERE Username= ?',[user, passwordS], function (error, results, fields){
		//If results has a length less than 1, redirect user to an error page stating incorrect username or password
		//results will have a length less than 1 if there is no matching user and password in the database
			if (results.length < 1){
				res.sendFile(path.join(__dirname+'/loginUserErr.html'))
			}
		//If results does have a matching username and password in the database,store the username in variable "logUser" to keep track of user, then redirect them to the Home  
			else if(results[0].Username == user && results[0].Password == passwordS) {
				logUser = req.body.user;
				res.sendFile(path.join(__dirname+'/index.html')); 
			}	
		//If the username or password don't match the ones in the Login then redirect to error page
			else{
				res.sendFile(path.join(__dirname+'/loginUserErr.html'))
				
			}
		})
		
	})
//When a POST request is called to http://localhost:3000/registerUser it sends the form data from the Register page to be compared against database table "Login" to see if the username and email is already used	
	app.post('/registerUser', function (req, res)
	{
		//Stores username retrieved from registeration page in variable "registerUser" 
		var registerUser = req.body.user;
		//Stores firstname retrieved from registeration page in variable "registerFirst" 
		var registerFirst = req.body.first;
		//Stores lastname retrieved from registeration page in variable "registerLast" 
		var registerLast = req.body.last;
		//Stores password retrieved from registeration page in variable "registerPassword" 
		var registerPassword = req.body.password1;
		//Stores email retrieved from registeration page in variable "registeremail" 
		var registerEmail = req.body.email;
			//Query into database table "Login"	and select all  cells from columns Username and email that match variable "registerUser" and "registerEmail respectively, then store fields in variable results"
			con.query('SELECT Username, email FROM Login WHERE Username = ? OR email = ?' ,[registerUser, registerEmail], function (error, results, fields){
				//If results has a length less than 1 that means the new user's username and email do not match one in the database, so their information may be entered into the database table "Login", their username stored in logUser for tracking the user, and be redirected to home.
				if (results.length < 1){
					var sql = "INSERT INTO Login(Username, Firstname, Lastname, Password, email) VALUES ('"+registerUser+"', '"+registerFirst+"','"+registerLast+"','"+registerPassword+"', '"+registerEmail+"')";
					con.query(sql, function (error, result) {
						if (error) throw error;
					});
					logUser = registerUser;
					res.sendFile(path.join(__dirname+'/index.html')); 	
				}
				//If new user's entered username does match one in the database, give them an error message telling them to chose a new username
				else if(results[0].Username == registerUser) {
					res.sendFile(path.join(__dirname+'/registerUserErrU.html')); 
				}
				//If new user's entered email does match one in the database, give them an error message telling them to chose a new username				
				else if(results[0].email == registerEmail) {
					res.sendFile(path.join(__dirname+'/registerUserErrE.html')); 
				}
			});
	});
//When a POST request is called to http://localhost:3000/historicalForm it sends the form data from the Historical page to the database table "Historical" to store the users ticket order
	app.post('/historicalForm', function (req, res)
	{
		//Stores historical site name retrieved from Historical page in variable "site" 
		var site = req.body.site;
		
		//Stores number of adult tickets retrieved from Historical page in variable "adultNumber" 
		var adultNumber = req.body.adultNumber;
		//Stores total price of ordered adult tickets retrieved from Historical page in variable "adultPrice"
		var adultPrice = req.body.adultPrice;
		
		//Stores number of child tickets retrieved from Historical page in variable "childNumber"
		var childNumber = req.body.childNumber;
		//Stores total price of ordered child tickets retrieved from Historical page in variable "childPrice"
		var childPrice = req.body.childPrice;
		
		//Stores combined price of adult and child tickets retrieved from Historical page in variable "total"
		var total = req.body.total;
		//Stores credit card number retrieved from Historical page in variable "card"
		var card = req.body.card;
			
			//Insert into database table "Historical" the username which was tracked and stored in variable logUser, historical location, number of adult tickets, price of adult tickets, number of child tickets, price of child tickets, total price of both sets of tickets, and credit card number.
			var sql = "INSERT INTO Historical VALUES ( NULL, + '"+logUser+"','"+site+"','"+adultNumber+"','"+adultPrice+"','"+childNumber+"','"+childPrice+"','"+total+"','"+card+"')";
			con.query(sql, function (error, result) {
			//If there is an error throw an error
				if (error) throw error;
			/*Begin Historical Ticket HTML Code*/	
				//Instantiate variable named html to store HTML for Historical ticket	
					var html = ""
					html +="<html>";
					html +="<head>";
					html +="<title>Your Order</title>";
					html +="<meta charset='UTF-8'>"; 
					//Call CSS file "ticket.css" from static folder
					html +="<link rel='stylesheet' type='text/css' href='static/ticket.css'>";
					html +="</head>";
					html +="<body>";
						html += "<h1>New England Attractions";
						html += "<img src= 'static/GroupProjectLogo2.png' alt= 'Group Logo' id = 'logo'>";
						html +="</h1>"
						html += "<h2 id='order'>Thank you for your order!</h2>";
							
						html += "<img src='static/ticket.gif' id='ticketgif' style='width:470px;height:420px;border:0;'>";
						html +="<form id='ticketForm'>";
							html += "<fieldset id = 'fieldset'>";
								html += "<legend>Your Order</legend>";
								//Input number of adult tickets into input box
								html +=  "Number of Adult Tickets: <input type='text' id='numAdult' class = 'inputBox' name='adultTicket' value = '"+adultNumber+"' readonly>";
								html +=  "<span class= 'priceField'>";
								//Input price of adult tickets into input box
								html +=  "Adult Ticket Price: $<input type='text' id='priceAdult' class = 'inputBox' name='adultPrice' value = '"+adultPrice+"' readonly></span>";
								html += "<br>";
								//Input number of child tickets into input box
								html +=  "Number of Child Tickets:<input type = 'text' id= 'numChild' name= 'childTicket' class = 'inputBox' value = '"+childNumber+"' readonly>";
								html +=   "<span class= 'priceField'>";
								//Input price of adult tickets into input box
								html += "Child Ticket Price: $<input type= 'text' id= 'priceChild' name='childPrice' class = 'inputBox' value = '"+childPrice+"' readonly>";
								html += "</span>";
								html += "<br>";
								//Input total price of adult and child tickets combined into input box
								html += "Total Price:<br> <input type='text' id='totalPrice' name='priceTotal' class = 'inputBox' value = '"+total+"' readonly>";
								html +=   "<span class= 'priceField'>";
								//Input historical site name into input box
								html += "Location:<br> <input type='text' id='totalPrice' name='priceTotal' class = 'inputBox' value = '"+site+"' readonly>"
								html += "</span>";
							html += "</fieldset>";
						html += "</form>";
					html += "</body>";
					html += "</html>";
				/*End Printable Historical Ticket HTML Code*/
			//Send HTML code 
				res.send(html);
			});
	});
//When a POST request is called to http://localhost:3000/shoppingCart it retrieves all ticket orders from the database table "Historical" that match the current logged in user and displays them for the user to see.
	app.post('/shoppingCart', function (req, res)
	{
		//Select all rows from table Historical where username is equal to the logged in user.
		con.query('SELECT * FROM historical WHERE Username= ?',[logUser], function (error, results, fields){
		/*Begin Shopping Cart HTML Code*/
			//Instantiate variable named "reply" to store HTML for Shopping Cart	
			var reply = "";
			reply += "<!DOCTYPE html>";
			reply += "<html>";
			reply += "<head>";
			reply += "<meta charset='UTF-8'>";   
			reply += "<link rel='stylesheet' type= 'text/css' href='static/newenglandstyle.css'>"
			reply += "</head>";
			reply += "<header>";
			reply += "<h1>New England Attractions";
			reply += "<img src='static/GroupProjectLogo2.png' alt='Group Logo' id = 'logo'>";
			reply += "</h1>";
			reply += "</header>";
			/*Begin Shopping Cart Style Section*/
				reply += "<style>";
				
				reply += "#orderHeading{background-color: blue; color:gold; text-align:center; border: 3px solid navy; padding-top: 15px; padding-bottom: 15px; width: 60%; margin: 0 auto;}";
				reply += "#orderForm{margin-left: 26%;  margin-right: auto; display: inline-block;background-color: gold; border : solid; width: 660px; border-radius: 30px;}"
				reply += "body{background-color: lightblue;}";
				reply += ".numberTic{padding: 7%; width: 50%; background-color: gainsboro; cursor: not-allowed;}";
				reply += ".site{padding: 7%; width: 150%; background-color: gainsboro; cursor: not-allowed;}"
				reply += ".priceTic{padding: 7%; width: 150%; margin: auto; background-color: gainsboro; cursor: not-allowed;}"
				reply += ".total{padding: 7%; width: 120%; background-color: gainsboro; cursor: not-allowed;}"
				reply += "legend{font-size: 20px; border: 3px solid black; background-color: margin-left: 30px;}";
				reply += "</style>";
			/*End Shopping Cart Style Section*/
			reply += "<body>";
			reply += "<h2 id = 'orderHeading'>Shopping Cart</h2>"
			
			//Foreach loop that cycles through each row in the database table Historical that has a matching username as the current logged in user
			Object.keys(results).forEach(function(key) {
				var row = results[key];
				reply += "<br>";
				reply += "<br>"
				reply += "<form id= 'orderForm'>"
				reply += "<fieldset id = 'registerBox'>"
			//Add order number of ticket order to legend 
				reply += "<legend>Order Number: #"+row.OrderNumber+ " </legend>"
				
				reply += "<div style = 'position: relative; margin-left: 8%; display: inline-block;'>"
				reply += "<label style = 'font-weight: bold; font-size: 18px;'>Location</label>"
				reply += "<br>"
			//Add historical site name to input 
				reply += "<input type='text' class ='site' name = 'user' value = '"+row.historicalSite+"' readonly>"
				reply += "</div>";	
				reply += "<br>"	;		
				reply += "<br>";
				
				reply += "<div style = 'position: relative; margin-left: 8%; display: inline-block;'>"
				reply += "<label style = 'font-weight: bold; font-size: 18px;'>Number of Child Tickets</label>"
				reply += "<br>"
			//Add number of adult tickets ordered to input 
				reply += "<input type='text' class ='numberTic' name = 'first' value = "+row.childNumber+ " readonly>"
				reply += "</div>"
				reply += "<div style = 'position: relative; margin-left: 8%; display: inline-block;'>"
				reply += "<label style = 'font-weight: bold; font-size: 18px;'>Child Price</label>"
				reply += "<br>"
			//Add price of adult tickets ordered to input 
				reply += "<input type='text' class ='priceTic' name = 'user' value = $"+row.childPrice+ " readonly>"
				reply += "</div>"
				reply += "<br>"
				reply += "<br>"
				
				reply += "<div style = 'position: relative; margin-left: 8%; display: inline-block;'>"
				reply += "<label style = 'font-weight: bold; font-size: 18px;'>Number of Adult Tickets</label>"
				reply += "<br>"
			//Add number of child tickets ordered to input 
				reply += "<input type='text' class ='numberTic' name = 'last' value = "+row.adultNumber+ " readonly>"
					
				reply += "</div>"
				reply += "<div style = 'position: relative; margin-left: 8%; display: inline-block;'>"
				reply += "<label style = 'font-weight: bold; font-size: 18px;'>Adult Price</label>"
				reply += "<br>"
				//Add price of adult tickets ordered to input 
				reply += "<input type='text' class ='priceTic' name = 'user' value = $"+row.adultPrice+ "  readonly>"
				reply += "</div>"
				reply += "<br>"
				reply += "<br>"
				
				reply += "<div style = 'position: relative; margin-left: 8%; display: inline-block;'>"
				reply += "<label style = 'text-align: center; font-weight: bold; font-size: 18px;'>Total</label>"
				reply += "<br>"
			//Add total cost of child and adult tickets to input 
				reply += "<input type='text' class ='total' name = 'user' value = $"+row.total+ " readonly>"
				reply += "</div>"
				reply += "<br>"
				reply += "<br>"
				
				reply += "</fieldset>"
				reply += "</form>"
				
				reply += "<br>"
				reply += "<br>"
				
				reply += "<br>"
				reply += "<br>"
				});		
			
				reply += "</body>"
				reply += "</html>"
		/*End Shopping Cart HTML Code*/
			//Send HTML code in variable "reply"
			res.send(reply);
		})
		
	});
//Run server on port 3000	
	app.listen(3000);
//If server is running on port 3000, print to console, a message.
	console.log("Running at Port 3000");
