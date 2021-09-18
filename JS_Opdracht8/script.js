const checkNumber = function(number) {
    if (number > 100) {
        return true;
    }
    else {
        return false;
    };
};

let result;
result = checkNumber(101);
console.log(result);
// result: true
result = checkNumber(50);
console.log(result);
// result: false

// using multiple return statements.
const bouncerBot = function(maxPeople, curPeople, age) {
    if (age < 18) {
        return "This is a Club for Adults.";
    };
    if (curPeople >= maxPeople) {
        return "It's too busy now, come back later."
    };
    return "Come in and have fun!";
};

let result2;
result2 = bouncerBot(100, 99, 16);
console.log(result2);
result2 = bouncerBot(100, 100, 20);
console.log(result2);
result2 = bouncerBot(100, 99, 20);
console.log(result2);

// using a single return statements.
const bouncerBot2 = function(maxPeople, curPeople, age) {
    let message;
    if (age < 18) {
        message = "This is a Club for Adults.";
    }
    else {
        if (curPeople >= maxPeople) {
            message =  "It's too busy now, come back later."
        }
        else {
            message = "Come in and have fun!";
        };
    };
    return message;
};

let result3;
result3 = bouncerBot2(100, 99, 16);
console.log(result3);
result3 = bouncerBot2(100, 100, 20);
console.log(result3);
result3 = bouncerBot2(100, 99, 20);
console.log(result3);


const calcAvg = function(num1, num2, num3 ,num4 ,num5) {
    return (num1 + num2 + num3 + num4 + num5) / 5
};

let result4;
result4 = calcAvg(1,2,3,4,5);
console.log(result4)
result4 = calcAvg(2,4,6,4,4);
console.log(result4)
result4 = calcAvg(15,26,38,43,54);
console.log(result4)
result4 = calcAvg(11,22,33,44,55);
console.log(result4)
