var scope = 'Global Variable';

function getValue(){
    console.log(scope);
    var scope = 'Local Variable';
    return scope;
}

console.log(getValue());
console.log(scope);

/*
로컬 변수는 함수 전체에서 유효하다. 그래서 console.log(scope)는 global 변수의 값이 지정되었을 수도 있지만, 앞써 말한 로컬 변수가 유효하므로
local의 값이 나와야 한다. 하지만 이로컬의 변수는 선언이 뒤에 있으므로 제대로 출력되지 않는다. 제대로 출력하려면 선언부분을 먼저 작성해 주어야 제대로 작동함을 알 수 있다.

var scope = 'Local Variable';
console.log(scope);

가 맞는 표현이다.
이러한 동작을 우리는 변수의 호이스팅이라고 한다.
*/