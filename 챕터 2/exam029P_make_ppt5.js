//Object 생성자 함수르 이용한 빈 객체 생성
var foo1 = new Object();


//객체 리터럴을 이용해 객체 생성
var foo2 = {
    name:'foo',
    age:30
}


//생성자 함수를 이용한 방식
var Person = function(name){
    this.name = name;
};
var foo3 = new Person('foo');