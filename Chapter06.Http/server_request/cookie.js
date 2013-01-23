/**
 * 쿠키 추출하고 분해
 */
var http = require('http');

http.createServer(function(request, response){
	// GET COOKIE
	var cookie = request.headers.cookie;
	cookie = cookie.split(';').map(function (element) {
		var element = element.split('=');
		return {
			key: element[0],
			value: element[1]
		};
	});
	
	// SET COOKIE
	response.writeHead(200, {
		'Content-Type': 'text/html',
		'Set-Cookie': ['name=CherryWine', 'favorite=Cat']
	});
	
	// GET 요청
	response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
}).listen(49757, function() {
	console.log('Server Running at http://127.0.0.1:49757/');
});