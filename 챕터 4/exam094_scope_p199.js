var scope = 'Global Variable';//이거는 글로벌스코프이다.

function getValue(){
    var scope = 'Local Variable';//이거는 로컬스코프이다.
    return scope;
}

console.log(getValue());
console.log(scope);

/*
로컬과 글로벌로 선언된 각 변수에 따라 값이 다르다.
즉 글로벌은 전체에서 사용 가능함 변수이고, 로컬은 블록안에서(함수 등)에서 정의된 부분에서만 사용가능하다.
*/