// [[Prototype]] => 수정이 안되고 읽기전용이라는 뜻
// 자바스크립트는 모든 객체가 [[Prototype]]이라는 숨김 프로퍼티를 갖는다
// 이 프로퍼티 값은 null이거나 다른 객체에 대한 참조가 되는데,
// 다른 객체를 참조하는 경우 참조 대상을 프로토타입(prototype)이라고 부른다.
// 객체에서 프로퍼티를 읽으려 할 때 해당 프로퍼티가 존재하지 않는 경우 
// 자바스크립트는 자동으로 prototype에서 프로퍼티를 찾는다.
// 이것을 프로토타입 상속이라고 한다.
const user = {
    activate: true,
    login: function() {
        console.log('로그인 되었습니다.');
    }
};

const student = {
    passion: true
};

// __proto__ [[Prototype]]이라는 곳의 setter/getter 역할을 하는 프로퍼티이다.
// __proto__ 를 상속 프로토라고 한다.
student.__proto__ = user;

console.log(student.activate);
student.login();


// 프로타입 체인 (상속의 상속의 상속을 받는 , 연속되는 상속을 의미)
const ohgiraffersStudent = {
    class: 11,
    __proto__: student
};

console.log(ohgiraffersStudent.activate);
console.log(ohgiraffersStudent.passion);