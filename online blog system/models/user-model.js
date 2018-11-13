var db = require('./db');

module.exports={
	
	get: function(userId, callback){
		var sql = "select * from user where id=?";
		db.getResult(sql, [userId], function(result){
			//console.log(result);
			callback(result[0]);
		});
	},

	getAll: function(callback){
		var sql = "SELECT * FROM user";
		db.getResult(sql, [], function(result){
			callback(result);
		});
	},
	insert: function(user, callback){
		var sql = "INSERT INTO user values(null, ?, ?, ?, ?, ?)";
		db.execute(sql, [ user.name, user.phone, user.username, user.password, user.type], function(success){
			callback(success);
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where username=? and password=?";
		db.getResult(sql, [user.username, user.password], function(result){
			
			if(result.length > 0){
				callback(result);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		var sql = "UPDATE user set name=?, phone=?, username=?, password=? where id=?";
	
		db.execute(sql, [user.name, user.phone, user.username, user.password, user.id], function(status){
			callback(status);
		});
	},
	delete: function(userId, callback){
		var sql = "Delete from user where id=?";
		db.execute(sql, [userId], function(status){
			callback(status);
		});
	},
	getSearch: function(term, callback){
		console.log("Got value",term);
		var sql = "SELECT * FROM user where username like ? or id like ?";
		db.getResult(sql, ["%"+term+"%", "%"+term+"%"], function(result){
			callback(result);
		});
	}
}