// 컨스트를 작성할때에는 초기화 부분이 꼭 작성되어 있어야한다.

//const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야한다.
const x = 1;

// const 키워드로 선언한 변수는 재할당이 금지된다
// x = 2;

let DISCOUNT_RATE = 0.15;           
let price =15000
let discountPrice = price * (1 - DISCOUNT_RATE);
console.log(discountPrice);

price = 10000;

//주의사항
const student = {
    name : '홍길동',
    age: 20
};

console.log(student);

student.name = "유관순"
console.log(student);

student = ()