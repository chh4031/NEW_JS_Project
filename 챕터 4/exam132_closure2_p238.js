function closure(init){
    var counter = init;//클로저 변수

    return function(){//클로저 함수
        return ++counter;
    }
}

var myClosure1 = closure(1);
var myClosure2 = closure(100);

console.log(myClosure1());
console.log(myClosure2());
console.log(myClosure1());
console.log(myClosure2());

/*
여기서는 각 함수는 같은 로컬 변수를 참조할 것이라 생각하는데 이는 아니다.
왜냐하면 함수 호출 시 call객체가 생성 되는데 이 call객체는 각각의 호출에 따라 별개의 것이 된다.
즉 call 객체가 별개의 것이므로 해당 객체가 관리하는 로컬변수도 별개의 것이 된다.
그래서 값이 다름을 알 수 있다.
즉 글로벌 객체에 myClosure1과 myClosure2에 해당하는 call 객체가 별개로 생성된다. 그래서 해당 함수 안의 클로저 함수(위에서 정의된 익명함수)도
별개의 call객체로 구성되므로 해당 값이 다르게 나올 수 밖에 없다.
*/