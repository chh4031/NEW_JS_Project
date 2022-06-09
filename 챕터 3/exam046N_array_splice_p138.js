var data = ['a','b','c','d','f'];

console.log(data.splice(3,2,'aa','bb'));
console.log(data);

console.log(data.splice(3,2));
console.log(data);

console.log(data.splice(1,0,'cc'));//0이면 해당 자리에 그냥 추가해버림
console.log(data);