"use strict";
let total = 0;

do{
    let input = prompt('Введите число');
    if (input === null){
        break;
    }

    input = Number (input);
    if (Number.isNaN(input)){
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    total +=input;
 } while (input !== null);

 alert (`Общая сумма чисел равна ${total}`);
