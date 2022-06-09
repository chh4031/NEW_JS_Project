let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1);
console.log(sym1.toString());//심볼의 설명인 sym을 반환
console.log(sym1 === sym2);//심볼은 같지만 서로 다른 것으로 인식

// 심볼은 물체의 이름을 작성하는것 문자열과는 다름
// 심볼은 형 반환이 불가능 boolean만 예외