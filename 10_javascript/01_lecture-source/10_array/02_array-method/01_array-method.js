// 배열 메소드

const arr = [];
console.log(arr.constructor === Array);
console.log(Object.getPrototypeOf(arr) === Array.prototype);

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];

// Array.prototype.indexOf : 배열에서 요소가 위치한 인덱스를 리턴
// 0번지 부터 차례대로 탐색하다 원하는 값이 있으면 Stop
console.log(`foodList.indexOf('물회') ${foodList.indexOf('물회')}`);
console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회', 1)}`);
console.log(`foodList.indexOf('삼겹살') ${foodList.indexOf('삼겹살')}`);

console.log(`foodList.lastIndexOf('물회') ${foodList.lastIndexOf('물회')}`);
console.log(`foodList.includes('삼겹살') : ${foodList.includes('삼겹살')}`);

//push : 배열의 맨 뒤에 요소 추가
//pop : 배열의 맨 뒤에 요소 제거후 반환
const chineseFood = ['짜장면', '짬뽕', '우동'];

console.log(`push 전 chineseFood : ${chineseFood}`);

chineseFood.push(`탕수육`);
chineseFood.push('양장피');

console.log(`push 후 chineseFood : ${chineseFood}`);

console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);
console.log(`pop() : ${chineseFood.pop()}`);

//unshift : 배열의 맨 앞에 요소 추가
//shift : 배열의 맨 앞 요소 제거 후 반환

const chickenList = ['양념치킨', '후라이드', '파닭'];

console.log(`unshift 전 chinkenList : ${chickenList}`);

chickenList.unshift('간장치킨');
chickenList.unshift('마늘치킨');

console.log(`unshift 후 chinkenList : ${chickenList}`);

console.log(`shift() : ${chickenList.shift()}`)
console.log(`shift() : ${chickenList.shift()}`)
console.log(`shift() : ${chickenList.shift()}`)

//concat : 두 개의 배열을 하나로 결합
const idol1 = ['아이브', '오마이걸'];
const idol2 = ['트와이스', '에스파'];
const idol3 = ['블랙핑크', '레드벨벗'];

const mix = idol1.concat(idol2);
const mix2 = idol3.concat(idol1, idol2);

console.log(`idol1 기준으로 idol2 배열을 concat : ${mix}`);
console.log(`idol3 기준으로 idol1, idol2 배열을 concat : ${mix2}`);

//slice : 배열의 요소 선택 잘라내기
//splice : 배열의 index 위치의 요소 제거 및 추가
const front = ['html', 'css', 'javascript', 'react'];

console.log(`front.slice(1,3) : ${front.slice(1,3)}`);
console.log(`slice 후 front : ${front}`);

//3번째 요소를 제거하고, 1번째에 'vue'를 추가
console.log(`front.splice(3, 1, 'vue') : ${front.splice(3, 1, 'vue')}`);
console.log(`front : ${front}`);

//join : 배열을 결합하여 문자열로 반환
const snackList = ['사탕', '초콜렛', '껌', '과자'];
console.log(`snackList : ${snackList}`);
console.log(`snackList.join() : ${snackList.join()}`);
console.log(`typeof snackList.join() : ${typeof snackList.join()}`);

console.log(`snackList.join() : ${snackList.join('/')}`);
console.log(`typeof snackList.join() : ${typeof snackList.join('/')}`);

//reverse : 배열의 순서를 뒤집음
console.log(`reverse : ${[1, 2, 3, 4, 5].reverse()}`);
