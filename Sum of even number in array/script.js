// Use a for loop to iterate through an array and find the sum of even numbers.


let array = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

function sumOf(){
for(let i = 1; i <= array.length; i++){
    if(i % 2 === 0){
       sum += i;
    }
}
console.log("The sum of all even numbers are " + sum);
}
sumOf();