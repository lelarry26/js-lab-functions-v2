//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/
/////////////////////////////////////////////  WRITE YOUR CODE BELOW!!!  //////////////////////////////////////

//#####################################Hello, you!

//PUT YOUR FUNCTION HERE!
// function hello(name){
//    console.log("Hello, " + name);
// }

// hello("Mustache"); // Youre calling the hello function 

//PROMPT

//#####################################Hello, you! Part 2 + RJ's example
//CALL YOUR FUNCTION
// const namePrompt = prompt("What is your name?");
// function hello(name){
//   if(name == undefined){   
//     console.log("Hello, world!");
//   } else {
//     console.log("Hello, " + name);
//   }
// }
// hello(namePrompt); //Solution
//--------------------------------------------------Example
// const nameRJ = 'rj';
// const namePrompt2 = prompt("What is your name 2?");
// let nameLarry;
// hello(namePrompt); // 'Liz' - Hello, Liz'
// hello(nameRJ); // 'Hello, rj'
// hello(namePrompt2); // 'Denise' - Hello, Denise'
// hello(nameLarry); // 'Hello, world!'
//--------------------------------------------------Example
//#####################################Madlib

// function madlib(name, subject){
//   return name + "'s favorite subject in school is " + subject;
// }
// let studentsFavSubject = madlib('Larry', 'Chemistry');
// console.log(studentsFavSubject);

//#####################################Tip Calculator
// const askService = prompt("How was your service tonight?"); // askService = good, fair or poor
// const askBill = prompt("How much is the bill"); // askBill = a number

// const askService2 = prompt("How was your service tonight?"); 
// const askBill2 = prompt("How much is the bill"); 

// function tipAmount(bill, service){

//   let goodService = Number(bill) * 0.20;
//   let fairService = Number(bill) * 0.15;
//   let poorService = Number(bill) * 0.10;
  
//   if(service === "good"){
//     return "You should tip this much for good service:" + goodService;
//   }else if(service === "fair"){
//     return "You should tip this much for good service:" + fairService;
//   }else if(service === "poor"){
//     return "You should tip this much for good service:" + poorService;
//   }
// }

// console.log(tipAmount(askBill, askService));

/////////////////RJ Walkthroughs

// function multiplyByFive(userInput){
//   return userInput * 5;
// }

// for(let i = 1; i < 5; i++){
//   console.log(multiplyByFive(i));
// }

//i = 1 return = 5 
//i = 2 return = 10
//i = 3 return = 15
//i = 4 return = 20

////////////////RJ Walkthroughs

// function multiplyByFive(userInput, shouldRun){
//   if(shouldRun == true){
//     return userInput * 5;
//   }else{
//     return userInput;
//   }
// }

// console.log(multiplyByFive(8, true)); // 40
// console.log(multiplyByFive(8, false)); // 8
// console.log(multiplyByFive(4, true)); // 20
// console.log(multiplyByFive(3, true)); //15
// console.log(multiplyByFive(4, undefined)); // 4
// console.log(multiplyByFive(10, 'true')); // 10
// console.log(multiplyByFive(true, 10)); // true