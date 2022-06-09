var value = [1, 2, 3, 4, 5];
function deleteElement(value){//인수를 배열이라는 객체로 참조형을 주었다.
    value.pop();
    return value;
}

console.log(deleteElement(value));
console.log(value);

/*
참조형의 경우는 다름을 알 수 있다. 
인수로 참조형을 주면 그 참조형 객체의 주소값이 넘어간다. 그래서 그 주소값에 해당하는 로컬변수에만 해당하는 것이 아니다.
즉 참조형은 주소값이 넘어가므로 로컬 변수 뿐만 아니라 글로벌 변수에도 영향을 미친다.
*/