// 논리 타입으로 변환
// 자바 스크립트 엔진은 boolean 타입이 아닌 Truthy값 
// 또는 Falsy값 으로 구분한다.
// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.

if(true) {
    console.log('if(true)');
}

if(false) {
    console.log('if(false)');
}
// Falsy 값들 false, undefined, null, 0, NaN, ''(빈문자열)
if(undefined) {
    console.log('if(undefinded)');
}

if(null) {
    console.log('if(null)');
}

if(0) {
    console.log('if(0)');
}

if(NaN) {
    console.log('if(NaN)');
}

if('') {
    console.log('if("")');
}

// Truthy값들 Falsy값을 제외한 모든 값
if('JavaScript') {
    console.log('if("JavaScript")');
}