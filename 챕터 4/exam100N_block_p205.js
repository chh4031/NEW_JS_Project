(function(){
    var i = 5;
    console.log(i);
}).call(this);//call은 이함수를 즉시 실행, 함수 부분을 ()로 해줬음.

console.log(i);

/*
자바스크립트에서도 해당 방식으로 블록 스코프를 구현할 수 있다.
*/