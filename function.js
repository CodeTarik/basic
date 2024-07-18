
 
logCalculatedPrice(50, 500, 1.19);  // 50 = discount, 500 = price 

logCalculatedPrice(50, 400, 1.19);

function logCalculatedPrice(discount, price, tax){  
    console.log((price - discount)* tax) ;  
}

