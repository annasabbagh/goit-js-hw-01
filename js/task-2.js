"use strict";
const total = 100;
let ordered = 50;


if (ordered > total) {
    console.log('На складе недостаточно твоаров!');
} 
else {
    console.log('Заказ оформлен, с вами свяжется менеджер');
}

ordered = 20;
const message20 = ordered > total ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message20);

ordered = 80;
const message80 = ordered > total ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message80);

ordered = 130;
const message130 = ordered > total ? 'На складе недостаточно твоаров!' : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message130);

