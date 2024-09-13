// Use a for loop to check if a string is a palindrome.
let string = "madam";
let len = string.length;
 
for(let i = 0; i<len /2; i++){
    if(string[i] !== string[len - 1 - i]){
        console.log ("it is not a palindrome");
    } else{
        console.log("it is a palindrome");
    }
}



