var x = 15;
if (x > 10){
    console.log('x는 10보다 크다');
}
else{
    console.log('x는 10보다 작다');
}

console.log("______________________________")

var y = 8;
if (y > 10){
    console.log('y는 10보다 크다.');
}
else if((10 > y)||(y > 1)){
    console.log('y는 10보다 작고 1보다 크다.');
}
else{
    console.log('y는 1보다 작다.')
}

console.log("______________________________")

var z = 11;
if (z > 10){
    console.log('y는 10보다 크다.');
}
else if(z > 20){
    console.log('y는 20보다 크다.');//이미 위의 식이 조건에 맞아서 더 이상 실행되지 않는다.
}
else{
    console.log('y는 1보다 작다.')
}

console.log("______________________________")

var k = 30;
if (k >= 10){
    if(k >= 20){
        console.log('k는 20보다 크다');//중첩 if
    }
    else{
        console.log('k는 10보다 크고 20보다 작다.');
    }
}
else{
    console.log('k는 10보다 작다.');
}

console.log("______________________________")

var t = 1;
var r = 2;
if(t === 1){
    if(r === 1){
        console.log('t, r 모두 1이다.');
    }
    else{
        console.log('r는 1이 아니다.');
    }
}
else{
    console.log('t는 1이 아니다.');
}

console.log("______________________________")

var j = 1;
var h = 2;
if (j === 1)
    if(h === 1) console.log('변수 j,h는 모두 1이다.');
else
    console.log('변수 j는 1이 아니다.');//else가 두번째 if에 연결되어 있는 형태이기에 이 부분이 출력된다.