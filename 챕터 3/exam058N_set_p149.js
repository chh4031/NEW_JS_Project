//중복되지 않은 값을 관리하는 set, 중복이면 무시함.

let s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);
s.add(5);//동일값 무시

console.log(s.has(100));
console.log(s.size);

for(let val of s.values()){
    console.log(val);
}

for(let val of s){
    console.log(val);
}

s.delete(100);
console.log(s.size);

s.clear();
console.log(s.size);