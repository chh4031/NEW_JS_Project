var x = 1;
var y = 0;
try{
    if(y === 0){
        throw new Error('0으로 나눌려고 했다.');//에러를 발생시키는 예제
    }
    var z = x/y;
}
catch(e){
    console.log(e.message);//throw 객체에서 메시지 값을 받아 출력한다.
}