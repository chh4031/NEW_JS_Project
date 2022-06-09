for(var x = 8; x < 20; x++){
    console.log('x의 값은 ' + x);
}

console.log("----------------------------");

for(var i = 1, j = 1; i < 5; i++, j++){
    console.log('I * J = '+ i*j);
}

console.log("----------------------------");

var data = { apple:150, orange:200, banana:400 };
for(var key in data){
    console.log(key + '=' + data[key]);
}//for in 반복 

console.log("----------------------------");

var data1 = [ 'apple', 'orange', 'banana' ];
for(var key1 in data1){
    console.log(data1[key1]);
}//for in 반복 배열도 동일

console.log("----------------------------");

var data2 = [ 'apple', 'orange', 'banana' ];
for(var i = 0, len = data2.length; i < len; i++){
    console.log(data2[i]);
}//배열에 넣어서 사용

console.log("----------------------------");

var data3 = ['apple', 'orange', 'banana'];
for(var key2 in data3){
    console.log(key2 + " " + data2[key2]);
}