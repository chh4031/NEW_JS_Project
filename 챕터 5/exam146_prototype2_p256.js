//프로토타입의 설정
var Member = function(){};
Member.prototype.sex = '남자';//프로토타입 객체에 프로퍼티를 정의함

var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex);
mem2.sex = '여자';//객체 mem2의 sex값 변경
console.log(mem1.sex + '|' + mem2.sex);

/*
해당 값을 보면 결과값이 다름을 알 수 있다.
즉 해당 프로토타입의 객체를 참조하므로 이를 바꾸면 하위 객체의 것들도 바뀔것 같지만
실상은 해당 객체의 값만 바뀌게 된다.
즉 mem2에서 정의한 sex프라퍼티는 mem2객체에만 해당된다. mem2의 sex프라퍼티는 정의되었으므로 암묵적 참조를 하지 않는다.
그러면 mem1의 객체에서의 sex 프라퍼티는 member.prototype 객체에서 참조를 해와서 사용함을 알 수 있다.
mem1은 암묵적 참조를 사용한다.

단 프로토타입의 객체를 변경하게 되면 그 변경된 값이 암묵적 참조를 하는 객체에 반영될 수 있다.
*/