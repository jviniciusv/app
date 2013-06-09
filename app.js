var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/usuarios');

var UserSchema = new mongoose.Schema({
	name : String,
	user : String,
	password : String
});
var User = mongoose.model('User', UserSchema);

app.use(express.bodyParser());

app.configure(function(){
	app.set('view engine', 'jade');
	app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
	res.render('index.jade');
});

app.post('/register', function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var password = req.body.password;
	res.send('ur name is ' + name + ', ur login is ' + email + ' and your password is ' + password);
	
	var NewUser = new User({
		name : name,
		user : email,
		password : password
	});
	
	NewUser.save(function(err){
		if(err){
			console.log('error');
		}
		else{
			console.log('success');
		}
	});

	res.render('index.jade');
});

app.post('/login', function(req, res){
	var user = req.body.user;
	var password = req.body.password;
	//req.session.name = 'vinicius';
	
	User.findOne({ user : user, password : password }, function(err, docs){
		if(docs){
			res.send('usuario encontrado');
			window.location.href="/teste";
		}
		else{
			res.send('usuario nao encontrado');
		}
	});
});

app.get('/teste', function(req, res){
	res.send('Ola ' + req.session.name);
});

app.listen(5000);
console.log('Listening on port 5000');