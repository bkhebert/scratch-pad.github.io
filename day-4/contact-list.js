// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
  /*
I:takes in 3 values
O: an object that contains the values as keys
C:
E:
*/  
//initialize an object
var object = {};
// assign the object an id key value
object.id = id;
//a first name key value
object.nameFirst = nameFirst;
//and a last name key valie
object.nameLast = nameLast;
//return the object
return object
} 
//splice method might be used on this
    /*
I: a value
O: an object that manages the contact list
C:  1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:   
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
E: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */

    //initialize an empty array named contacts that will hold all contacts
    var contacts = [];
    //return an object that has a list of different key pair functions that will edit the list
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //create a function that will take in a contact object
        addContact: function(contact){
            //add the contact object to the contacts array
            contacts.push(contact)
        }, //the function 
        findContact: function(fullName){
            //iterate through every index in the contacts array
            for(var i = 0; i < contacts.length; i++){
                //check if the fullname matches the string of the first and last name  concatenated together, include the space]
                if (fullName === contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast']){
                // return the contacts object that matches the fullname input
                return contacts[i];
                } 
            }
        }, //create a function that removes a contacts
        removeContact: function(contactObject){
            //iterate through every index in the contacts array
            for(var i = 0; i < contacts.length; i++){
                //if check if the input object matches any object in the contacts array
                if (contactObject === contacts[i]){
                //remove 1 value starting at the index where the contact matches
                 contacts.splice(i, 1);
                } 
            }
        },
        //create a function that prints all contact names
        printAllContactNames: function(){
            //declare a variable that is an empty string
            var listAllOfThem = '';
            //start a loop that starts at the 0 index, ends at the length of the contacts array, incrementing by one
            for(var i = 0; i < contacts.length; i++){
                if ( i !== 0){//if the index is not 0 aka the first in the list
                listAllOfThem += '\n' //create a new line
                listAllOfThem += contacts[i]['nameFirst'];//input the first name
                listAllOfThem += ' ';//a space
                listAllOfThem += contacts[i]['nameLast'];//and a last name string
                } else {// if this is not the case, do the same thing without creating a new line
                listAllOfThem += contacts[i]['nameFirst'];
                listAllOfThem += ' ';
                listAllOfThem += contacts[i]['nameLast'];
                }
            }
            //return a list of all the contacts
            return listAllOfThem;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}