/**
 * OS Module
 */
// 모듈을 추출합니다.
var os = require('os');

// 모듈을 사용합니다.
console.log("os.hostname(): ", os.hostname());
console.log("os.type(): ", os.type());
console.log("os.platform(): ", os.platform());
console.log("os.arch(): ", os.arch());
console.log("os.release(): ", os.release());
console.log("os.uptime(): ", os.uptime());
console.log("os.loadavg(): ", os.loadavg());
console.log("os.totalmem(): ", os.totalmem());
console.log("os.freemem(): ", os.freemem());
console.log("os.cpus() : ", os.cpus());
console.log("os.getNetworkInterfaces(): ", os.getNetworkInterfaces());
