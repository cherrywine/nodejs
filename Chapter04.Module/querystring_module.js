/**
 * Query String Module
 */
// 모듈을 추출합니다.
var url = require('url');
var querystring = require('querystring');

// var parsedObject = url.parse('http://search.naver.com/search.naver?where=nexearch&query=%EC%A1%B0%ED%9A%8C%EB%AC%B8&sm=top_hty&fbm=1&ie=utf8');
var parsedObject = url.parse('http://hanb.co.kr/book/look.html?isbn=978-89-7914-874-9');
console.log(querystring.parse(parsedObject.query));