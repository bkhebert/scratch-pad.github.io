// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
/*
I:there is no input
O: numbers and strings
C: every multiple of 3 prints Fizz, every multiple of 5 prints Buzz, multiples of 3 AND 5 print FizzBuzz, you are not allowed to cry at any point
E: 
*/
//create a for loop that goes from 1 to 100.
for (var x = 1; x <= 100; x += 1){
    //create a conditional statement, if x is divisible by 3 and 5
    if ( x % 3 === 0 && x % 5 === 0 ){
        //print fizzBuzz
      console.log('FizzBuzz');
//else, if x is only divisible by 3    
    } else if ( x % 3 === 0 ) {
        //print "Fizz"
        console.log('Fizz');
// else, if x is only divisible by 5
       } else if ( x % 5 === 0 ) {
        //print "Buzz"
        console.log('Buzz');
        //else just print the number
       } else {
        console.log(x);
       }

    
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}