'use strict';
/*столкнулся с тем, что при сложении мне консоль выдавала просто 23, пришел к тому, что промпт определяет
типа данных как строчный, по этому с помощью функции парс флоат конвертировал строки в чисельный формат для получения
результата
 */
const number1 = parseFloat((prompt('Enter first number')));

const number2 = parseFloat((prompt('Enter second number')));

console.log('addition result'  + number1 + '+' + number2 + '=' +(number1+number2));

console.log('substraction result'  + number1 + '-' + number2 + '=' +(number1-number2));

console.log('multiplication result'  + number1 + '*' + number2 + '=' +(number1*number2));

console.log('division result'  + number1 + '/' + number2 + '=' +(number1/number2));