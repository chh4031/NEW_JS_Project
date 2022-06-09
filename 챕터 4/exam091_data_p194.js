//함수를 정의할때 주의점 2번째
//함수는 데이터형의 일종이다

var getTriangle = function(base, height){
    return base * height / 2;
};

console.log(getTriangle(5,2));

getTriangle = 0;
console.log(getTriangle);

/*
자바스크립트에서 함수도 데이터형의 하나임을 알아야한다.
즉 getTriangle에 수치형 데이터값을 넣어도 문제가 되지 않는다.
이렇게 되면 원래 있던 함수는 메모리 상에만 남게 되어 접근이 불가해진다.
즉. 함수 리터럴 방식도 변수에 함수형 리터럴을 대입하는 것이라 그렇다.

자바스크립트에서는 전혀 문제 될 것이 없는 상황

getTriangle 변수 안에 정의된 함수가 그대로 문자열로 출력되는 것이다. 측 최상의 object에서 toString을 호출해서 나온다.
Function 객체의 toStirng 메소드가 호출되어 문자열 표현으로 변환된 것이 출력되는것.
*/