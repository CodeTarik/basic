
//Aufgabe 01 - Variante No.1
function fullName(name, surname){
    return name + '' + surname;
}

console.log(fullName('Max', ' Mustermann'));


//Variante No.2
function fullName1(name, surname) {
    let full = name + '' + surname;
    console.log(full);
    return full;
}

fullName1('Max', ' Mustermann');

//Aufgabe 02
function capitalizeLetters(fruit){
    return fruit.toUpperCase();
}

console.log(capitalizeLetters('bAnanE'));


//Aufgabe 04
function formatToCurrency (decimal) {
    return decimal.toFixed(2).replace('.' , ',') + ' €'; // '.',',' - the period is replaced by a “comma”
}

console.log(formatToCurrency(0.5));



//Aufgabe 03


console.log(countCharacters('banana'));
function countCharacters(number){
    return number.length;
}    



function countCharacters(number){
    let symbol = number.length;
    console.log(symbol);
    return symbol;
}

