// Use nested for loops to find prime numbers within a given range.

let range1 = 2;
let range2 = 10;
let factor = 0;
for(let i = range1; i <= range2; i++){
    factor = 0;

    for(let j = 1; j<=i; j++){
        if(i % j == 0){
            factor += 1;
        }   
      }
      if(factor == 2){
        console.log(i, " is a prime number");
      }
    }
