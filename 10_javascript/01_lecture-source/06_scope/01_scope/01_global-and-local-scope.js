// 전역과 지역 스코프

var x = 'global x';
var y = 'global y';

function outer() {
    var z = 'outers` local z';
    
    console.log(x);
    console.log(y);
    console.log(z);

    function inner() {
        var x  = 'inner`s local x';

        console.log(x);
        console.log(y);
        console.log(z);            
    }

    inner();
}

outer();

console.log(x);
// console.log(z); //같은 스코프 내에 없기때문에 에러가 발생\
// 하위 스코프에서의 변수는 상위 스코프에서 사용할 수 없음