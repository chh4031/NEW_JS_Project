//인수의 수를 체크 안한다는 것은 인수의 수가 0개일수도 있다. 아래는 0개일시 처리과정 코드이다.

function getTriangle(base, height){
    if(!base){
        base = 1;
    }
    if(!height){
        height = 1;
    }
    return base * height / 2;
}

console.log(getTriangle(5));

/*
즉 현재 함수호출과정에서 base에 해당하는 첫번째 인수값만 주어서 두번째 인수값을 받지 못하는 경우가 발생했다.
그래서 함수 안에서 !height를 통해 height의 값이 정의되지 않으면 false의 값이 되는데 !로 인해 true이므로 해당 if문은 실행된다.
그래서 값을 받지 못하는 경우 인수값을 직접 정의 해주고 있다. 

또한 마지막 인수부터만 생략이 가능하고 중간이나 처음 인수는 생략이 불가능 하다.
*/