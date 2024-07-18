
console.log(logCalculatedPrice(50, 500,));

function logCalculatedPrice(price, discount) {
    let value = (discount - price) * 1.19;

    console.log("vor return");  // hier wird das Wert wieder zurück gegeben
    return value;       // return-Wert ist das was zurückgegeben wird // return value is what is returned
    console.log("nach return"); // ab dem return ist auch die zurück Übermittelung abgeschlossen   
}







