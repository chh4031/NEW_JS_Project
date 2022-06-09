var scope = 'Global Variable';

function checkScope() {
    var scope = 'Local Variable';
    var f_lit = function () {
        return scope;
    };
    console.log(f_lit()); // Local Variable
    var f_con = new Function('return scope;');
    console.log(f_con()); // Global Variable
}
checkScope();

/*
vs code 상에서는 오류가 뜨지만 우리가알아야 할 것은
함수 리터럴 방식은 로컬 변수를 사용한다는 것이고
Function 생성자 방식은 글로벌 변수를 사용한다는 것이다
*/