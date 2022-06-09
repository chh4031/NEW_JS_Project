var ary = ['java', 'AJ', 'ASP.NET'];
console.log(delete ary[0]);//delete는 해당값이 삭제가 되면 true 반환
console.log(ary);//단 배열에서 해당 요소가 삭제만 될 뿐 앞으로 당겨지거나 하지 않는다.
console.log(ary[0]);
console.log(ary);

console.log("----------------------------");

var obj = {x:1, y:2};
console.log(delete obj.x);//true
console.log(obj.x);//undefined

console.log("----------------------------");

var obj2 = {x:obj, y:2};
console.log(delete obj2.x);//true
console.log(obj2);//y:2

console.log("----------------------------");

var data1 = 1;
console.log(delete data1);//false 명시적으로 선언된 변수는 삭제할 수 없다.
console.log(data1);//1

console.log("----------------------------");

data2 = 10;
console.log(delete data2);//true