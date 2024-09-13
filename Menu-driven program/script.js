// Use a do-while loop to create a menu-driven program that allows the user to choose different options.

let choice = parseInt(prompt("Menu:\n1. Pepsi\n2. Coco-Cola\n3. Sprite\n4. Mountain Dew\n5. Exit"));

do{
     
     if(choice == 1){
        console.log("pepsi");
     }else if(choice == 2){
        console.log("cococola");
     }else if(choice == 3){
        console.log("sprite")
     }else if(choice == 4){
        console.log("Mountain Dew");
     }
     choice = parseInt(prompt("Menu:\n1. Pepsi\n2. Coco-Cola\n3. Sprite\n4. Mountain Dew\n5. Exit"));
}while(choice !== 5);
console.log("Your order is conplete!");