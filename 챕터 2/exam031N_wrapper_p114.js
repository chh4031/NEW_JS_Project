var flag = new Boolean(false);
//boolean으로 기본 데이터형을 생성했다. false로 설정

if(flag){
    console.log('flag is true');
}
//하지만 false임에도 if문이 실행된다.
//이유는 자바스크립트가 null 이외의 객체에 대해서는 true로 간주하기 때문이다.
//기본 데이터 형의 new생성자로써의 생성의 문제가 될 수 있음.