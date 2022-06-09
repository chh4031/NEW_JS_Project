function arrayWalk(data, f){
    for (var key in data){
        f(data[key], key);
    }
}

var result = 0;//이거 Global 변수임 ㅋ 스코프 보소
function sumElement(value, key){
    result += value;
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, sumElement);
console.log('합계 : ' + result);
/*
이러한 고차함수는 
큰 범위의 기능만 정의후에 상세한 기능은 사용자가 결정할 수 있음. 이게 장점임.

즉 큰 범위의 함수인 arrayWalk라는 함수는 정의해 두고 그 안의 sumElement라는 함수만 사용자가 재정의 할 수 있음을 의미 
이렇게 사용자가 상세한 기능을 결정할 수 있다는 장점을 가진다는것을 뜻한다.

그러니깐 앞의 코드에서의 showElement 함수를 정의해서 값을 나열해 볼 수 있고
sumElement 함수를 정의해서 합계를 구할 수 있다는 것이다.
*/