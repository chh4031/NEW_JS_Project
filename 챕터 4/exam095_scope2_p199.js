scope = 'Global Variable';

function getValue(){
    scope = 'Local Variable';
    return scope;
}

console.log(getValue());
console.log(scope);

/*
var 명령을 쓰지 않아도 변수 선언은 되나 이럴때 var가 없을 경우는 모두 글로벌 변수로 인식된다.
그래서 Local Variable부분도 글로벌로 인식 되어서 값이 덮어씌워 졌다.
*/