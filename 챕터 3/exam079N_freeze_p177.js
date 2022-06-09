//불변 객체의 정의

'use strict';
var pet = {
    type:'pet1',
    name: 'name1'
};

// Object.preventExtensions(pet);
// Object.seal(pet);
// Object.freeze(pet);

pet.name = 'name2';
delete pet.type;
pet.weight = 42;

console.log(pet);
//주석 제거시 아래쪽 추가 삭제 변경 구문들이 모두 오류가 발생.