//프로토타입의 삭제
var Member = function(){};
Member.prototype.sex = '남자';

var mem1 = new Member();
var mem2 = new Member();

console.log(mem1.sex + '|' + mem2.sex);
mem2.sex = '여자';
console.log(mem1.sex + '|' + mem2.sex);
delete mem1.sex;
delete mem2.sex;
console.log(mem1.sex + '|' + mem2.sex);

/*
mem1과 mem2의 각 객체의 sex 프라퍼티의 삭제는 상위 프로토타입 객체의 삭제가 아니다.
즉 해당 프라퍼티의 값은 각각의 객체에 저장되며 (고유값사용) 삭제도 프로토타입 객체에서의 삭제가 아닌
자기 객체에서의 삭제가 됨을 알 수 있다.
맨 아래 코드를 보면 알 수 있듯이 mem1과 mem2가 가진 해당 프라퍼티의 값이 사라졌는데도 필요로해서 선언이나 호출될 경우
상위 프로토타입 객체에서 해당값을 가져와서 쓴다.(참조해서) 그러므로 결과가 디버그콘솔창과 같이 나온다.
프라퍼티의 삭제는 객체 단위로 이루어진다라는 것을 알 수 있다.
그런데 mem1객체에는 sex라는 프라퍼티가 존재하지 않으므로(상위프로토타입에서 참조해서 사용하므로) delete 연산자 자체는 아무 기능도 하지 않는다.
만약 프로토타입 객체의 프라퍼티를 삭제하면 하위 객체로 생성된 프라퍼티도 삭제된다.
*/