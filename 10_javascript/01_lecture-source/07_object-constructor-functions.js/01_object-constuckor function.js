// 객체 리터럴에 의한 객체 생성
const student1 = {
    name: '유관순',
    age : 16,
    getInfo: function() {
        return `$(this.anme)은(는) ${this.age}세 입니다.`;
    }
};

const student2 = {
    name: '홍길동',
    age : 16,
    getInfo: function() {
        return `${this.name}(은)는 ${this.age})세 입니다.`;
    }
};

    const student3 = new student('장보고', 30);
    const student4 = new student('신사임당', 40);

    console.log(student3);
    console.log(student4);
