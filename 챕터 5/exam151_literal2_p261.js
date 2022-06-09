var Member = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
};

Member.prototype = {
    getName : function(){
        return this.lastname + ' ' + this.firstname;
    },
    toString : function(){
        return this.lastname + this.firstname;
    }
};

/*
해당 방식은 리터럴 표현으로 사용한 프로토타입의 객체 정의 방식이다.
앞의 코드와 차이를 보인다. 즉 prototype이라는 구문을 반복적으로 쓰지 않아도 된다는 장점이 존재한다.
*/
