// 중첩 함수

function outer() {

    var outerVal = "외부함수";

    function inner() {
        var innerVal = "내부함수";

        console.log(outerVal, innerVal);
    };

    inner();
};

// inner(); // 외부함수 안에서만 사용가능