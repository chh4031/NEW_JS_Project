//상속 관계에서의 동적변경 가능
var Animal = function(){};

Animal.prototype = {
    walk : function(){
        console.log('종종..');
    }
};

var SuperAnimal = function(){};

SuperAnimal.prototype = {
    walk : function(){
        console.log('다다다닷!');
    }
};

var Dog = function(){};

Dog.prototype = new Animal(); //이 dog의 프로토타입 객체는 Animal객체를 상속해서 Animal객체의 프로토타입 메서드가 실행된다.
var d1 = new Dog();
d1.walk();

Dog.prototype = new SuperAnimal();//이 dog의 프로토타입 객체는 SuperAnimal객체를 상속해서 SuperAnimal객체의 프로토타입인 메서드가 실행된다.
var d2 = new Dog();
d2.walk();
d1.walk();

//즉 위의 각 Dog의 프로토타입 객체가 참조하는 객체가 다르다. 즉 상속이 다르므로 그 값으로 생성된 객체에서의 메서드 호출에서도 상속이 다르게 정의된 객체의 값으로 출력된다.