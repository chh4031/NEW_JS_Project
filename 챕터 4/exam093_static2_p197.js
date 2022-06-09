//함수를 정의할때 주의점 4번째
//함수 리터럴/Funciton 생성자는 실행시에 판단이 된다.

console.log('삼각형 면적: ' + getTriangle(5, 2));

var getTriangle = function(base, height){
    return base * height / 2;
};


/*
실행시 오류가 생긴다. 이유는 앞의 function 명령과는 달리
함수 리터럴 방식과 Function 생성자 방식은 대입될 시(실행될 시)에 판단이 된다
그래서 호출하는 코드보다 먼저(위에) 작성해야 오류가 발생하지 않는다.

즉 정적 구조가 아니다.
*/