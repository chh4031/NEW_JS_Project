//객체 결합에 assgin을 사용함

let pet = {
    type : '스노우 햄스터',
    name : '귀염둥이',
    description : {
        birth : '2014-02-15'
    }
};

let pet2 = {
    type : '스노우 햄스터2',
    name : '귀염둥이2',
    description : {
        food : '해바라기'
    }
};

let pet3 = {
    weight: 42,
    photo: 'http;//'
};

Object.assign(pet, pet2, pet3);
console.log(pet);