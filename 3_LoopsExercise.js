// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let arr1 = []; // declare an array variable
let i = 1; // intialize index at 1 
while (i < 6) { // set condition for "while" loop
arr1.push(i); i++ // fill array w/ values every time you run the block
}

console.log(arr1); //test code


// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let arr2 = []; // declare an array variable
let j = 1 ; 
do { // unlike while loop, code block is excuted before condition is met
arr2.push(j); j++ // add the number into the array every time you run the block
} 
while (j < 6); // condition for do while loop

console.log(arr2) //test code

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let arr3 = []; // declare an array variable
for (let k = 1; k <= 5; k++) { // condtion iterate through 
arr3.push(k); // add number to array
}
console.log(arr3); //test code

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let arr4 = [];
let h = 10;

do { 
arr4.push(h); h-- 
} 
while (h > 0); 

while (h > 0) {
arr4.push(h);
  h--
}

for (let h = 10; h >= 1; h--){
arr4.push(h);
}

console.log(arr4)

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let arr5 = []; 
let g = 7 ; // intialize variable at 7

do { 
arr5.push(g); g++ 
} 
while (g <= 27); 

while (g <= 27) {
arr5.push(g);
  g++
}

for (let g = 7; g <= 27; g++){
arr5.push(g);
}

console.log(arr5)


// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.


let arr6 = [];
let f = 10 ; // intialize variable at 10 and add 10 up stopping at 100

do { 
arr6.push(f); f+= 10 
} 
while (f <= 100); 

while (f <= 100) {
arr6.push(h);
  f+= 10
}

for (let f = 10; f <= 100; f+= 10){
arr6.push(f);
}

console.log(arr6)

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// let counterFour = 1;
// while (counterFour < 2)  /* the condition for loop is already true, code will iterate through forever) */
//   console.log("HELP ME!");
//   counterFour--;


let counterFour = 1;
while (counterFour < 0)  
  console.log("HELP ME!");
  counterFour--;


// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let arr8 = []; // declare an array variable
let myVariable = 4 // 3 is actually my fav number but i had to change it to 4 lol for next assignment

for (let e = 0; e <= myVariable; e++) { // iterate using for loo[]
arr8.push(e); // add number to array 
}

console.log(arr8); //test code

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

function myfavoriteNumber(number) {

  let myfavoriteVariable =  4
  
for (let o = 0; o <= 100; o++) { 
  if (o == myfavoriteVariable){
return o + " is not my favorite number!" 
} else {
return o + " not my favorite number"
}
}
}

console.log(myfavoriteNumber(0)); //test code

// re did excercise not using a function

let myfavoriteVariable2 =  4
  
for (let o = 0; o <= 100; o++) { 
  if (o == myfavoriteVariable2){
console.log(o + " is not my favorite number!"); 
} else {
console.log(o + " not my favorite number");
}
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// The format of for loops are most intuitive for me because the condition is written in one line, like step #1 in a recipe. However, I think do while loops are the most helpful becuase you have to figure the action you want excuted which is what I normally think about first when creating a loop. 

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++ ) { //complete for loop for iteration
  console.log("counting down from", outsideCounter); //no changes
  
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) { // same for loop as excerise 4) 
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!

// Did you find this easy or hard? If you used references, which ones helped you? 

//This was defintely more challenging. Still only used handwritten notes from text Learn JavaScript Visually & Copied from Code Samples on Techtonica GitHub. 

// Please answer in a comment below.