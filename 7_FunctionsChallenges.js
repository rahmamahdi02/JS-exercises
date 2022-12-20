// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'


function prepenedToString(string1, string2) { //create function that accepts 2 parameters
  
let prepEnd = string2 + string1; // create variable for new string
  return prepEnd; //return new string
 }
 console.log(prepenedToString("awesome", "very")) // veryawesome
console.log(prepenedToString("awesome", " ")) // added space before awesome


// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
// Examples:
// stringIncludes('awesome', 'e'); // --> true
// stringIncludes('awesome', 'z'); // --> false


function stringIncludes(string3, string4){ 
  
// use for loop to iterate through first string
for (let i = 0; i < string3.length; i++) {
 
 if (string3[i] === string4) {
  return true;
 }
}
  return false; // or return fasle
}

console.log(stringIncludes("awesome", "e")); //true
console.log(stringIncludes("nothing", "z")) // false

// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!

// Examples:
// stringLastIndexOf('awesome', 'e'); // --> 6
// stringLastIndexOf('awesome', 'z'); // --> -1

function stringLastIndexOf(string5, character) {
  
//   return the last index at which the character exists or -1 
  
 let lastIndex = -1; // default value if condition in for loop isn't met

for (let i = 0; i < string5.length; i++) {  
if (string5[i] === character) {  
  lastIndex = i; // assign index to lastIndex
 }   
}
return lastIndex; // needed to close out for loop 
}
  console.log(stringLastIndexOf('awesome', 'e'))
  console.log(stringLastIndexOf('awesome', 'z'))

// // Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// // The function should return a new string with the characters removed.
// // Examples:
// // removeFromString('Elie', 2, 2) // --> 'El'
// // removeFromString('Elie', 0, 1) // --> 'lie'
// // removeFromString('Hello School', 0, 6) // --> 'School'
// // removeFromString('Hello School', 2, 4) // --> 'HeSchool'
// // removeFromString('Hello School', 6, 400) // --> 'Hello '

function removeFromString(string6, num1, char){
  
// function is returning new string with specified numbers of characters removed. 
// iterate through using for loop
// slice as method to remove values.
// looping or no looping? starting at specidied point in string, removing certain charaters, 
// return new string
  
let newString = string6.slice(0, num1) + string6.slice(num1+char); 
  // new string is concatenation str.slice(0, num) + str.slice(num+char)
  // first slice is starting at 0 and cutting at index specified at num
  // second slice only 1 parameter it starts at num; then adds  
return newString;
  //
}
console.log(removeFromString('Hello School', 2, 4));
console.log(removeFromString('Hello School', 6, 400))

// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!
// Examples:
// let arr = [5, 10, 15, 20];
// indexOf(arr, 20); // --> 3
// let arr2 = [1, 2, 3, 4, 5];
// indexOf(arr2, 2); // --> 1
// let arr3 = [1, 2];
// indexOf(arr3, 10); // --> -1

function indexOf(array, num2) {

  for (let i = 0; i < array.length; i++) {         //if num matches found, return index 
    if (array[i] === num2) {
      return i; // removed unnesscary variables or code line
    }
  }
  return -1; //default case
}

let arr3 = [1, 2];
console.log(indexOf(arr3, 10));

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.
// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
// Examples:
// includes([1, 2, 3], 1) // --> true
// includes([1, 2, 3], 1, 2) // --> false
// includes([1, 2, 3], 6) // --> false
// includes({ 'a': 1, 'b': 2 }, 1) // --> true
// includes({ 'a': 1, 'b': 2 }, 'a') // --> false
// includes('abcd', 'b') // --> true
// includes('abcd', 'e') // --> false
// includes('abcd', 'a', 2) // --> false

function includes(collection, value, optionalIndex = 0) {

// Part 1. first determine if p3 i.e. index is provided or undefined, assign optional Index to 0
  
// if (optionalIndex === undefined) { optionalIndex = 0; }
// console.log(optionalIndex);

// typeof method so I can sort if p1 is array/string or it's of oject
if (typeof collection === "string" || collection instanceof Array) {


// Part 3. code block for looking an array/string
  for (let i = optionalIndex; i < collection.length; i++) { // changes i = 0  -> i = optionalIndex
    if (collection[i] === value) {
      return true;
    }
  }
}
  //If the collection is an object, the function searches for the value among values in the object; sin ce objects have no sort order, the third parameter is ignored.

//  Part 4.code block looking through ie. iterating through an object
  else if (typeof collection === 'object') {
  for (let item in collection) {
    if (collection[item] === value) {
      return true;
    }
  }
}
return false;
}

// Examples:
console.log(includes([1, 2, 3], 1)); // --> true
console.log(includes([1, 2, 3], 1, 2)); // --> false 
console.log(includes([1, 2, 3], 6)); // --> false
console.log(includes({ 'a': 1, 'b': 2 }, 1)); // --> true // 
console.log(includes({ 'a': 1, 'b': 2 }, 'a')); // --> false
console.log(includes('abcd', 'b')); // --> true
console.log(includes('abcd', 'e')); // --> false


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?

// Not as hard as last week. I tried my best to code without references. However for Exercise #4 and Exercise #6, I went to 2 pair programming sessions and worked with others and Tanya & Camille both provided ideas for solving the exercises.
  
// Please answer in a comment below.
//

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.