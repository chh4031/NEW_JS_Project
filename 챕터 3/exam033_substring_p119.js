var str = 'WINGS프로젝트';

console.log(str.substring(8,5));
console.log(str.slice(8,5));

console.log(str.substring(5,-2));//1-5추출
console.log(str.slice(5,-2));//6-7추출
// substring는 -2를 0으로 인식
// slice는 -2를 7로 인식, 문자열읜 끝부터 문자수로 인식함.


// substring과 slice의 차이점
// substring은 개시위치 - 종료위치의 범위를 추출 장소로 지정함
// slice는 개시위치(8)부터 문자수 지정(5)으로 추출장소를 지정함