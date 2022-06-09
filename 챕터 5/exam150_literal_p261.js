var Member = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
};

Member.prototype.getName = function(){
    return this.lastname + ' ' + this.firstname;
};

Member.prototype.toString = function(){
    return this.lastname + this.firstname;
};

/*
해당 방식은 닷 연산자를 사용한 방식의 프로토타입 객체를 정의하는 코드이다.
*/