// Use a for...of loop to iterate through a string and count the number of vowels

let string = prompt("Type a string");
let vowels = "aeiouAEIOU";
let count = 0;

for(let i of string){
   if(vowels.includes(i)){
    count++
   }
}
console.log(count);
