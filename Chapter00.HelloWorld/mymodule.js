/**
 * main.js 에서 연동, 절대값을 구하는 file.
 */
 
exports.abs = function (number) {
	if (0 < number) {
		return number;
	} else {
		return -number;
	}
};

exports.circleArea = function (radius) {
	return radius * radius * Math.PI;
}