x = 1;

if(x === 1){
     console.log('HI');
}
x === 1 && console.log('HI &&'); // &&에서 좌측 식이 false이면 우측식은 실행하지 않는다. 이 식은 자체가 false가 되어 오른쪽식이 실행된다
x === 1 || console.log('HI ||'); //||에서 좌측 식이 true이면 우측식은 실행되지 않는다. 이 식자체가 true가 된다.