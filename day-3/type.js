// #!/usr/bin/env node

'use strict';

const { isFunction } = require("lodash");

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
// your function needs to be able to distinguish between an object and null  
  // how can you figure out if something is an instance of the Date Object?
  //is the input i am dealing with an input of the Date Object? If it is, ensure it returns false  
    /*
I: a value
O: a boolean
C: 
E: if value is an array, return true, if not, return false
*/
//return the boolean result from using the built in 'Array.isArray()' method 
//to check if the input parameter is an array
   return Array.isArray(value)
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    /*
I: a value
O: a boolean
C:
E: check to see if the input is an Object intended as a collection,
taking into account that null, an Arraym and a Date, will all return as an object
*/

//check to see if object passes as an object with typeof() method, and fails Array.isArray, and is not equal to null, and that its constructor is an Object and not a Date
if (typeof(value) === "object" && Array.isArray(value) === false && value !== null && value.constructor === Object){
    //if this is the case, return true boolean
    return true;
//if this is not the case, return a false value
} else {
    return false;
}

    
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    /*
I: an input value
O: a boolean
C:
E: if it is an array or an object intended as a collection, return true
*/
//check if the input parameter is an array
if (Array.isArray(value)){
    //if it is an array return a True value
    return true;
    //if it is not an array, if object passes as an object with typeof() method, is not equal to null, and that its constructor is an Object and not a Date
} else if (typeof(value) === "object" && value !== null && value.constructor === Object){
    //if this is the case, return true boolean
    return true;
//if this is not the case, return a false value
} else {
    return false;
}
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    /*
I: a value
O: a string
C:
E: the string will describe the type of data the parameter is
*/
//check if the input value is an array
if (Array.isArray(value)){
    //return the string 'array'
        return 'array'
    //check if the input value is an object
    } else if (typeof(value) === "object" && Array.isArray(value) === false && value !== null && value.constructor === Object){
    // return the string 'object'   
        return 'object'
    //check if the input value is equal to null
    } else if (value === null){
    //return the string 'null'
    return 'null'
    //check if the input is equal to undefined
    } else if (value === undefined){
        //return the string 'undefined'
        return 'undefined'
        //check to see if the value is a date 
    } else if (value.constructor === Date){
        return 'date'
    } // if all previous tests fail, return a string of the type of value  
    else {
        return typeof(value)
    }
        
        
        // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}