

// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// // Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// // IMPORTANT: Do not use the built in Object.keys() function!
// // Examples:
// // let obj = { a: 1, b: 2, c: 3 };
// // keys(obj); // ["a", "b", "c"]
// // let obj2 = { first: 'Matt', last: 'Lane' };
// // keys(obj2); // ["first", "last"]
// // let obj3 = {};
// // keys(obj3); // []

function keys(obj) { // declare function titled keys
  let newArr = []; // create new variable
  for (const key in obj) { // iterate using for loop 
    newArr.push(key) // use push method to add into newArr
  }
  return newArr;
}

// //test cases
console.log(keys({ a: 1, b: 2, c: 3 })); // ["a", "b", "c"]
console.log(keys({ first: 'Matt', last: 'Lane' })); // ["first", "last"]
console.log(keys({})); // []

// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!

function values(obj) { // declare a function with single parameter 
  let array1 = []; // declare new variable
  for (const value in obj) { // iterate through using loop
    array1.push(obj[value])// push into array1 using syntax obj[] to access value in array 
  }
  return array1;
}

// Test cases:
console.log(values({ a: 1, b: 2, c: 3 })); // [1,2,3]
console.log(values({ first: 'Matt', last: 'Lane', isDogOwner: true })); // ["Matt", "Lane", true]
console.log(values({})); // []

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!

function entries(obj) { // declare new function with single parameter
  let newArray = []; //create new variable to hold new string
  for (const key in obj) { // iterate through 
    newArray.push([key, obj[key]]) // push method accepts two paramters to access both key & value
  }
  return newArray;
}
// Test Cases
console.log(entries({ a: 1, b: 2, c: 3 }));
//log out => [["a",1], ["b",2], ["c",3]]
console.log(entries({ first: 'Matt', last: 'Lane', isDogOwner: true }));
// log out => [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
console.log(entries({})); // []

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

function pluck(arrayObj, matchKey) { //declare function which accepts two parameters, array of objects, and string
  let result = []; // create variable for new array
  for (let i = 0; i < arrayObj.length; i++) { // use for loop for arrays not objects 
    result.push(arrayObj[i][matchKey]); //push into array element, and matchKey 
  } //removed else, since test cases return undefined if there is no match found
  return result; //removed if condition as test cases show that the 
}
// Test Cases
console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }], 'name'))
// log out => ["Tim", "Matt", "Elie"]

console.log(pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }], 'isBoatOwner'))
//log out =>[true, false, undefined]

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.

function stringFromObject(obj) { // declare function whose parameter is an object
  let newArray = []; // declare variable to hold new string
  for (let key in obj) {
    newArray.push(`${key} = ${obj[key]}`); //referenced Udemy to use template literals for concatenation 
  }
  return newArray.join(", "); //Ruby showed that I could use join method to  returns a new string by concatenating all of the elements in an array
}

// Test Cases:
console.log(stringFromObject({ a: 1, b: '2' }));
// "a = 1, b = 2"
console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }));
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""



// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]


function minMaxKeyInObject(obj) { // declare a function that accepts an object as a paramter 
  const number = []; // declare function to hold new keys in new array labeled "Number"
  for (let key in obj) {
    number.push(key);  // use push method to add elements into new array "Number"
  }
  return [Math.min(...number), Math.max(...number)]; // Return array w/ following format: [lowestKey, highestKey] using a math.max & math.min method. Dana showed me I could return in one line.
}

// Test Cases:
console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }))
// [1, 10]
console.log(minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' }));
// [1, 4]