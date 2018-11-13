//DECLARATION
var express 		= require('express');
var bodyParser 		= require('body-parser');
var expressSession 	= require('express-session');
var cookieParser 	= require('cookie-parser');
var expressValidator = require('express-validator');
var home 			= require('./controllers/home');
var login 			= require('./controllers/login');
var registration	= require('./controllers/registration');
var logout			= require('./controllers/logout');
var app 			= express();
// require('./search/script.js');

//CONFIGURATION
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({secret: 'hhdhdhdhd', saveUninitialized: true, resave: false}));
app.use(cookieParser());
app.use(expressValidator());
app.use("/search", express.static("search"));


//ROUTING
app.use('/login', login);
app.use('/registration', registration);
app.use('/home', home);
app.use('/logout', logout);


app.get('/', function(request, response){
	request.session.errorsLog = 'null';
	request.session.errorsReg= 'null';
	response.render('index');
});


//SERVER STARTUP
app.listen(3000, function(){
	console.log("Server startead at 3000...");
});
