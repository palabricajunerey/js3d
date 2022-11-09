//asdasdad

/* 
document.getElementById('demo1').innerHTML = "External JS ko";
asdsadasd
asdasdasda
*/
const a = 2;
let b = 3;
var c = 1;
var c = 2;
function changeBGcolor(){
    //exsecution
    // var a = 1;
    document.getElementById('sample').style.backgroundColor = 'grey';
    
   // document.getElementById('sample').innerHTML = "May gin liwat ko!";
}
// function add(num1, num2){
//     //execution
//     let sum;
//     sum = num1 + num2;
//     return sum;
// }

console.log("This is from console.log");

//variables
/*
var
let
const
*/
/*
Data types
string
bolean
number
array


*/
let name = "juan";
let num = 2;
let j = true;
let arr = [1, "text", true]

//   Basic Operators  
//   + Addition  
//   - Subtraction  
//   * Multiplication  
//   / Division   
//   % Modulus (remainder)  
//   ++ Increment numbers  
//   -- Decrement numbers

console.log(1+1);
console.log(1-1);
console.log(2*3);
console.log(2/3);
console.log(5%3);
console.log(6%2);
console.log(7%2);

// Comparison Operators  
// == Equal to  
// === Equal value and equal type  
// != Not equal  
// !== Not equal value or not equal type  
// > Greater than  
// < Less than  
// >= Greater than or equal to  
// <= Less than or equal to
// || OR
// && AND
// ? Ternary operator

console.log(1 == "1"); //true
console.log(1 === "1"); //false
console.log(3 > 2); //false
console.log("2 >= 2 is "+ (2 >= 2)); //false
console.log(1 < 2); //false
console.log(1 <= 2); //false

function myConfirmAlert(){
    let text;

    if(confirm("Are you sure you want to delete this user?") == true){
        text = "You  pressed OK button.";
    }else{
        text = "You pressed cancel button.";
    }
    document.getElementById('alert').innerHTML = text;
}