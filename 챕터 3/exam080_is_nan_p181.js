console.log(isNaN('hoge'));//글로벌 객체는 인수를 숫자로 바꿔서 판정해서 true
console.log(Number.isNaN('hoge'));//그러나 Number객체에서는 인수 자체가 숫자형인지 판단 엄격하게 판정해서 false