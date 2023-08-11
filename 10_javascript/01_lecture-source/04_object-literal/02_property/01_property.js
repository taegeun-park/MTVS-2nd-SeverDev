// 객체는 프로퍼티의 집합이다.
// 프로퍼티는 키와 값으로 구성된다.

var stuent = {
    name: '유관순',
    age: 16,
};

console.log(stuent);

// 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 => 프로퍼티 값에 접근하기 위한 식별자
var obj = {
    normal: 'normal value', // 문자열로 취급됨
    '@ s p a c e @': 'space value', // 공백있는 리터럴을 하고싶으면 리터럴로해야함
    '':'', // 권장하지않음
    0: 1, // 숫자 키는 내부적으로 문자열로 반환된다.
    var: 'var', // 권장하지 않음
    normal: 'new value' // 이미 존재하는 키를 중복 선언하면 나중에 선언한 프로퍼티로 덮어 쓴다
};

console.table(obj);

var key = 'test';

// obj.key = 'test value'; // 키를 문자열로써 사용함
obj[key] = 'test value'; // 이때는 변수 key 의 값을 가져옴

//console.log(obj.'@ s p a c e @'); // 공백이 있는 프로퍼티는 .문법을 사용못함
console.log(obj['@ s p a c e @']);  // 이렇게 사용할 수 있음 []문법은 가능

console.table(obj);