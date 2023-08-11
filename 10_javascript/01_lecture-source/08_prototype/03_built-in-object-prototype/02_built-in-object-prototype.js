// Function, String, Number을 비롯한 내장 객체들은 프로토타입에 메소드를 저장한다.
// 모든 내장 프로토타입의 상속 트리 꼭대기에는 Objecdt.prototype이 있어야 한다고 규정한다.

const num = new Number(100);

console.log(num);

console.log(num.__proto__ === Number.prototype);
console.log(num.__proto__.__proto__ === Object.prototype);
console.log(num.__proto__.__proto__.prototype === Object.prototype); // Object위에는 아무것도 없음 그러므로 False 출력


console.log(num.__proto__.__proto__.toString);
console.log(num.__proto__.toString());
console.log(num.toString());

// 내장 프로토타입은 수정이 가능하다. But 가급적 변경을 하지않는 것이 좋다
String.prototype.hello = function() {
    console.log(`hello, ${this}`);
};

"JavaScript".hello();