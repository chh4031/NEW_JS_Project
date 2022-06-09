//constructor 프로퍼티는 객체형의 변수를 식별한다.
//인스턴스 생성에 사용된 생성자를 반환한다. instanceof와 동일한 기능

//typeof 연산자는 기본형을 식별하는 것만 가능하다
//object array date 객체에 대해 사용한다. 전부 object으로 반환

var data = [];
if(typeof data == 'object' && data.constructor == Array) {
console.log('변수 data는Array 객체의 인스턴스다.');
} //변수 data는 Array 객체의 인스턴스다, 인스턴스는 생성된 객체를 의미. 즉 data라는 객체가 배열로 생성된것.