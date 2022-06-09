//<script type="text/javascript">
    var Member = function(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        
        this.getName = function(){
            return this.lastName + '' + this.firstName;
        }
};
//생성자는 객체를 초기화 시켜 주는 것으로, 특수함 메소드(함수)로 지정한다.
//위와 같이지정해 주었다.

/*
위 생성자에 초기화 처리를 한 부분의 프로퍼티는
this.firstName = firstName;
this.lastName = lastName;
this.getName = function()
이고
this는 자기 자신 객체를 가르킨다. 생성자에 의해 생성된 인스턴스를 의미(자바랑 비슷한가?? 자바에서는 인수값이 겹쳐서 쓰는걸로 기억하는데...)
this.프로퍼티명 = 값;

자바스크립트에는 메소드라는 독립개념이 없어서 함수의 객체로써 값이 프로터피의 메소드로 간주됨.
즉 getName이라는 프로퍼티의 값에 익명함수를 정의한 것이 메소드로 간주되는것.
*/

var mem = new Member('철수', '강');
/*
원본 객체는 Member이고 이 객체에서는 prototype으로 접근이 된다.
프로토타입의 정의는 어떤 객체의 원본이 되는 객체로, Member의 프로토타입은 Member의 원본이 되는 객체이다.
자바스크립트는 class가 없고, prototype만 있어 프로토타입 베이스 객체지향이다.
그러나 mem는 Member의 하위객체 이므로 __proto__로 접근한다

약간 Member가 부모객체 mem이 자식객체같은 느낌이라고 구글링은 그러고
prototpye자체를 그냥 유전자라고 보라고 한다.
뭐 예를 들어
Array.sort()가 있다면, 우리는 Array의 프로토타입에 접근해 보면 sort()가 있음을 알 수 있다.
*/
console.log(mem.getName());
//</script>