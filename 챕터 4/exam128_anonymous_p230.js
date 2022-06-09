//일외용 함수 - 익명 함수 
function arrayWalk(data, f){
    for (var key in data){
        f(data[key], key);
    }
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, 
    function(value, key){
        console.log(key + ':'+value);
    }
    );//함수의 정의를 바로 해버렸음을 알 수 있다. 또한 이 함수의 이름은 존재하지 않는다는 것을 알 수 있다.

/*
이러한 함수를 현재 장소에서만 사용되는 익명함수(일회용)을 뜻하며,
이는 코드의 간략화와 읽기 쉬워지고, 함수이름의 중복을 피할수 있음을 의미한다.
*/