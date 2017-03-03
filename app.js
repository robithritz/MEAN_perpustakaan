var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
Suaib = require('./models/master_model');

//konek ke mongodb
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/',function(req, res){
	res.send('Welcome to perpustakaan api');
});
app.get('/api/genres',function(req, res){
	Suaib.getGenres(function(err, hasil){
		res.json(hasil);
		console.log(req.query);
	});
});
app.get('/api/books',function(req, res){
	var limit_param = 20;
	if(req.query.l){
		limit_param = parseInt(req.query.l);
	}else{
		console.log('ga ada');
	}
	console.log(limit_param);
	Suaib.getBooks(function(err, hasil){
		res.json(hasil);
		console.log(req.query);
	},limit_param);
});

app.listen(3001);
console.log('running...');