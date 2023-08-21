/*
    Node.js는 API 대부분이 비동기 방식으로 제공한다.
*/

const fs = require('fs');

/* 동기 방식 */
const text = fs.readFileSync('text.txt');

// console.log('text',text);
console.log('text.toString()',text.toString());
console.log('end!!');

/* 비동기 방식 */
// const text = fs.readFile('text.txt', (err, data) => {
//     if(err) {
//         return console.log(err);
//     }

//     console.log(data.toString());
// });     // 비동기 api들은 콜백 함수를 기본적으로 준다.

// console.log('end!')