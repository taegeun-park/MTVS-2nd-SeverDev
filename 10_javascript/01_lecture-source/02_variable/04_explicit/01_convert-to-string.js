// 명시적 타입 변환
// 1. String 생성자 함수를 이용하는 방법
// 2. 빌트인 메소드를 사용하는 방법

// 객체의 함수형 프로퍼티를 메소드라고 한다.

function test() {} // 함수
function Test() {} // 생성자 함수
var obj = { test : function() {}} // 메소드 : 객체 안에 작성된 함수

new Test();

new String();

console.log(String(10)); // 문자열로 바꿔줌 : "10"
console.log(String(true)); // 문자열로 바꿔줌 "true"

// 2. Object.prototype.toString 메소드 사용 -> 상속을 이용하기 위한 방법
console.log((10).toString());
console.log(typeof (10).toString());