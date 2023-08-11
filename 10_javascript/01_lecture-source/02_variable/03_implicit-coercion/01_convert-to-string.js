// 문자열 타입으로 변환

console.log(10 + '20');

console.log(`10 + 20 : ${10 + 20}`); 

console.log(1 + ``); // 문자열 타입 묵시적으로 "1" 을 의미한다.

console.log(NaN + ``); // 문자열 NaN이 출력됨
console.log(Infinity + ``); // 문자열 Infinity 출력
console.log(true + ``); // 문자열 true 출력
console.log(null + ``); // 문자열 null 출력
console.log(undefined + ``); // 문자열 undefined 출력
// console.log(Symobol() + ``); // 에러 발생 ReferenceError: Symobol is not defined
console.log({} + ``); // [object Object] 라는 문자열이 나옴 -> 기본적으로 정해진 문자열이 있음
console.log([] + ``); // 아무것도없는 문자열이 나옴
console.log([1,2,3] + ``); // 1,2,3이 들어간 문자열이 나옴
console.log(function() {} + ``); // 문자열 function() {} 출력 
console.log(function() {});