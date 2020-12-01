"use strict";
let credits;
const deliveryCountry = prompt ('Введите название Вашей страны');
// const deliveryCountryNormalized = deliveryCountry.toLowerCase();


if (deliveryCountry === null){
    console.log ('Покупка отменена пользователем');
    alert('Покупка отменена пользователем');
} else{
    switch(deliveryCountry.toLowerCase()){
        case 'китай':
            credits = 100;
            alert (`Доставка в ${deliveryCountry} будет стоить ${credits} кредитов`);
            break;
        
        case 'чили':
            credits = 250;
            alert (`Доставка в ${deliveryCountry} будет стоить ${credits} кредитов`);
            break;        
        
        case 'австралия':
            credits = 170;
            alert (`Доставка в ${deliveryCountry} будет стоить ${credits} кредитов`);
            break; 

        case 'индия':
            credits = 80;
            alert (`Доставка в ${deliveryCountry} будет стоить ${credits} кредитов`);
            break; 

        case 'ямайка':
            credits = 120;
            alert (`Доставка в ${deliveryCountry} будет стоить ${credits} кредитов`);
            break; 
        
            

            default:
            alert ('В вашей стране доставка не доступна');      
    }
}


 
    
