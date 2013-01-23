/**
 * File System Module
 */
// 모듈을 추출합니다.
var fs = require('fs');

// 모듈을 사용합니다.
// 동기식 파일 읽기
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log("FileReadSync: ", text);

console.log ('==============1');

// 비동기식 파일 읽기
fs.readFile('textfile.txt', 'utf8', function(error, data) {
	console.log("FileReadASync: ", data);
});
console.log ('==============2');

// 변수를 선언합니다.
// 파일 쓰기
var data = 'Hello World .. .. !';
fs.writeFile('TextFileOtherWrite.txt', data, 'utf8', function (error) {
	console.log('WRITE FILE ASYNC COMPLETE');
});
console.log ('==============3');

fs.writeFileSync('TextFileOtherWriteSync.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');

console.log ('==============4');


// 동기식 예외처리
try {
	var d = fs.readFileSync('neverwherefile.txt', 'utf8');
} catch (e) {
	console.log(e);
}

try {
	fs.writeFileSync('nowherefile.txt', 'error, error!!', 'utf8');
	console.log('FILE WRITE COMPLETE??');
} catch (e) {
	console.log(e);
}

// 비동기식 예외처리
fs.readFile('neverwherefile.txt', 'utf8', function(error, data){
	if (error) {
		console.log(error);
	} else {
		console.log(data);
	}
});

fs.writeFile('nowherefile.txt', 'utf8', function(error) {
	if (error) {
		console.log(error);
	} else {
		console.log('FILE WRITE COMPLETE???');
	}
});