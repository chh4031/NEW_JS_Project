var value = 10;

function decrementValue(value){//함수의 인수는 로컬 변수로 기본적으로 처리된다.
    value--;
    return value;
}

console.log(decrementValue(100));
console.log(value);

/*
함수의 (가)인수는 기본적으로 로컬 변수로 처리됨을 알 수 있다.
그래서 value라는 글로벌 변수의 값은 그대로 10으로 출력되고, 함수에 인수로 지정해줌 100의 값은 99가 되어서 나옴을 알 수 있다.

이는 기본형의 인수라서 그렇다.
*/