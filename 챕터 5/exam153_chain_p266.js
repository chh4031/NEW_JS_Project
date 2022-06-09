//객체의 상속(계승이라고 책에는 나옴)
var Animal = function(){};//생성자 함수

Animal.prototype = {//프로토타입에 메서드 정의
    walk : function(){
        console.log('종종...');
    }
};
var Dog = function(){};

Dog.prototype = new Animal();//dog라는 프로토타입에 animal 객체가 들어갔다.
Dog.prototype.bark = function(){
    console.log('멍멍!..');
}

var d = new Dog();//d의 프로토타입의 객체는 animal이고, walk()는 상위 프로토타입이 원래 가진 값이며 bark()는 dog객체에서 추가된 것이다.
d.walk();
d.bark();

/*
위에서 보면 d객체에 Dog객체가 들어간다. 그래서 Dog객체가 가진 프로토타입 객체에서의 메서드인 bark()는 가지고 있고
이 dog 프로토타입이 animal객체도 암묵적으로 참조하므로 animal 프로토타입의 walk()메서드도 가져와 쓸 수 있다.

즉 자바스크립트에서의 클래스는 클래스라는 키워드만 존재하고 클래스라는 껍데기만 존재하는 것이다.
*/