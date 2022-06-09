//메소드는 프로토타입에 선언
var Member = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
};

Member.prototype.getName = function(){
    return this.lastname + ' ' + this.firstname;
};

var mem = new Member('인식', '정');
console.log(mem.getName());


/*
이거는 이제 생성자 초기화 할때 프라퍼티 값을 주어서 새 객체를 생성할때 사용해도 된다.
하지만 매소드까지 프라퍼티 값을 Member 객체에 주는것은 새로운 객체를 만들때 마다 해당 객체의 프라퍼티들을 복사해서 전달한다.
그래서 메모리의 사용량이 늘어나게 되므로 Member의 프로토타입 객체에 메소드를 지정하여 복사를 하지 않고도 사용할 수 있게 해준다.
mem이란 객체는 Member의 프라퍼티를 쓰는데 prototype에 정의된 것도 가져다 쓸 수 있어 메소드 사용이 가능하다.(메서드 말고 딴거도 가능)


프로토타입 객체 사용의 이점으로
1. 메모리 사용량 절감가능 -> 서버에서는 의미 X 클라이언트에만 해당한다.
2. 맴버의 추가나 변경을 객체가 실시간 인식 가능 이다.

자바스크립트에서 객체에서 해당 객체의 프라퍼티에 정의된 값이 없으면 프로토타입 객체로 들어가서 해당 값을 찾아서 쓴다. 
단 검색이 되지 않으면 자기한테 새로 추가해버린다.
*/