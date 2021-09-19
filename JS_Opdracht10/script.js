const checkAge = function (age) {
    if (age >= 18) return true;
    return false;
};

const greeting = function (age) {
    if (checkAge(age)) return 'Hello there';
    return 'Hello Kiddo.';
};

let check;
check = greeting(15);
console.log(check);

// vat calculations excercise 1
const getVatAmt = function (basePrice, vatPercentage) {
    return basePrice * (vatPercentage / 100);
};

const calcPriceWithVat = function (basePrice, vatPercentage) {
    let vatAmount;
    vatAmount = getVatAmt(basePrice, vatPercentage);
    return basePrice + vatAmount;
};

let PriceVat;
PriceVat = calcPriceWithVat(100,19);
console.log('Price incl. Vat :', PriceVat);

// vat calculations excercise 2
const getBasePrice = function (PriceVat, vatPercentage) {
    return (PriceVat / (100 + vatPercentage)) * 100;
};

const CalcPriceWithoutVat = function (PriceVat, vatPercentage) {
    let basePrice;
    let vatAmount;
    basePrice = getBasePrice(PriceVat, vatPercentage);
    vatAmount = PriceVat - basePrice;
    return [basePrice, vatAmount];
};

let price;
price = CalcPriceWithoutVat(605,21);
console.log('Price excl. Vat :', price[0], ' Vat amount :', price[1]);