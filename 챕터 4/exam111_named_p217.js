//호출시 이름을 명시적으로 지정할 수 있는 인수
function getTriangle(args){
    if (args.base == undefined){
        args.base = 1;
    }
    if (args.height == undefined){
        args.height = 1;
    }
    return args.base * args.height / 2;
}

console.log(getTriangle({base:5, height:4}));//순서 바꿔도 됨.

/*
이러한 방식은

인수가 많아져도 코드의 의미를 알기 쉽다.
생략 가능한 인수를 스마트하게 표현 가능하다.
인수의 순서의 자유로운 변경도 가능하다.

라는 장점이 있고

원래부터 인수가 많은 경우나 생략 가능한 인수가 많고, 생략 패턴에 다양한 조합이 있는 경우에 쓴다.
*/