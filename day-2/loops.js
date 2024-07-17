// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  /*
I: an array
O: the values at each index in the array
C:
E:
*/
  //create a for loop that has a variable that will go through the length of the array parameter, incrementing by one each time
for( var x = 0; x < array.length; x++ ){
  //log each index of the array value to the console
  console.log(array[x]);
  }
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  /*
I: an array
O: the values at each index in the array
C:
E: the values must be logged backwards
*/
  
//create a for loop that has a variable that starts with the value of the array's length - 1. stopping when reaching 0, and decreasing by 1 per loop
for( var i = array.length - 1; i >= 0 ; i-- ){
  // print each index of the array
console.log(array[i]);
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /*
I: an object
O: an array, the array contains the objects keys
C: must use return
E:
*/
 //initialize an array
var keysAsArray = [];
  //create a for in loop that loops through each key value pair in the object
for( var key in object){
  //push each key into the initialized array
keysAsArray.push(key);
}  
  //return the array
 return keysAsArray; 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  /*
I: an object
O: printed contents of the object keys
C: must use console.log
E:
*/
  //create a for loop that will iterate through each key in the object
for (var key in object){
  //print each key of the object to the console
 console.log(key); 
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /*
I: input is an object
O: return an array containing the objects values
C: must use return
E:
*/
//initialize an array
var arrayOfKeys = [];
//create a for in loop that will loop through the objects keys
  for ( var key in object){
//push each key value into the array
arrayOfKeys.push(object[key]);
  }
  //return the array of object keys
  return arrayOfKeys;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  /*
I: input is an object
O: printed values of the object
C: must use console.log()
E:
*/
  //create a for in loop that will iterate through every key in the object
  for( var key in object){
    //use console.log() to print the key values of the object
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}