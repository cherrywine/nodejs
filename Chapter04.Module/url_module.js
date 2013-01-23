/**
 * URL Module
 */
// 모듈을 추출합니다.
var url = require('url');

// 모듈을 사용합니다.
// var parsedObject = url.parse('http://nodejs.org/api/url.html');
var parsedObject = url.parse('http://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');
console.log(parsedObject);