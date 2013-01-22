
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mysql = require('mysql')
  , fs = require('fs')
  , ejs = require('ejs');

var app = express();

var con = mysql.createConnection({
    host: 'instance37078.db.xeround.com',
    port: '5291',
	user: 'cherry',
	password: '1234'
});

app.configure(function(){
  app.set('port', process.env.PORT);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/product', function (req, res) {
    res.render('product', {
		layout: '/layout.jade',
		title: 'Product Page'
	});
});

// List
app.get('/list', function(req, res){
    fs.readFile('public/List.html', 'utf8', function(error, data){
		con.query('USE test');
		con.query('SELECT * FROM PRODUCTS ORDER BY 1', function(error, result, fields){
			res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(ejs.render(data, {
				data: result
			}));
		});
	});
});

// Do Delete
app.get('/delete/:id', function(req, res){
	con.query('USE test');
	con.query('DELETE FROM PRODUCTS WHERE ID = ?', [req.params.id]);
	
	res.writeHead(302, {'Location' : '/list'});
	res.end();
});

// Insert Page
app.get('/insert', function (req, res){
	fs.readFile('public/Insert.html', 'utf8', function(error, data){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(data);
	});
});

// Do Insert
app.post('/insert', function(req, res){
	var body = req.body;
	
	con.query('USE test');
	con.query('INSERT INTO PRODUCTS (name, modelnumber, series) VALUES (?, ?, ?)', [body.name, body.modelnumber, body.series]);
	
	res.writeHead(302, {'Location' : '/list'});
	res.end();
});

// Edit Page
app.get('/edit/:id', function(req, res){
	fs.readFile('public/Edit.html', 'utf8', function(error, data){
		con.query('USE test');
		con.query('SELECT * FROM PRODUCTS WHERE ID = ?', [req.params.id], function(error, result){
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(ejs.render(data, {
				data: result[0]
			}));
		});
	});
});

// Do Edit
app.post('/Edit/:id', function(req, res){
	var body = req.body;
	
	con.query('USE test');
	con.query('UPDATE PRODUCTS SET NAME = ?, MODELNUMBER = ?, SERIES = ? WHERE ID = ?', [body.name, body.modelnumber, body.series, req.params.id]);
	
	res.writeHead(302, {'Location' : '/list'});
	res.end();
});

http.createServer(app).listen(process.env.PORT, process.env.IP, function(){
  console.log("Express server listening on port " + process.env.PORT);
});
