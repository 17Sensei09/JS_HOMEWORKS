'use strict'

const question = +prompt('Hello, how many hours do you want to convert?');
const hours_to_seconds = question * 3600;
alert('Convertation result:'+ hours_to_seconds);
console.log(question);
console.log('Convertation result:',hours_to_seconds);