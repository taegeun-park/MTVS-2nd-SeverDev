// 재귀함수
// 함수가 자기 자신을 호출하는 것을 재귀 호출이라고 한다.

// 팩토리얼
// 5! = 5*4*3*2*1
// 반복문보다 빠르다
// 그러나 직관적으로 이해가 힘들고, 스택오버플로우 발생가능
// => 그래서 특정상황에만 사용하기도함

function factorial(n) {
    
    if(n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


console.log(factorial(5)); 