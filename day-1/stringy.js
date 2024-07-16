// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */



function length(string) {
    // YOUR CODE BELOW HERE //
/*
I: Function takes in a string
O: Function returns the length of the input string
C:
E:
*/
// return the length property of the input string
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   /*
   I: Function takes in a string
   O: Function returns the string in lowercase
   C:
   E:
*/
// convert parameter string to lowercase using toLowerCase method
return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
/*
   I: Function takes in a string
   O: Function returns the string in uppercase
   C: n/a
   E: n/a
*/
//returns parameter string in lowercase with toUpperCase method
return string.toUpperCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //

/*
   I: Function takes in a string
   O: Function returns the string in lowercase and with dashes  in place of the spaces
   C: 
   E:
*/
  //create a new string that is equal to the string parameter in lowercase
  var lowerCaseString = string.toLowerCase();
  
  //split up the lowercasedstring into an array using split. Each space creates a new index
  var splitString = lowerCaseString.split(" ");
  //join the array into a single string, using dashes to join each index 
  var dashedString = splitString.join("-");
  // return the dashed String
  return dashedString
}
/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
/*
I: A string and a character
O: A true or false valure
C:
E: Case insensitive
*/
//check to see if the first index of the string is equal to the character input in Uppercase
if (string[0] === char.toUpperCase()){
    //if the uppercase char matches, return true
    return true
    //check to see if the first index of the string is equal to the character input in Lowercase
} else if (string[0] === char.toLowerCase()) {
    //if the lowercase char matches, return true
    return true 
    //if the previous conditions are not true
} else {
    //return false
    return false
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
/*
I: Inputs a string and a single character
O: Outputs a true or false value
C: 
E: Check to see if the final character matches, case insensitive
*/
//Using an if statement to see if the last index of the string is equal to the character input in uppercase
if (string[string.length - 1] === char.toUpperCase()){
    // if the condition is true, return true
    return true
    //Check if lowercased character matches the final character in the string
} else if (string[string.length -1] === char.toLowerCase()){
    // if the character matches then return true
    return true
    //if none of the conditions are true
} else {
    //return false
    return false
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //



    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}