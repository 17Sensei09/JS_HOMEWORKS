'use strict';
//с помощью дополнительных инструментов решил поиграться чтоб при вводе неверного значения окно не просто закрывалось
//а закидывало обратно на начальный вопрос, в целом принцип работы функций калькулятора уловил, c while еще разберусь
//+ поменял математические функции на фактические их символы для вывода в алерт результатов
let question;
let isValidOperation = false;

while (!isValidOperation) {
    question = prompt('Hello, what do you want to do? (add, div, mult, diff)');

    switch (question) {
        case 'add':
        case 'diff':
        case 'mult':
        case 'div':
            isValidOperation = true;
            break;
        default:
            alert('Entered wrong operation, please choose one of the given');
    }
}
const num1 = +prompt('Enter first value');
const num2 = +prompt('Enter second value')
//в этой домашке, как и 12 не получилось реализовать через константы т.к. редактор выдает ошибку
//по быстрым подсказкам редактор предложил заменить на let, как я понял это связано с тем, что мы будем получать
//динамические значения каждый раз при запросе, а не статические, поправь если не правильно понял


let calculation;
let calculationSymbol;
switch (question) {
    case 'add':
        calculation = num1 + num2;
        calculationSymbol = '+';
    break;

    case 'diff':
        calculation = num1 - num2;
        calculationSymbol = '-';
    break;

    case 'mult':
        calculation = num1 * num2;
        calculationSymbol = '*';
    break;

    case 'div':
        calculation = num1 / num2;
        calculationSymbol = '/';
    break;
}

const results = `${num1} ${calculationSymbol} ${num2} = ${calculation}`;
alert(results);
console.log(calculation);
console.log(results);


