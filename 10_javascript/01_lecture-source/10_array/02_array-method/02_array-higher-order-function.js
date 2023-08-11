// 배열 고차 함수
// 고차함수 : 함수를 인자로 전달받거나 함수를 반환하는 함수

//sort : 배열을 정렬
const numbers = [];

for(let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(`정렬 전 numbers : ${numbers}`);

// 맨앞에있는 숫자로 (문자열로 취급되어) 정렬이 된다.
numbers.sort();
console.log(`정렬 후 numbers : ${numbers}`);

//숫자 오름차순 정렬
function compare(a,b) {
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

numbers.sort(compare);
console.log(`숫자 오름차순 정렬 후 numbers : ${numbers}`);

//숫자 내림차순 정렬
// numbers.number(function(a, b) {return b - a;});
numbers.sort((a,b) => b - a);
console.log(`숫자 내림차순 정렬 후 numbers : ${numbers}`);

//foreach : for문을 대체할 수 있는 고차함수
// 배열안에 존재하는 요소에 각각 내장 함수가 실행됨
const arr = [1, 2, 3, 4, 5];
arr.forEach(function(item, idex, arr) {
    // 반복을 돌고있는 요소 : item
    // 반복 회차 : idex
    // 반복하고있는 함수 : arr
    console.log(`item : ${item}`)
    console.log(`idex : ${idex}`)
    console.log(`arr : ${arr}`)
});

arr.forEach(item => console.log(item * 10));

//map : 배열 요소 전체를 대상으로 콜백함수 호출 후 반환 값들로 구성된 새로운 배열을 반환
const types = [true, 1, 'text'].map(item => typeof item);
console.log(`types : ${types}`);

const lengths = ['apple', 'banana', 'cat', 'dog', 'egg'].map(item => item.length);
console.log(`lengths : ${lengths}`); //5,6,3,3,3 의 배열이 나와야함

//filter : 배열 요소 전체를 대상으로 콜백함수 호출 후 반환값이 true인 요소로만 구성한 새로운 배열을 반환
const odds = arr.filter(item => item %2); // 트루시 값 활용
console.log(odds);

//reduce : 배열을 순회하며 각 요소에 대하여 이전 콜백 함수 실행 반환값을 전달하여
//         콜백함수를 실행하고 그 결과를 반환
arr.reduce(function(prevValue, currValue, currIndex, Array) {
    console.log(`prevValue : ${prevValue}`); //이전함수의 실행 결과값
    console.log(`currValue : ${currValue}`); //반복회차를 돌고있는 값
    console.log(`currIndex : ${currIndex}`); // 
    console.log(`Array : ${Array}`); //배열
});

const sum = arr.reduce(function(prevValue, currValue) {
    return prevValue + currValue;
});

console.log(`sum : ${sum}`);

//some : 배열 내의 일부 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환
let result = [1, 2, 3, 4, 5].some(item => item > 10);
console.log(`result : ${result}`);

result = [1,2,3,4,5].some(item => item > 3);
console.log(`result : ${result}`);

//every : 배열 내의 모든 요소가 콜백 함수의 테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환
result = [1,2,3,4,5].every(item => item > 0);
console.log(`result : ${result}`);

result = [1,2,3,4,5].every(item => item > 3);
console.log(`result : ${result}`);

//find : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백 함수를 실행하여
//       그 결과가 참인 첫번째 요소를 반환하고, 참인 요소가 존재하지 않으면 undefined를 반환
//findIndex : 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백 함수를 실행하여
//            그 결과가 참인 첫 번째 요소의 인덱스를 반환하고,
//            참인 요소가 없다면 -1을 반환
const students = [
    { name: '유관순', score: 90},
    { name: '홍길동', score: 80},
    { name: '장보고', scoer: 70}
];

result = students.find(item => item.name === '유관순');
console.log(result);
result = students.findIndex(item => item.name === '유관순');
console.log(result);
result = students.find(item => item.name === '신사임당');
console.log(result);
result = students.findIndex(item => item.name === '신사임당');
console.log(result);

result = students.find(item => item.scoer >= 60);
console.log(result);
result = students.filter(item => item.score >= 60);
console.log(result);