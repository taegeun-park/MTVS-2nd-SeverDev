// 파라미터 : 매개변수
// 알규먼트 : 인자
// 매개변수와 인자(인수)

function hello(name) {
    console.log(name);

    console.log(arguments); // 알규먼트는 권장되지 않음

    return `${name}님 안녕하세요!`;
}

// console.log(name);

var result = hello('홍길동');
console.log(result);

result = hello(); // 작동은 하지만 값이 넘어오지않았기 때문에 Undefinded
console.log(result);

result = hello('홍길동', '유관순'); // 초과되는 인자는 무시됨
console.log(result);

//기본값 적용하기
function hi(name = '아무개') {
    return `${name} 안녕~`;
}

result = hi();
console.log(result);