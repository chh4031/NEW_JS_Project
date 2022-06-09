var Member = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

var mem = new Member('철수', '강');

mem.getName = function(){
    return this.lastName + '' + this.firstName;
}

var mem2 = new Member('영희', '이');
console.log(mem.getName());
console.log(mem2.getName());

/*
mem과 mem2는 기본적으로 같은 프라퍼티를 가짐(Member객체의 것). 
단 mem에 새로 정의해줌 메서드 getName은 mem객체에서만 유효한 것이지, mem2에서는 유효하지 않음.
즉 새로 정의한 것은 해당 객체에서만 유효한 것이다.
*/