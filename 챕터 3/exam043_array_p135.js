var ary1 = ['a', 'b', 'c','d','e','f','a'];
var ary2 = ['g', 'h', 'i', 'j'];

console.log(ary1.length);//배열의 길이
console.log(Array.isArray(ary1));//지정한 객체가 배열인가 확인
console.log(ary1.toString());//요소, 요소, 요소 .. 형식으로 반환
console.log(ary1.indexOf('a'));//지정한 요소의 인덱스값
console.log(ary1.lastIndexOf('a'));//지정한 요소의 인덱스값(단 마지막에 있는 요소의 인덱스값 즉 뒤에 있는 또다른 a값)
console.log(ary1.concat(ary2));//★ ary2를 ary1에 연결

console.log(ary1.join('/'));//★ 배열 내의 구분문자 넣기
console.log(ary1.slice(1));//★ 인덱스 1 ~ 끝까지 요소를 빼냄
console.log(ary1.slice(1,2));//★ 인덱스 1 ~ 2-1까지의 요소를 빼냄
console.log(ary1.splice(1,2,'aa','bb'));//★ 인덱스 1~2의 값을 aa, bb로 변경
console.log(ary1);

console.log(Array.of(20, 40, 60));//[20, 40, 60] 배열
console.log(ary1.copyWithin(1, 3, 5));// 3~5-1번째 요소를 1부터 복사
console.log(ary1);

console.log(ary2.fill('ccc', 1, 3));//1~3-1번째 요소를 ccc로 변환
console.log(ary2);

console.log(ary1.pop());//★ 배열의 끝 요소 삭제
console.log(ary1);

console.log(ary1.push('dd'));//★ 배열의 끝 요소 추가
console.log(ary1);

console.log(ary1.shift());//★ 배열의 선두 요소 삭제
console.log(ary1);

console.log(ary1.unshift('zzz','xxx'));//★ 배열의 선두 요소 추가
console.log(ary1);

console.log(ary1.reverse());//★ 배열 역순정렬
console.log(ary1);

console.log(ary1.sort());//★ 배열 일반 정렬
console.log(ary1);