// Use a while loop to generate the Fibonacci sequence up to a given term.

let count = parseInt(prompt("Type a number"))
let num1 = 0;
let num2 = 1;
let sum;
let i = 0;

while(i < count){
    console.log(num1);
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    i++
}


