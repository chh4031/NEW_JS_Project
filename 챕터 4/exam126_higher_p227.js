//함수의 인수도 함수인 고차함수
function arrayWalk(data, f){//넘겨받은 함수 showElement를 객체로 f로 지정된다.
    for (var key in data){//key의 값은 배열의 인덱스가 된다 0 ~ 배열의 길이.    
        f(data[key], key);//사실상 showElement(data[key], key)값일지도.
    }
}

function showElement(value, key){//value랑 key랑 반대로 출력해서 좀 헷갈릴 수있음.
    console.log(key + ':' + value);
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, showElement);

/*
여기서는 함수에 인수에 함수가 들어가도 됨을 알 수 있다.
객체가 들어갈 수 있음을 의미하는 것으로 보인다. 아마도...
호출되는 함수 안에서 또 호출되는 함수를 callback 함수라 한다.
*/