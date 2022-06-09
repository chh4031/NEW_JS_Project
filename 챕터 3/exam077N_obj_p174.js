//create로 객체 생성

var obj = {
    x:1,
    y:2,
    z:3
};

var obj2 = new Object();
obj2.x = 1;
obj2.y = 1;
obj2.z = 1;

var obj3 = Object.create(Object.prototype,{
    x: {value: 1, writable: true, configurable: true, enumerable:true},
    y: {value: 1, writable: true, configurable: true, enumerable:true},
    z: {value: 1, writable: true, configurable: true, enumerable:true}
}
);
