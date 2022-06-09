var Member = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
};

var mem = new Member('인식', '정');

Member.prototype.getName = function(){
    return this.lastname + ' ' + this.firstname;
};
//위와 같이 new로 새로운 객체를 생성하고, 그 이후에 프로토타입에 메서드를 지정해 주어도 잘 작동한다.

console.log(mem.getName());
//이런 과정을 암묵적 참조라 하고 mem이란 객체에서 Member의 prototype 객체 안의 getName()메소드를 참조하고 있다.
//즉 Member 객체 프라퍼티 값에 없을 경우에 prototype 객체로 들어가서 그 값을 찾아낸다.