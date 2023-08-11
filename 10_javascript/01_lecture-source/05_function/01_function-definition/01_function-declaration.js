// 함수 선언문
// -> 함수의 이름을 생략할 수 없다.

function hello(name) {
    return `${name}님 환영합니다!`;
}
console.log(hello('홍길동'));

var hello2 = function hello2(name) {
    return `${name}님 안녕하세요!`;    
}
console.log(hello2('홍길동'));

var hello2 = function hello3(name) {
    return `${name}님 안녕하세요!`;    
}
console.log(hello2('홍길동'));


var hello2 = function(name) {
    return `${name}님 안녕하세요!`;    
}
console.log(hello2('홍길동'));
