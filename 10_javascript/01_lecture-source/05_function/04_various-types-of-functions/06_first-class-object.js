// 일급 객체
// 값으로 취급할 수 있는 객체를 일급객체라고 한다.
// 함수는 일급객체이다. 따라서 함수를 값으로써 취급 할 수 있다.

// 1. 변수에 저장할 수 있다.

var hello =function() {
    return "안녕하세요";
}

// 2. 오브젝트를 만들때 프로퍼티 형태로 객체에 저장할 수 있다.
var obj = { hello };

// 3. 함수의 매개변수에 전달할 수 있다. 
function repeat(func, count) {

    for(var i = 0; i < count; i++) {
        console.log(func());
    }

    // 4. 함수의 반환값으로도 사용할 수 있다.
    return function() { // 클로저 함수
        console.log(`${count}번 반복 완료!`);
    }
}

repeat(obj.hello, 5)(); // 클로저 함수를 사용한 예