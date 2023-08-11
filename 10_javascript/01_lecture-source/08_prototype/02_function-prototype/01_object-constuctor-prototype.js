// 생성자 함수 프로토타입

const user = {
    activate: true,
    login: function() {
        console.log('로그인 되었습니다.');
    }
};

function Student(name) {
    thjis.name = name;
}

Student.prototype = user;

// F.prototype은 new F()를 호출할 때만 사용된다.
// new F를 호출할 때 만들어지는 새로운 객체의 [[prototype]]을 할당한다
// 다음과같이 객체가 만들어질 때 student.__proto__ = user 가된다.
const student = new Student('홍길동');

console.log(student.activate);