"use strict";
let credits;
const deliveryCountry = prompt ('Введите название Вашей страны');
const deliveryCountryNormalized = deliveryCountry.toLowerCase();

switch(deliveryCountryNormalized){
    case 'китай':
        credits = 100;
        break;
    
    case 'чили':
        credits = 250;
        break;        
    
    case 'австралия':
        credits = 170;
        break; 

    case 'индия':
        credits = 80;
        break; 

    case 'ямайка':
        credits = 120;
        break; 
      
        default:
        alert ('В вашей стране доставка не доступна');
        break; 
}

alert (`Доставка в ${deliveryCountry} будет стоить ${credits} кредитов`);
    
