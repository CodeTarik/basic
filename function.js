let discount = 50;
let price = 100;
 

//logCalculatedPrice
logCalculatedPrice(50, 500, 1.19);  // 50 = discount, 500 = price 
logCalculatedPrice(50, 400, 1.19);

// with Parameter
function logCalculatedPrice(discount, price, tax){  
    console.log((price - discount)* tax) ;  
}
// without Parameter
// logCalculatedPrice1
logCalculatedPrice1();

function logCalculatedPrice1(){
    console.log((price - discount)* 1.19);
}

