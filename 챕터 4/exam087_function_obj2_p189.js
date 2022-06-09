var param = 'height, width';
var formula = 'return height * width / 2;';
var diamond = new Function(param, formula);
console.log('마름모의 면적 : ' + diamond(5, 2));

//Function 생성자 방식에서는 스크립트 상에 인수 함수 본체를 동적으로 사용가능하다.
//즉 변수를 넣어서 사용이 가능하다. 유일한 장점

// var a = Function('a', 'b', 'return a;'); new생략해서 글로벌 객체처럼 사용가능
// var a = Function('a, b', 'return a;'); 인수를 통합해서 사용 가능