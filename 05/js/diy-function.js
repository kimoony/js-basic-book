let num1 = parseInt(prompt('첫 번째 숫자는?'))
let num2 = parseInt(prompt('두 번재 숫자는?'))
let result = add(num1, num2)

document.write(`<p>${num1} + ${num2} = ${result}입니다.</p>`);

function add (a, b) {
    sum = a + b;
    return sum;
}
