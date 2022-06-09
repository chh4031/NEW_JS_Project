//스코프 체인에 대해
var y = 'Global';//스크립트 전체의 Global 객체
function outerFunc(){// 외부 함수의 Call 객체
    var y = 'Local Outer';

    function innerFunc(){//내부 함수의 Call 객체
        var z = 'Local Inner';
        console.log(z);
        console.log(y);
        console.log(x);
    }
    innerFunc();
}
outerFunc();

/*
이 코드는 각 변수에 해당하는 값들이 어느 객체 있는지를 알아보는 것이다.
이러한 구성을 변수의 스코프 체인 이라 카는데 잘보면
콘솔로그에서 
z 값은 바로 해당 함수에서(innerFunc)에서 찾아서 바로 출력시킨다
y 값은 innerFunc에 없으니깐 바로 위의 함수 outerFunc로 가서 찾아본다. 근데 outerFunc에 있으므로 해당 값을 출력시킨다.
단 이미 값을 찾아서 글로벌 객체에 있는 y 변수의 값은 찾지 않는다.
x 값은 그냥 정의자체가 안되어 있어서 찾지도 않는다. 그렇게 위로 올라가면서 찾는 것을 스코프 체인이라 칸다.

이 코드의 순서는 일단 outerFunc -> innerFunc임을 알자. 

즉 . 스코프 체인은 선두의 위치하는 객체에서부터 순서대로 프로퍼티를 검색해 값을 찾으면 해당 프로퍼티가 젤 처음 발견되는 곳에서 값을 취한다.
*/