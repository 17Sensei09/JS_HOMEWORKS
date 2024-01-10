'use strict';
// тут вроде через константу не выполняется никак, у нас же будет менятся ее значение при выполнении цикла, не бей :)
let sum = 0;

cycleMark: for(let i = 1; i <= 20; i++ ){
    if(i % 2 === 0){
        continue cycleMark;
    }
    sum += i
}

console.log('Sum of non pair numbers:', sum);