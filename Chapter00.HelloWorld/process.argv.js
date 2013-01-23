/**
 * Process 객체 기본 속성 예제
 */
 // process.argv
 process.argv.forEach(function (item, index) {
	// 출력합니다.
	console.log(index + " : " + typeof(item) +" : " , item);
	
	// 실행 매개 변수에 --exit 가 있을 때
	if (item == '--exit') {
		// 다음 실행 매개 변수를 얻습니다.
		var exitTime = Number(process.argv[index + 1]);
		
		// 일정 시간 후 프로그램을 종료합니다.
		setTimeout(function() {process.exit();}, exitTime);
	}
	
 });

console.log('- process.env: ', process.evn);
console.log('- process.version: ', process.version);
console.log('- process.versions: ', process.versions);
console.log('- process.arch: ', process.arch);
console.log('- process.platform: ', process.platform);

console.log('- process.memoryUsage(): ', process.memoryUsage());
console.log('- process.uptime: ', process.uptime());