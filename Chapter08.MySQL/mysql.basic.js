/**
 * MySQL Module Basic
 */
var mysql = require('mysql');

var client = mysql.createConnection({
	host : 'localhost',
	user : 'test',
	password : 'test'
});

client.connect();

client.query('USE node');
client.query('SELECT * FROM PRODUCTS', function(error, result, fields){
	console.log(result);
});