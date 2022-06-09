//funcion 생성자로 정의하는 방식 2번째 방식이고, 잘 사용하지 않는 방식이다.

var getTriangle = new Function('base', 'height', 'return base * height /2;');
console.log('삼각형 면적: ' + getTriangle(5, 2));

/*
base height는 인수값이고, 마지막에 함수의 본체를 쓴다.
인수나 함수 본체에 대해 문자열로 사용 가능하다
*/