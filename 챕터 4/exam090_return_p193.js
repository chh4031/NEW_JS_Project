//함수 정의할때의 주의점 1번
//return 명령 도중에 개행 금지

var getTriangle = function(base, height){
    return
    base * height / 2;
};

console.log('삼각형 면적: ' + getTriangle(5, 2));

/*
위의 코드는
return;
base * height/2;
로 인식해버림. 그래서 결과값이 undefined가 나옴.

단 다른 언어에서는 컴파일러가 알아서 해석하는 경우도 있음.

즉 return 이후 실행문을 무시해버림.
*/