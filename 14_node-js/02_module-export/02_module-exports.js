const triangle = require('./triangle')

console.log(triangle);

const {area, perimeter} = triangle(3, 4); // 3과 4란는 값을 가지고 있는 area와 perimeter가 됨

console.log('area : ',area);    
console.log(`밑변의 3 높이가 4인 직각삼각형의 면적 : ${area()}`)