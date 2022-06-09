var data = [2,3,4,5];
var result = data.map(function(value, index, array){
    return value * value;
});

console.log(result);
//map으로 반환값 모아 새로운 배열 생성