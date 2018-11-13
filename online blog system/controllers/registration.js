var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('registration/index', {errorsReg: request.session.errorsReg});
});


router.post('/', function(request, response){

	request.check('name', 'Name can not be empty').isLength({min: 1});
	request.check('phone', 'Contact number must be 11 number').isLength({min: 11, max: 11});
	request.check('username', 'user name can not be empty').isLength({min: 1});
	request.check('password', 'Password must be at least 5 characters').isLength({min: 5});

	var errorsReg = request.validationErrors();
	console.log(errorsReg);

	if (errorsReg) {
		request.session.errorsReg = errorsReg;
		response.redirect('/registration');
	}
	else{
		var user={
		name	: request.body.name,
		phone	: request.body.phone,
		username: request.body.username,
		password: request.body.password,
		type	: request.body.type
	};

		userModel.insert(user, function(status){
		if(status == true){
			request.session.errorsReg = '';
			request.session.un = request.body.username;
			request.session.ty = request.body.type;
			if(request.session.ty == 'admin'){
				response.redirect('/home/userlist');
			}
			else if (request.session.ty == 'author') {
				response.redirect('/home');
			}
			
		}else{
			response.send('Error in adding user');
		}
		
	});
	}
	
});

module.exports = router;