var showMessage = new Function('msg', 'document.writeln(msg);')
//주어진 인수는 2개(가인수와 처리 내용이 한 개씩）
var triangle = new Function('base', 'height', 'return base * height / 2;');
// 주어진 인수는 3개(가인수 2개와 처리 내용 한개씩)

/*
즉 우리는 가변길이의 인수의 정의를 보면 Function 생성자 방식의 함수 선언에서 Function 객체가 요구하는 만큼
인수의 수를 변경가능하다.
*/