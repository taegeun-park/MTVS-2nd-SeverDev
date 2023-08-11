//옵셔널 체이닝 연산자
// ES11에서 도입된 연산자로 좌항의 피연산자가 null또는 undefined인 경우 undefindedr를 반환하고
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다

// var obj = null;

// var val = obj.value;

// console.log(val);
// TypeError: Cannot read properties of null (reading 'value')


var obj = null;

var val = obj?.value;

console.log(val);

var str = null;
var len = str && str.length; // <?.> 옵셔널 체이닝 연산자가 이코드를
var len = str?.length; // 이렇게 쓸 수 있게 해줌

console.log(len);