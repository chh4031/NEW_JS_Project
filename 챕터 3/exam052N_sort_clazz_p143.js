var classes = ['부장', '과장', '주임', '담당'];
var members = [
    {name: '남성미', clazz : '주임'},
    {name: '김준수', clazz : '부장'},
    {name: '정인식', clazz : '담당'},
    {name: '남궁민', clazz : '과장'},
    {name: '이상주', clazz : '담당'},
];

console.log(members.sort(function(x, y){
    return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
}));