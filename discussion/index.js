/*
  Functions
  Function in JS are lines/block of codes that tell our device /applicaton to perform a certain task wehn called invoked
  Functions are reusable peices of code with instructions whcih are used over and over again just so long as we can call/invoke them

  Syntax:
    Function functionName(){
      code block, the block of code will be executed once the function has been run/called/invoked
  }
*/

// function printName(){
//   console.log('My name is Marco');
// };

// Invoke Function - functionName()

// printName();
// printName();
//
// function showSum(){
//   console.log(7+7);
// }
//
// showSum();

// Note: Do not create functions with the same name

// Function with parameter and arguments
// a parameter acts a nemd variable/container that exist ONLY inside of the function. This is used as to store informatio or to act as a stand in or the contain the value passed into the function as an arguemnt
// function printName(name){
//   console.log(`My name is ${name}`);
// }
// When a function is invoked and data is passed, we call the data 'argument'
// in this invocation, 'Marco' is an argument passed into our printname function and is represented by the 'name' paraneter within our functionNamedata passed into the function: arguemnt
// representation of the argument within the function: parameter
// printName('Marco')
// printName('Franco')

// function displayNum(number){
//   console.log(number);
// }
// displayNum(123);

// function displayMessage(message){
//   console.log(message);
// }
//
// displayMessage('JavaScript is fun! I love CEU.')

// Mltiple parameters and arguemnts
//  a function can not oly receuve a single argument but it can also receive multiple arguemnts so long as t matches the number of parameters in the functions

// function displayFullName(firstName, lastName, age){
//   console.log(`${firstName} ${lastName} is ${age}`)
// }
// displayFullName('Marco', 'Montecillo', 20)

// return keyword
// return keword is used so that a function may return a value
// it also stops the process of the function any other instruction after the keuword will nnot be processed
function createFullName(firstName, middleName, lastName) {
  return `${firstName} ${middleName} ${lastName}`
  console.log("I will no longer run because the function's value or result has been returned")
}
// resukt if this function can be save into variable
// the resilt of a function without a return keuword will not save the result in a variable
let fullName1 = createFullName('Marco', 'Franco', 'Montecillo')
console.log(fullName1);

let fullName2 = createFullName('Marcy', 'Francy', 'Montecillo')
console.log(fullName2);
