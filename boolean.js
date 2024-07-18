let myCondition = true;

//Operators
//Not-Operator, negates true to false (!true)

//myCondition = myCondition; //myCondition = !myCondition; You can also negate it with this variant. So from true to false
myCondition = false || true && false;  //"or" Operator you can chain many together - true always has priority no. 1 here

//myCondition = true && true; // and Operator

//console.log(myCondition);  //console.log(!myCondition); The negation directly before the variable is also a possibility


myCondition =   45 == 45;  // (==) tests whether exactly the same, (45 == "45") but does not test whether the type is the same

myCondition =   45 === "45"; //false
myCondition =   45 === 45; //true


//console.log(myCondition);


myCondition =   45 > 123;   // greater than

myCondition =   45 >= 45;  // greater than or equal to



myCondition =   45 !== "45";
myCondition =   45 !== "45";



console.log(myCondition);