// 정적 타입 언어 (static typed language)
// : C, C++, Java, Kotlin 등
// 정적 타입 언어?
// 1. 변수를 선언할때 데이터 타입을 사전에 선언해야 한다.
// 2. 변수의 타입을 변경할 수 없으며, 변수에 선언한 타입에 맞는 값만 할당할 수 있다.
// 3. 컴파일 시점에 타입 체크를 수행하는 데 타입의 일관성을 강제하여 런타임 에러를 줄인다.

// 동적 타입 언어 (dynamicaaly typed language)
// : JS, python 등
// 동적 타입 언어?
// 1. 타입을 변수를 선언할 시 사용하지 않는 언어
// 2. 타입이 아닌 할단에 의해 타입이 결정되는 언어(타입 추론)
// 3. 재할당에 의해 변수 타입을 언제든지 동적으로 변경할 수 있다.
// 4. 변수의 값이 언제든 변경될 수 있기 때문에 값을 확이하기 전에는 타입에 대한 확신을 가질 수 없다.
// 5. 개발자의 의도와 상관 없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환 되기도 한다. (JS가 어려운 이유!)
// 6. 유연성은 높지만 신뢰성이 떨어진다.
// 7. 이로 인해 변수를 사용하기 전 데이터 타입 타입 체크를 하기도 하는데 이는 번거롭기도 하고 코드 양이 많이 증가하게 된다.

var test; // undefinded 타입이 들어감
console.log(typeof(test));

test = 1;    // number 타입이 들어감
console.log(typeof(test));

test = 'JavaScript'; // string 타입이 들어감
console.log(typeof(test));

test = null; // object 타입이 들어감
console.log(typeof(test));

test = {}; // 객체 -> object 타입
console.log(typeof(test))

test = [1,2,3]; // 배열 -> object 타입
console.log(typeof(test))

test = function() { // 함수 -> object
    console.log('hello world');
};
console.log(typeof(test))
test(); 
