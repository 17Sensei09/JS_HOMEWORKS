'use strict';

let firstNum = prompt('Enter fisrt value');

let secondNum = prompt('Enter second value');

firstNum = parseFloat(firstNum);
secondNum = parseFloat(secondNum);

const sum = firstNum + secondNum;
const diff = firstNum - secondNum;
const mult = firstNum * secondNum;
const div = firstNum / secondNum;

const results = (`Entered numbers: ${firstNum} and ${secondNum} 
\n${firstNum} + ${secondNum} = ${sum}
\n${firstNum} - ${secondNum} = ${diff}
\n${firstNum} * ${secondNum} = ${mult}
\n${firstNum} / ${secondNum} = ${div}`);
// новые строки оставил для эстетики, изначально записывал условие одной строкой и по этому прибег к разделению на новые строки
// но решил что пока лучше пойти в сторону читабельности чем оптимизации кода
alert(results);
console.log(results);
