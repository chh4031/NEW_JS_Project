//해당 코드는 명시적으로 선언한 인수값 함수에 가변길이 인수값을 적용시킨 혼합된 형태의 함수이다.
function printf(format){
    for(var i = 0, len = arguments.length; i < len; i++){
        var pattern = new RegExp('\\{' + (i - 1) + '\\}', 'g');//('정규표현', '옵션') g는 문자열 전체에 대해 매치하는가? RegExp 객체중 한개
        format = format.replace(pattern, arguments[i]);
    }
    console.log(format);
}

printf('안녕하세요, {0}씨. 나는 {1} 입니다.', '시온', '피카츄');

/*
명시적으로 선언한 인수값에 가변길이 함수를 혼재할수 있다는 의미같은데
일단 명시적으로 선언된 인수 이후에 가변길이 인수가 arguments객체에 저장됨.
너무많은 가변길이는 코드의 난독화를 시킴.
가변길이 함수많이 arguments객체로 관리됨이 아님을 알면 된다.
RegExp 쪽을 안배워서 잘은 모르겠지만...
또한 가변길이 함수는 필요할 때만 쓰자.
*/