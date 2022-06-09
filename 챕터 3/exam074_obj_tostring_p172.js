var obj = new Object();

console.log(obj.toString()); // [object Object]
console.log(obj.valueOf()); // [object Object]

var dat = new Date();

console.log(dat.toString()); // Tue Jun 21 22:07:30 UTC+09002011
console.log(dat.valueOf()); // 1308661650102

var ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];

console.log(ary.toString()); // prototype.js,jQuery,Yahoo! UI
console.log(ary.valueOf()); // prototype.js,jQuery,Yahoo! UI

var num = 10;

console.log(num.toString()); // 10
console.log(num.valueOf()); // 10

var reg = /[0-9]{3}-[0-9]{4}/g;

console.log(reg.toString()); // /[0-9]{3}-[0-9]{4}/g
console.log(reg.valueOf()); // /[0-9]{3}-[0-9]{4}/g

// toString은 문자열을 반환한다
// valueOf는 문자열 이외의 값이 반환되는 것을 기대하며 사용한다. 객체 기본형의 표현