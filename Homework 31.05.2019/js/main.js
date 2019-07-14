"use strict";
// tapsiriq 2
function foundNum (num1, num2){
    if(num1 < 0 && num2 < 0){
        num1 = + num1;
        num2 = + num2;
    } else if (num1 < 0 || num2 < 0 ){
        num1 = num1 + 0.5;
        num2 = num2 + 0.5;
    } else if(num1 > 0 && num2 > 0 && num1 < 0.5 || num1 > 2 || num2 < 0.5 || num2 > 2 ){
        num1 = num1/10;
        num2 = num2/10;
    }
    alert(num1);
}
foundNum(-5, 3);
foundNum(5, -3);
foundNum(0.1, 3);

// tapsiriq 3
function foundResult (num1, num2){
    num2 > num1;
    for (let i = num1; i < num2; i++){
        if(i%2 == 0){
         alert(i);
        }
    }
    let result = 0;
    for (let x = num1; x < num2; x++){
        result = result + x;
    }
    alert(result);
}
