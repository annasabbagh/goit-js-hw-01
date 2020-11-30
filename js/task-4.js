"use strict";
let credits = 23580;
const pricePerDroid = 3000;

let droidsQty = prompt ('Для оформления заказа, укажите количество дроидов');
let totalPrice;

if (droidsQty === null) {
    alert ('Отменено пользователем!');
} else {
    if (!Number.isNaN(Number(droidsQty)))  {
        totalPrice = droidsQty * pricePerDroid;

        if (totalPrice >= credits) {
        alert ('Недостаточно средств на счету!');
        } else {
        alert (`Вы купили ${droidsQty} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
        } 
    } else {
        alert ('Пожалуйста, введите цифровое значение');
        }
}


