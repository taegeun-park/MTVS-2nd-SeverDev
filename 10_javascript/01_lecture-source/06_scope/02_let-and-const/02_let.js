// 1. 변수 중복 선언 금지,
let msg = '안녕하세요';
//let msg = '안녕히게세ㅐ요';

// 2. 볼록 레벨 스코프
let i = 0;
for(let i = 0; i< 10; i++) {
    console.log (`지역변수 i : ${i}`);
}
console.log(i);

//3. 변수 호이스팅
console.log(x);
let x = 10;