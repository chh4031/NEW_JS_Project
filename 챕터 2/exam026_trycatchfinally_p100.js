var i = 1;
try{
    i = i * j;//예외가 발생하는 명령
}
catch(e){//예외발생시의 변수 e
    console.log(e.message);//예외발생시 명령할것 e
}
finally{//예외 유무와 관계없이 실행되는 명령
    console.log('처리가 완료됨.');
}

console.log("----------------------------");

var a = 1;
try{
    a = 1 + akg;
}
catch(s){
    console.log(s.message);//취할 변수 s는 존재해야 하나 message가 없다고 오류가 나진 않음 또한 아무것도 입력 안될 뿐.
}
finally{
    console.log("처리 완료");
}