'use strict'

let question = prompt('Hello, how many hours do you want to convert?');
parseFloat(question);
let hours_to_seconds;
hours_to_seconds = question * 3600;
alert('Convertation result:'+ hours_to_seconds);
console.log(question);
console.log('Convertation result:',hours_to_seconds);