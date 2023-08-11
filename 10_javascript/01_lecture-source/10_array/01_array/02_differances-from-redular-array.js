// 일반적인 배열과 다른점들

const arr = [
    '홍길동', 
    20,
    true,
    null,
    undefined,
    NaN,
    Infinity,
    [],
    {},
    function() {}
];
console.table(arr);

console.log(Object.getOwnPropertyDescriptors(arr));