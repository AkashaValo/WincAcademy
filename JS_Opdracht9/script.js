//function declaration
function calcNum(number1, number2) {
    let square1;
    let square2;
    let sum;

    square1 = (number1 * number1);
    square2 = (number2 * number2);

    sum = square1 + square2;

    return sum * sum;
}

//result function declaration
console.log("Function declaration : " + calcNum(3, 3));

//function expression
const calcNum2 = function (number1, number2) {
    let square1;
    let square2;
    let sum;

    square1 = (number1 * number1);
    square2 = (number2 * number2);

    sum = square1 + square2;

    return sum * sum;
};

//result function expression
console.log("Function expression : " + calcNum2(3, 3));

//arrow function
const calcNum3 = (number1, number2) => {
    let square;

    square = ((number1 * number1) + (number2 * number2));

    return square * square ;
};

//result arrow function
console.log("Arrow function : " + calcNum3(3, 3));

//arrow function but compact
const calcNum4 = (number1, number2) => ((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2));

//result arrow function
console.log("Arrow function compact : " + calcNum4(3, 3));