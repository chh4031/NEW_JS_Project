var ary = [5, 25, 10];

console.log(ary.sort());//문자열의 배열 정렬
console.log(ary.sort(function(x, y){
    return x - y;
}));//배열의 정렬을 사용자가 함수값을 주어서 정렬