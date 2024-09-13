// Use a while loop to create a guessing game where the user has to guess a random number

let user = parseInt(prompt("Guess a number between 1 to 50"));
let correct = 27;
let i = 0;
function guess(){
    while(user != correct){
      user = parseInt(prompt("Oops! try again from 1 to 50"));
      i++
    }
   console.log("Hurray! You won the game");
}
guess();
