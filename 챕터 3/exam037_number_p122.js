var num1 = 255;

console.log(num1.toString(16));//16진수
console.log(num1.toString(8));//8진수

var num2 = 123.45678;

console.log(num2.toExponential(2));//지수형식
console.log(num2.toFixed(3));//소수점이하 반올림 3번째에서
console.log(num2.toFixed(7));//소수점이하 반올림 7번째에서
console.log(num2.toPrecision(10));//10번째 행수로 변환 부족시 0추가
console.log(num2.toPrecision(6));//6번째 행수로 변환 뒤에꺼 반올림