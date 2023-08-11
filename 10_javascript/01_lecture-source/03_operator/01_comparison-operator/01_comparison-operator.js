// 비교 연산자
// 동등/일치 비교 연산자
// 동등 비교 (==, !-) : 암묵적으로 타입 변환을 통해 타입으로 일체시킨 후 같은 값인지 비교
// 일치 비교 (===, !==) : 타입과 값이 모든 ㅇ

console.log(`1 == '1`);
console.log(`1 == ${ true}`);
console.log(`1 === '1`);
console.log(`1 === 'true`);

console.log(`1 =='0' : ${ 0 == '0'}`);
console.log(`1 ==false : ${ 0 == false}`);
console.log(`1 =='' : ${ 0 == ''}`);

console.log(`null == undefined : ${ null == underfined}`);
console.log(`null == undefined : ${ null == underfined}`);

//NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN == NaN : ${ NaN == NaN}`);
console.log(`NaN === NaN : ${ NaN == NaN}`);
console.log(`Number.isNaN(NaN) : ${ NaN == NaN}`);

console.log(`'hello' === 'hello' : ${ 'hello' === hello}`);
console.log(`'apple' === 'banana' : ${ 'hello' === hello}`);



