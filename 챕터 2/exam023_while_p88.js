var x = 8;
while(x < 20){//전치 판단
    console.log('x의 값은 ' + x);
    x++;
}

var y = 8;
do {//후치 판단
    console.log('y의 값은 ' + y);
    y++;
}while(y < 20);
//do while은 최초 한번은 꼭 실행시키고 반복을 한다는 점을 알아야 한다.(시험에 존나 잘나옴.!!!)
//무한루프도 조심해야 한다.