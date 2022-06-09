//해당 코드는 arguments 객체에 관한 이야기 이다.

function showMessage(value){
    console.log(value);
}

showMessage();
showMessage('aaa');
showMessage('aaa', 'bbb');

/*
파라미터의 수를 보면 일단 함수에 정의된 인수는 총 1개임을 알 수 있다.
그런데 함수의 호출에서 부여되는 인수의 수가 함수 측에서 요구하는 인수와 다른 경우에도 이를 체크하지 않음을 알 수 있다.
즉 그래서 결과각 첫번째는 undefined가 되고, 나머지는 aaa만 출력한다.

이러한 인수 정보를 관리하는 객체를 arguments 객체라 하고 배열 형태로 저장하며, 
호출원으로 부터 주어진 인수의 값을 보관하고 유지한다. 단 객체임을 주의해야 한다. 
함수 안(함수 정의부분) 에서만 이용할 수 있는 객체이고, 함수 호출 타이밍에 생성된다. 
즉 aaa가 아닌 bbb의 값이나 공백값도 arguments 객체에 저장되고 보관된다.
*/