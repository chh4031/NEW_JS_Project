//클로저에 대해
function closure(init){
    var counter = init;//클로저 변수

    return function(){// 반환값이 counter 변수를 증가시키기 위한 익명함수이다. 클로저함수라 할 수 있을듯?
        return ++counter;
    }
}

var myClosure = closure(1);//closure이라는 함수를 myClosure에 저장해서 함수처럼 사용 가능한듯??? 변수 myClosure에 익명함수가 세트된다는데...
console.log(myClosure());//해당값들은 클로저 함수와 클로저 변수로 인해 counter값이 유지되므로 값은 계속 증가한다.
console.log(myClosure());
console.log(myClosure());

/*
잘 보면 리턴값이 익명함수이고, counter는 로컬 변수임을 알 수 있다.
즉 함수가 종료되면 로컬 변수도 종료되지만 리턴값으로 쓰이는 익명함수에서 해당 로컬변수가 참조되고 있음을 알 수 있다.
그래서 원래는 종료되어야 하지만 그러지 못하고 counter라는 변수는 파기되지 않고 계속 보관/유지 된다. 
또한 이런 것을 클로저라고 하고, 로컬변수를 참조하는 함수 내의 또다른 함수를 클로저 함수라 한다.

또한 원칙에 의하면 Myclosure 선언은 var counter를 쓸수 없으나 클로저 개념으로 사용 가능하다.
*/