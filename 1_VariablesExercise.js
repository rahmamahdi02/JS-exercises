//Week1 - Variables

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Data Types and Variables

// Exercise 1. Simply declare a variable named 'emptyVariable'

var emptyVariable;

// Exercise 2. Declare a variable called 'myName'

var myName;


// Exercise 3. Assign your name as the value for 'myName'

var myName = "Rahma";


// Exercise 4. Declare a variable called dreamDestination and give it the value
// of what your dream vacation destination is.

var dreamDestination = "Zanzibar";

// Exercise 5. Make the following variables and assignments
// - a variable called num1 with a value greater than 1 and less than 10

// var num1 = 3; 

// - a variable called num2 with a value of greater than or equal to 1 and less
// than or equal to 10

// var num2 = 1;

// Exercise 6. Write a comment below explaining the difference between the rules
// for num1 and num2 from Exercise 5. What numbers would be valid values for
// num2 but not num1?


/* 

So, the rule for num1  includes values 2-9, by setting parameters as greater than or less than, another way of wording this is "variable called num2 with a value of greater than or equal to 2 and less
than or equal to 9. While terms for num2 allows for intergers between 1-10 due to the claude "than or equal".

*/

// Exercise 7. Now we will try some addition.

// a. Assign the the values of 4 and 6 to num1 and num2, respectively.
let num1 = 4;
let num2 = 6;

// b. Make a new variable called 'theSum', and use 'num1' and
// 'num2' to assign its value using the "+" operator.

let theSum = num1 + num2;
console.log(theSum);

// Exercise 8. Now we will try some multiplication.
// Make a new variable called 'theProduct', multiply num1 and num2 and assign
// the resulting value to 'theProduct'.

let theProduct = num1 * num2;
console.log(theProduct)

// Exercise 9.
// Make a new variable called 'statement' and using 'myName' and
// 'dreamDestination' and the concatenation method of your choice, make the
// value of statement to be:
// "Hi, my name is <your name>, and I can't wait to visit <your destination>!"

var myName = "Rahma"
var dreamDestination = "Zanzibar"

let theStatement = "Hi, my name is" + " " + myName + ", and I can't wait to visit" + " " + dreamDestination + "!"

console.log(theStatement);

// *NOTE* For the following exercises, put your answers in the line below
// the description of each exercise. For example, below a prompt, you may see:
// let myAnswerForExercise10= "";
// If your answer is "foo", then fill in the line to be:
// let myAnswerForExercise10 = "foo";

// Exercise 10. What is the data type of the value stored in 'dreamDestination',
// place your answer in the quotes below:

console.log(typeof "Zanzibar") // output " String"
const myAnswerForExercise10 = "String";

// Exercise 11. What is the data type of the value stored in 'product',
// place your answer in the quotes below:

console.log(typeof 24)
const myAnswerForExercise11 = "number";

// Exercise 12. What do you think the value of emptyVariable is?
// Place your answer below:

const myAnswerForExercise12 = "undefined"; //declared but no value intialized therefore I can't use typeof method

// Exercise 13. If
const A = "R";
const B = 1;
const C = 4;
const D = "D";

// What is the value of B + C

let sumExercise13 = B + C;
console.log(sumExercise13);

const myAnswerForExercise13 = "5";

// Exercise 14 What is the value of
// A + "n" + D
let sumExercise14 = A + "n" + D;
console.log(sumExercise14);

const myAnswerForExercise14 = "RnD";

// Exercise 15 What is the value of
// A + B * 2 + D + C / 2:

let sumExercise15 = A + B * 2 + D + C / 2;
console.log(sumExercise15)

const myAnswerForExercise15 = "R2D2"; //

// Exercise 16 What is the value of A * B

let sumExercise16 = A * B;
console.log(sumExercise16);

const myAnswerForExercise16 = "NaN"; //Javascript isn't able to perform operations on different data types.


// Exercise 17 What is the value of true || false
const myAnswerForExercise17 = "true"; // 
console.log(true || false);

// Exercise 18 What is the value of 1 === "1"

console.log(1 === "1");
const myAnswerForExercise18 = "false"; //  differet data types therefore doesn't pass strictly equal operator despite being equal

// Exercise 19 What is the value of 1 == "1"
console.log(1 == "1"); // Equal to operator olnly evalutes if the operands are equal
const myAnswerForExercise19 = "true";

// Exercise 20 What is the value of 1 < 1

console.log(1 < 1 );
const myAnswerForExercise20 = "false"; // the above mathematical is false so result is boolean "false"

// Exercise 21 What is the value of 1 < 2 < 3

console.log(1 < 2 < 3);
const myAnswerForExercise21 = "true"; // the above mathematical is true so result is boolean "true" 

// Exercise 22 What is the value of 2 < 1 < 3

console.log(2 < 1 < 3);
const myAnswerForExercise22 = "true"; // the above mathematical is true when assesed from left to right  so result is boolean "true"

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?

// I found this easy. I did not use references.
// Please answer in a comment below.
//

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.