var express = require('express');
var mysql = require('mysql');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(request, response){

	request.session.un = "";
	request.session.ty = "";
	response.redirect('/login');
});


module.exports = router;