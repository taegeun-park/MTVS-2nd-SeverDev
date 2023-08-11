/* 
여러 줄 주석
여러 줄로 작성 할 수 있다.
*/
// 한 줄 주석

//숫자 타입
//자바 스크립트는 정수와 실수를 구분하지 않고 모두 숫자로 취급한다.

var integer = 10;    //값의 형태를 리터럴이라고함 
var double = 5.5;    
var negative = 10;   

console.log(10 == 10.0);
console.log(10 / 4);

// 숫자 타입이 표현할 수 있는 특수한 값
//  Infinity 양의 무한대
// -Infinity 음의 무한대
// NaN(Not a Number) 숫자가 아니기 때문에 산술 연산이 불가능하다.

console.log(10/0); //Infinity
console.log(10/-0); // -Infinity
console.log(1 * '문자열');   //NaN