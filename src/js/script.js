'use strict';

const userNum = +prompt('Enter your number');
if(isNaN(userNum) || userNum < 1){
    console.log(NaN)
}else{
    let divisor = 2;
    while(divisor <= userNum){
        if(userNum % 2 === 0){
            console.log('Lowest divisor:', divisor);
            break;
        }
        divisor++
    }
    if (divisor > userNum){
        console.log('Your number is divisor')
    }

}