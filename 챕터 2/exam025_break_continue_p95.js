var a = 0;
for(var i = 0; i <= 100; i++){
    a += i;
    if(a > 1000){
        break;
    }
}
console.log('합계값이 1000을 넘기는 순간은 ' + i);

var b = 0;
for(var j = 0; j <= 100; j++){
    if(i % 2 === 0){
        continue;//홀수만의 합계를 구하는 식
    }
    b += j;
}
console.log('합계 ' + b);

for(var k = 1; k < 10; k++){
    for(var n = 1; n < 10; n++){
        var z = k * n;
        if(z > 30){
            break;//break로 안쪽 for문만 탈출한다.
        }
        console.log(z + ' ');
    }
    console.log('\n');
}