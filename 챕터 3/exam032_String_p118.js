var str1 = '뜰에 뜰에 뜰에는 닭이 있다.';

console.log(str1.indexOf('뜰'));//선두에서 뜰 이란 단어 검색 후 인덱스 반환
console.log(str1.lastIndexOf('뜰'));//뒤에서 뜰 이란 단어 검색 후 인덱스 반환
console.log(str1.indexOf('뜰', 3));//4번째 부터 검색 후 인덱스 반환(오른쪽)
console.log(str1.lastIndexOf('뜰', 5));//6번째 부터 검색 후 인덱스 반환(왼쪽)
console.log(str1.indexOf('가든'));//불일치시 -1
console.log(str1.startsWith('뜰'));//뜰로 시작하는 문자열 인가?
console.log(str1.endsWith('뜰'));//뜰로 끝나는 문자열인가?
console.log(str1.includes('뜰'));//뜰을 포함하는가?

var str2 = 'Wings프로젝트';
var str3 = '★표';
var str4 = '   wing   ';

console.log(str2.charAt(4));//5번째 문자열 추출
console.log(str2.slice(5, 8));//6-8문자열 추출
console.log(str2.substring(5,8));//6-8문자열 추출
console.log(str2.substr(5,3));//6번째부터 문자열 3개 추출
console.log(str2.split('s')); //s기준 문자열 분할(배열)
console.log(str1.split('에', 3));//에를 기준으로 3개 분할(배열)
console.log(str2.charCodeAt(0));//0번째 문자열 코드 변환
console.log(String.fromCharCode(87, 105, 110, 103));//코드를 문자열 변환(정적메소드임)
console.log(str3.codePointAt(0));//인코딩된 코드 포인트값 반환
console.log(String.fromCharCode(9733));//코드 포인트값 인코딩
console.log(str2.concat('  유한회사  '));//문자열을 뒤에 추가
console.log(str2.repeat(2));//문자열 2번 반복
console.log(str4.trim());//문자열 공백 삭제
console.log(str2.length);//문자열 길이