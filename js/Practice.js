var a = 9; //initialized
var a; //uninitialized

a = + 1;

var myVar = 10;
myVar = myVar +/- 1; //incrementing
myVar ++; //another way of incrementing, it applies to decrementing as well.
myVar --;

var remainder;
remainder = 11 % 3; //remainder assignment helps to determine the remainder of a fraction. like here, the answer is 2!
/*ODD/EVEN:*/ remainder = 11 % 2; // using remainder of a number devided by 2 is a great way to determine if a number is ODD or EVEN.

var b = 3;
b = b + 2; "or"
b += 2; //This is another way of adding a number to a variable and set the new value for our variable. OR:
b -= 2; 
b *= 2;
b /= 2;

// using backslash "\" which is called escape character here is a way to apply some changes to our string. for ex, :

var myString = "I am a \"double quoted\" string inside \"double quotes\"" // this string will be shown like this:..... "I am a "oduble qouted" string inside "double qoutes"
// you can also use single qoutes or ` character if you need to use double qoutes or vice versa...'<a href="http://www.example.com" target="_blank">Link</a>'

/*Escape codes:
//Code outputs:
\' single quotes
\" double quotes
\\ backslash  --> we use double backslash so JS knows that we are not trying to escape any character.
\n newline
\r carriage return
\t tab
\backspace
\f from feed
*/

var ourStr = "I come first." + " I come second" // ==>  "I come first. I come second." this technique used to concatenate strings.
var ourStr = "I come first";
ourStr += "I come second"; //another way of adding a string to an already existing string!

var myName = "Martin";
var myStr = "Hello, my name is " + myName + ", How are you?" // the result will be: Hello my name is Martin, How are you?

var myadjective = "Awesome"
var myString = "Coding is "

myString += myadjective; //here is a good example of updating the value of your string using string concatenation.


var firstNameLength = 0;
var firstName = "Martin";
var firstLetterOfFirstName = "";
var lastLetterOfFirstName = "";
var nthLetterOfFirstName = "";

firstNameLength = firstName.length; // now the value of firstNameLength will show 6.
firstLetterOfFirstName = firstName[0]; //brackets with a number inside refer to the index value of a character inside a string or list or array. "0" is always the first and then 1, 2, 3, ...
lastLetterOfFirstName = firstName[firstName.length - 1]; //it shows the very last character of the string.
nthLetterOfFirstName = firstName[firstName.length - n]; //to find the Nth to the last character of a string or a list.

var myStr = "Jello World";
myStr[0] = "H"; // this will not fix or replace the character, BECAUSE STRINGS ARE IMMUTABLE. means you can replace the whole string but not just a character from it.
myStr = "Hello World" // would fix the issue here for ex.


//A simple funtion:
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb);
var result = ""
result += "The " + myNoun + " " + myAdjective + " " + myVerb + " to the store " + myAdverb + ".";
return result;
console.log(wordBlanks("dog", "big", "ran", "quickly")); //here is the way to preview the result and also pay attention that our  function requires 4 attribute to run and we passed them in our request!


var ourArray = [["Martin", 35], ["Sahba", 36]]; // nested Arrays example.
var myArray = ourArray[0] //here we added the first index to our new array called myArray by indexing technique.
ourArray[1][0] = 24; // we are replacing the first index of second array in our nested array with number 24. 
var ourArray = ["john", 23, 30, 70, "Banana"];

ourArray.push("happy") /* or */ 
ourArray.push(["Mesbah", 12]); // these are some ways to add a value or another array into our array. in this case our array look like: var ourArray = ["john", 23, 30, 70, "Banana", ["Mesbah", 12]];


removedFromMyArray = ourArray.pop(); //this assignment pops the very last item out of the array (either one single item or a whole array.) result: ourArray = ["john", 23, 30, 70, "Banana"]

// ***.push() & .pop() are opposite ***

ourArray.shift(); // it removes the first item from our array/list. PAY ATTENTION THAT REMOVING AN ITEM USING THE SHIFT METHOD, WILL CHANGE THE INDEXING OF THE WHOLE ARRAY!!
ourArray.unshift("new item", ["new array", 123]); // this will add two new items, one string and one new array to ourArray.

// ***.shift() & .unshift are opposite.***


function aSimpleFunction(a, b) {
    return (a - b); //or you can simply use console.log(a - b);
}
aSimpleFunction(5, 12); // answer here is -7


//***SCOPES***


//Example 1:

var myGlobal = 10;

function fun1() {

    oopsGlobal = 5; // **PAY ATTENTION HERE: IF YOU PLACE **VAR** BEHIND THE oopsGlobal, IT WILL BECOME LOCAL DEFINED IN FUN1, HOWEVER FORGETTING THAT LIKE HERE, MAKES IT A GLOBAL VARIABLE!!!

}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") { 
    output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();


//Example 2

var outerwear = "T-shirt";

function myOutfit() {
    return outerwear;
}
console.log(myOutfit()); //it returns T-shirt since function returns a global var defined before.

//however:
var outerwear = "T-shirt";

function myOutfit() {
    var outerwear = "sweater"
    return outerwear;
}
console.log(myOutfit()); //pay attention here that outerwear is being  used twice, one globaly and one localy and it's fine. in these cases, local variables inside override the global value.

function minusSeven(num) {
    return num - 7;
}
console.log (minusSeven(10)); // result will be 3 

var sum = 0;
function addThree() {
    sum = sum + 3;
}
// if you log this function out, you will get undefined result. undefined doesn't mean not valid. it means the value that you are looking for is not there. in this case we need to RETURN the value.

var sum = 0;
function addThree() {
    return sum += 3;
}

var changed = 0;
function change(num) {
    return (num + 5) / 3;
}
changed = change(10); //now the new value for changed is 5.

//STAND IN LINE:

function nextInLine(arr, item) {
arr.push(item);
    return arr.shift();
}
var testArr = [1, 2, 3, 4, 5];

console.log("before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
//console will show in this order: 
//Before: [1, 2, 3, 4, 5]
//1
//After: [2, 3, 4, 5 ,6]