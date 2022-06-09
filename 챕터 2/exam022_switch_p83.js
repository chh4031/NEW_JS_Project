var rank = 'D';
switch(rank) {
    case 'A' :
        console.log('A');
        break;

    case 'B' :
        console.log('B');
        break;

    case 'C' :
        console.log('C');
        break;

    case 'D' :
        console.log('D');
        break;

    default :
        console.log('F');
        break;
}

/* switch 연산의 주의점
break라는 구문이 없으면 다른 case까지 모두 실행될 수 있다.
switch 문은 기본적으로 ===연산이라는 것을 알아야 한다.
var a = '0';
switch(a){
    case 0;
}
일때 case 0은 실행되지 않는다는 점을 알아야한다.
*/

var J = '0';
switch(J){
    case 0:
        console.log("case 0")
}//===연산으로 비교하므로 처리가 되지 않는다.