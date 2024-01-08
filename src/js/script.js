'use strict';

//task 1
const line1 = prompt('enter first line');

const line2 = prompt('enter second line');

const line3 = prompt('enter third line');

const allLines = line3 + " " + line2 + " " + line1;
// не нравилось что в консоль выводит без пробелов, прибег к данному способу, прошу дать фидбек на такой метод создания
// не влияет ли он на "чистоту" кода или лучше использовать другой метод
console.log(allLines)

//task 2
// использовал метод преобразования строчных данных в чисельный массив с помощью сплита, а затем с помощью джоин
// вернул массив чисел в строчное значение разделенное пробелами по наводкам гугла и ГПТ
const fiveDigitNumber = prompt('enter five digit number');

const digitArray = fiveDigitNumber.toString().split('').join(' ');

console.log(digitArray);

//тут потестил и поигрался с тем, что ребята в группе писали, потому что сразу не въехал в суть этого метода
//но уже вроде разобрался, тут все куда проще заменой пустых мест на пробелы
const fiveDigitNumber2 = prompt('enter five digit number again');

const digitArray2 = fiveDigitNumber2.toString().replaceAll('', ' ')

console.log(digitArray2)