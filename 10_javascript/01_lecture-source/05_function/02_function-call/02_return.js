function hello(name) {

    return `${name}님 안녕하세요!`;

    console.log('hello?'); // 작성한다고 에러가 나진않음 하지만 작동도 안됨
}

console.log(hello('유관순'));

function func() {
    console.log('함수가 호출되었습니다.');
}

func();

console.log(func()); // undefinded 로 출력이 되긴함ㅋㅋ
