// for in 반복문
// 객체의 모든 properties를 순회
var stuent = {
    name: '유관순',
    age: 16,
    getInfo: function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// for(var i = 0; i < 10; i++)  {};

for(var key in student) {
    console.log(`key : ${ key }`);
    console.log(`value : ${ student[key] }`);
}