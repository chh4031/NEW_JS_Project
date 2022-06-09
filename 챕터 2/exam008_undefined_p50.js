var a;
var b = {a:12345};
var c = null;
console.log(a);//값이 정의되지 않았다. undefined
console.log(b.b);//이거도 값이 정의되지 않았다. undefined
console.log(c);//null값, 의도적으로 비어있는 값.

var k = [1, 2];
console.log(delete k[0]);
console.log(k);
console.log(k[0]);//삭제시킨 값도 정의되지 않은 undefined라고 나온다.