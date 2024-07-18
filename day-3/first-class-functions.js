// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /*
I: the input is the base, which can be a string or number
O: the output will be a function
C:
E: the function will test if any given value is greater than than the base
*/
   //return a function that takes in a given value
   return function isItGreaterThan(givenvalue) {
//check if the given value is greater than the base
    if(givenvalue > base){
    //return true if it is greater
    return true
//if this is not the case    
        } else {
//return false
            return false
            }
}
    //side note: i am sorry my code looks rageddy like this; i forgot to add a single bracket and things got out of control. will fix later
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    /*
I: a string or a number
O: a function that checks if the input is less than any given string/variable/char
C: must return a function
E:
*/
   //return a function
   return function(givenvalue2){
    //return a boolean of whether the given value is less than the base
    return givenvalue2 < base;
    
   }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    /*
I:a single character
O: a function
C:
E: the function will test if a given string starts with the character
*/
    //return a function
    return function testString(string){
        //check if the string starts with a character, upper or lowercase
        if( string[0] === toUpperCase(startsWith) || string[0] === toLowerCase(startsWith)){
            //return true
            return true
            //if this is not the case, return false
        } else {
            return false
        }

    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
   /*
I:a single character
O: a function
C:
E: the function will test if a given string ends with the character
*/  
     //return a function
     return function testString(string){
        //check if the string ends with a character, upper or lowercase
        if( string[string.length - 1] === toUpperCase(endsWith) || string[string.length - 1] === toLowerCase(endsWith)){
            //return true
            return true
            //if this is not the case, return false
        } else {
            return false
        }

    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
      /*
I:an array of strings and a function designed to modify a string
O:return an array of strings
C:
E: the array of strings must be modified by the function 'modify' parameter
*/ 
//create a new array that will collect all the strings
var modifiedStrings = [];
    //loop that iterates through strings array parameter
    for( var i = 0; i < strings.length; i++ ){
        //iterate through all strings of the array and push them into a new array
        modifiedStrings.push(modify(strings[i]));
    }
    //return the modified strings
    return modifiedStrings;
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    /*
I: an array of strings and a function designed to test the strings
O: a boolean
C:
E:
*/

//create a variable that indicates if the test is passed
var doIPass = true;
//loop that iterates through strings array parameter
for( var i = 0; i < strings.length;  i++ ){
    //check if any strings in the array fail the test
    if( test(strings[i]) !== true){
        //change the variable to false
        doIPass = false;
    } 
}
// return the variable
    return doIPass 

    
    
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}