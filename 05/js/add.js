let num1 = parseInt(prompt('첫 번째 숫자는? '));
let num2 = parseInt(prompt('두 번째 숫자는? '));
addNumber(num1, num2);


function addNumber(a, b) {
    let sum = a + b;
    alert(`두 수를 더한 값은 ${sum}입니다.`);
}

