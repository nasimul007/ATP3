var express = require('express');
var userModel = require.main.require('./models/user-model');
var blogModel = require.main.require('./models/blog-model')
var router = express.Router();


router.get('*', function(request, response, next){
	
	if(request.session.un != ""){
		next();
	}else{
		response.redirect('/login');
	}
});

router.get('/', function(request, response){
	
	userModel.getAll(function(result){

		if(request.session.ty == 'admin')
		{
			response.render('home/index');
		}
		else if (request.session.ty == 'author') {
			response.render('blog/index');
		}
	});
});

router.get('/userlist', function(request, response){
	userModel.getAll(function(result){
		response.render('home/userList', {userList: result});
	});

});

router.get('/postList', function(request, response){
	blogModel.getAll(function(result){
		response.render('blog/postList', {postList: result});
	});
});

router.get('/myPost', function(request, response){
	var username = request.session.un;

	blogModel.getMyPost(username, function(result){
		response.render('blog/myPost', {myPost: result});
	});
});

router.get('/delete/:id', function(request, response){
	
		var userId = request.params.id;

		userModel.delete(userId, function(status){
			if (status) {
				userModel.getAll(function(result){
				response.render('home/userList', {userList: result});
			});
			}else{
				response.send('Error');
			}
			
		});

});

router.get('/bdelete/:id', function(request, response){
	
		var blogId = request.params.id;

		blogModel.delete(blogId, function(status){
			if (status) {
				blogModel.getAll(function(result){
				response.render('blog/myPost', {myPost: result});
			});
			}else{
				response.send('Error');
			}
			
		});

});

router.get('/edit/:id', function(request, response){
	
		var userId = request.params.id;

		userModel.get(userId, function(result){
			response.render('home/edit', {user: result});
		});

});



router.post('/edit/:id', function(request, response){
	
		var user = {
			id 		: request.body.id,
			name	: request.body.name,
			phone	: request.body.phone,
			username: request.body.username,
			password: request.body.password,
			
		};

		console.log(user);

		userModel.update(user, function(status){

			if(status){
				
				response.redirect(request.body.id);
			}else{
				response.send('Error');
			}
			
		});

});

router.get('/bedit/:id', function(request, response){
	
		var blogId = request.params.id;

		blogModel.get(blogId, function(result){
			response.render('blog/bedit', {blogs: result});
		});

});

router.post('/bedit/:id', function(request, response){
	
		var user = {
			id 		: request.body.id,
			post	: request.body.post
			
		};

		console.log(user);

		blogModel.update(user, function(status){

			if(status){
				response.redirect(request.body.id);
			}else{
				response.send('Error');
			}
			
		});

});

router.get('/adduser', function(request, response){

	response.render('home/create');
});

router.post('/adduser', function(request, response){

	var user={
		name	: request.body.name,
		phone	: request.body.phone,
		username: request.body.username,
		password: request.body.password,
		type	: request.body.type
	};

	userModel.insert(user, function(status){
		
		if(status == true){
			response.redirect('/home/userlist');
		}else{
			response.send('Error in adding user');
		}
		
	});
});

router.get('/createPost', function(request, response){

	response.render('blog/createPost');
});

router.post('/createPost', function(request, response){

	var user={
		post	: request.body.post,
		username: request.session.un
	};

	blogModel.insert(user, function(status){
		
		if(status == true){
			response.redirect('/home/postList');
		}else{
			response.send('Error in posting new content');
		}
		
	});
});

router.post('/search', function(request, response){
	var value = request.body.value;
	// console.log(term);

	userModel.getSearch(value, function(result){
		response.end(JSON.stringify(result));
	});
});


module.exports = router;