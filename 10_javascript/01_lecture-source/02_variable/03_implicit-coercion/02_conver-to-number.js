// 숫자 타입으로 변환
console.log(10 - `5`);
console.log(10 * `5`);
console.log(10 / `5`);
console.log(10 % `JavaScript`);

console.log(10 > `5`);

// +단항 연산자는 피연산자가 숫자 타입의 값이 아니면 숫자 타입으로 암묵적타입 변환 수행
console.log(+ ``); // 0 출력됨
console.log(+'1');
console.log(+'JavaScript'); // NaN
console.log(+true); // 1
console.log(+false); // 0
console.log(+null);  // 0
console.log(+undefined);  // NaN
//console.log(+Symbol());  // Error
console.log(+{}); 
console.log(+[]); // NaN
console.log(+function() {}) // NaN 