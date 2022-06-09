var data = [2,3,4,5];
var result = data.filter(function(value, index, array){
    return value % 2 === 1;
});

console.log(result);

//filter로 해당 값 찾기