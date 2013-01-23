/**
 * Event Module setMaxListeners, removeListener
 */
// 이벤트 연결 개수 제한을 10개로 설정합니다.
// process.setMaxListeners(10);
 
// 이벤트를 연결합니다.
process.on('exit', function() { console.log('1'); });
process.on('exit', function() { console.log('2'); });
process.on('exit', function() { console.log('3'); });
process.on('exit', function() { console.log('4'); });
process.on('exit', function() { console.log('5'); });
process.on('exit', function() { console.log('6'); });
process.on('exit', function() { console.log('7'); });
process.on('exit', function() { console.log('8'); });
process.on('exit', function() { console.log('9'); });
process.on('exit', function() { console.log('10'); });
process.on('exit', function() { console.log('11'); });
process.on('exit', function() { console.log('12'); });

/*
// 변수를 선언합니다.
var onUncaughtException = function (error) {
	console.log('예외가 발생했군 ^_^ 이번에만 봐주겠다 ^_^ .. !');
	
	process.removeListener('uncaughtException', onUncaughtException);
};

// 이벤트를 연결합니다.
process.on('uncaughtException', onUncaughtException);
*/

// 이벤트를 연결합니다. (1번만 연결)
process.once('uncaughtException', function (error) {
	// 출력합니다.
	console.log('예외가 발생했군 ^_^ 이번에만 봐주겠다 ^_^ .. !');
});

// 2초마다 함수를 실행합니다.
setInterval(function() {
	// 예외를 발생시킵니다.
	error.error.error('^_^');
}, 2000);