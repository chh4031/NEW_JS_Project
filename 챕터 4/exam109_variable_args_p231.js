//해당 코드는 가변길이 인수값을 받은 함수코드이다.
function sum(){
    var result = 0;
    
    for(var i = 0, len = arguments.length; i < len; i++){
        var tmp = arguments[i];
        if(typeof tmp !== 'number'){
            throw new Error('인수값이 숫자가 아닙니다.' + tmp);// 숫자 아니면 처리 중단
        }
        result += tmp;
    }
    return result;
}

try{
    console.log(sum(1, 3, 5, 7, 9, 11));
}catch(e){
    console.log(e.message);
}

/*
이게 뭔가 싶을 수 있지만
하나하나 보면 쉬움.
일단 해당 함수의 인수 값은 지정되어 있지 않음.
그래서 이 함수의 호출을 할때 작성한 인수의 갯수를 받음. 
그리고 받은 인수를 tmp라는 곳에 저장함. arguments[i]로 arguments 객체에 저장된 인수의 값을 하나하나 가져온다고 볼 수 있음.
그리고 해당 값의 타입이 number인지 보고 number가 아니면 오류값이 나오게 함.
그래서 result에 tmp를 계속 저장하는 방식임.
그리고 해당 함수의 리턴값으로 result를 주고, 해당 함수를 실행하면 인수값이 얼마든 간에 값이 출력됨.
*/