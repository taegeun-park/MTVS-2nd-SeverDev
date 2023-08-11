var student = {
    name: '유관순',
    age: 16,
    test: undefined,
};

console.log(student.name === undefined);
console.log(student.height === undefined);
console.log(student.test === undefined); // 있는데 없다고 나옴 왜?

console.log("name" in student);
console.log("height" in student);
console.log("test" in student); //있어서 있따고 나옴ㅋ in 연산자를 사용하면 정확하게 있는지 확인가능
