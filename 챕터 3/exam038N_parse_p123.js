var n = '123xxx';

console.log(Number(n));//숫자 표시 X
console.log(Number.parseFloat(n));//숫자로 가능한 부분만 출력
console.log(Number.parseInt(n));//숫자로 가능한 부분만 출력

var d = new Date();
console.log(Number(d));//숫자 출력
console.log(Number.parseFloat(d));//해석 X
console.log(Number.parseInt(d));//해석 X

var h = '0x10';
console.log(Number(h));//16진수로 나옴
console.log(Number.parseFloat(h));//문자열과 혼재해서 앞에서부터인 0만 반환
console.log(Number.parseInt(h));//16진수로 나옴

var b = '0b11';
console.log(Number(b));//8진수
console.log(Number.parseFloat(b));//해석불가
console.log(Number.parseInt(b));//해석불가

var e = '1.01e+2';
console.log(Number(e));//지수 반환
console.log(Number.parseFloat(e));//지수반환
console.log(Number.parseInt(e));//문자열 부분인 e+2는 삭제함