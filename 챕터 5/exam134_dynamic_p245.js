var Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};
//생성자 함수로 객체를 초기화

var mem = new Member('철수', '강');//mem객체 만들기
mem.getName = function(){
    return this.lastName + '' + this.firstName;
}//mem 객체에 새로운 메서드를 지정해줌.

console.log(mem.getName());
//동적으로 메소드를 추가할 수 있다는 것을 의미한다.