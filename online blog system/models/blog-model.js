var db = require('./db');

module.exports = {

	get: function(blogId, callback){
		var sql = "select * from blogs where id=?";
		db.getResult(sql, [blogId], function(result){
			//console.log(result);
			callback(result[0]);
		});
	},
	getAll: function(callback){
		var sql = "SELECT * FROM blogs";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},
	getMyPost: function(username, callback){
		var sql = "SELECT * FROM blogs where username=?";
		db.getResult(sql, [username], function(result){
			callback(result);
		});
	},
	getSearch: function(term, callback){
		console.log("Got value",term);
		var sql = "SELECT * FROM blogs where username like ? or id like ?";
		db.getResult(sql, ["%"+term+"%", "%"+term+"%"], function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO blogs values(null, ?, ?)";
		db.execute(sql, [ user.username, user.post], function(success){
			callback(success);
		});
	},
	update: function(user, callback){
		var sql = "UPDATE blogs set writing=? where id=?";
	
		db.execute(sql, [user.post, user.id], function(status){
			callback(status);
		});
	},
	delete: function(blogId, callback){
		var sql = "Delete from blogs where id=?";
		db.execute(sql, [blogId], function(status){
			callback(status);
		});
	}
}