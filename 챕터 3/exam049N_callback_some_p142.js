var data = [2,3,4,5];
var result = data.some(function(value, index, array){
    return value % 3 === 0;
});

if(result){
    console.log('3의 배수 발견');
}else{
    console.log('3의 배수 못찾음');
}

//3의 배수가 있는지 some으로 확인