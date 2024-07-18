// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    /*
I: two integers
O: an array of integers
C: array must be in ascending or descending order depending on order of the parameters
E:
*/
    //initialize an empty array
   var outputArray = [];
   //compare the values of the parameters. if the start is less than the end
   if(start < end){
    //use a while loop that says while the start is less than the end
    while(start <= end){
        //push the value of the start parameter into the outputArray
        outputArray.push(start);
        //increment the start value by 1
        start++;
    }
   }// if the start value is not greater than the end we will use this
   else{
    //while start parameter value is greater than or equal to the end
    while(start >= end){
        //push the value of the start into the array
        outputArray.push(start);
        //decrease the start param by 1
        start--;
    } 
   }
   //return the outputArray 
    return outputArray;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}