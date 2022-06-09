function showMessage(value){
    if(arguments.length !== 1){//호출된 함수에서 건네준 인수의 갯수를 체크한다. 배열형태라서 length쓰는듯?
        throw new Error('인수의 수가 다름'+ arguments.length);
    }
    console.log(value);
}

try{
    showMessage('영희', '철수');
}catch(e){
    console.log(e.message);
}

/*
위 코드는 arguments 객체의 응용이며, 현재 함수의 인수는 1개로 구성되어 있으나
호출할때 함수의 인수의 갯수를 2개로 지정했다. 
그래서 함수 호출과정에서 인수의 수가 1개가 아니면 오류코드를 나오게 했으며,
실제 인수의 수가 다름이라고 출력되는 것을 알 수 있다.
*/