var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('login/index' , {errorsLog: request.session.errorsLog});
});

router.post('/', function(request, response){

	var user = {
		username : request.body.username,
		password : request.body.password
	};

	request.check('username', 'Username can not be empty').isLength({min: 1});
	request.check('password', 'Invalid Password').isLength({min: 1});

	var errorsLog = request.validationErrors();
	console.log(errorsLog);
	if (errorsLog) {
		request.session.errorsLog = errorsLog;
		response.redirect('/login');
	}
	else{
		userModel.validate(user, function(status){
		if(status){
			request.session.errorsLog = "";
			request.session.un = request.body.username;
			request.session.ty = status[0].type;
			response.redirect('/home');
		}else{
			response.redirect('/login');
		}
	});
	}

});

module.exports = router;