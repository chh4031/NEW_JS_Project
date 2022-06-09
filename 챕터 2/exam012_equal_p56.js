var x = 1;
var y = x;
var x = 2;
console.log(y);//x y가 별개의 값으로 인식되어서 y의 값의 변화는 없다.

var data1 = [0, 1, 2];
var data2 = data1;
data1[0] = 5;
console.log(data2);
/* 참조형의 경우는 다르다 .
data1과 data2의 배열이 참조하는 주소는 같다.
그래서 data1의 주소값에 있는 값이 data2에 들어간다.
그러므로 data1 주소값에 있는 데이터값이 달라지면 data2도 같은 주소를 참조하므로 똑같이 데이터값이 바뀐다.
*/