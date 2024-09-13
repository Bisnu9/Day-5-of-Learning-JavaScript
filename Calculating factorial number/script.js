// Use a for loop to calculate the factorial of a given number.



function factorial(){
   let input = parseInt(prompt("Type a number"));
   let multiple = 1;

   for(i = 1; i<=input;  i++){
    multiple = multiple * i;
   }
   console.log(multiple);
}
factorial();