let discount =  50;         //Variablen werden meistens "global" definiert
let price = 500;

logCalculatedPrice();

price = 300;

//console.log((price - discount) * 1.19); //so ist es zu umständlich, it is too cumbersome

logCalculatedPrice();

function logCalculatedPrice(){      //erst wird die Funktion gelesen und anschließend wird es ausgeführt
    console.log((price - discount) * 1.19);
}