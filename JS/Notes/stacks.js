'use strict';

// Ch 3: Stacks
// A stack is an ordered collection of items that follows the LIFO (Last In First Out) principle.

function Stack() {
  // properties and methods go here.
  var items = []; // stores the element of the stack;

  // the push() method add elements to the end of the stack.
  this.push = function(e){
    items.push(e);
  };

  // the pop() method removes elements at the end of the stack and returns them.
  this.pop = function() {
    return items.pop();
  };

  // the peek() method returns the last element in the array without removing it.
  this.peek = function() {
    return items[items.length-1];
  };

  // the isEmpty() method returns True if the stack has no elements, False, if it does.
  this.isEmpty = function() {
    return items.length == 0;
  };

  // the size() method return the length of the stack.
  this.size = function(){
    return items.length;
  };

  // the clear() method empties the stack.
  this.clear = function() {
    items = [];
  };

  // the print() method outputs the stack in string form.
  this.print = function() {
    console.log(items.toString());
  };
}

var stack = new Stack(); // instantiate new stack object
console.log(stack.isEmpty()); // => True

stack.push(5); // add 5 to stack
stack.push(8); // add 8 to stack

console.log(stack.peek()); // => 8

stack.push(11); // add 11 to stack
console.log(stack.size()); // => 3
console.log(stack.isEmpty()); // => False

stack.push(15); // add 15 to stack

stack.pop(); // remove the top element from the stack.
stack.pop();

console.log(stack.size()); // => 2
stack.print(); // => 5,8


// Decimal to binary conversion.
// To convert a decimal number to a binary representation, we can divide
// the number by 2 (binary is base 2 number system) until the division
// result is 0.

// Example. (10/2 == 5, rem == 0) -> (5/2 == 2, rem == 1) ->  (2/2 == 1, rem == 0) -> (1/2 == 0, rem == 1)
// Deicam -> Binary == 10 -> 0 1 0 1

function divideBy2(decNumber) {
  var remStack = new Stack(), // instantiate stack to hold remainders of dec division.
  rem, // variable to store remainders
  binaryString = ''; // string var to display binary conversion.

  while(decNumber > 0) {
    rem = Math.floor(decNumber % 2); // use modulus operator get and store remainder.
    remStack.push(rem); // use push() to add rem to top of stack
    decNumber = Math.floor(decNumber/2); // divide decNumber by 2 and round downward to obtain int value for next iteration.
  }

  // loop pops out ever stack element and concatenates them to the binary string for display.

  while(!remStack.isEmpty()){
    binaryString += remStack.pop().toString()
  }

  return binaryString;
}

console.log(divideBy2(233));
console.log(divideBy2(10));
console.log(divideBy2(1000));
// JS does not distinguish integers from floating types, despite having a numerical data type.

function baseConverter(decNumber, base){
  var remStack = new Stack(),
  rem,
  baseString = '',
  digits =  '0123456789ABCDEF'; // string of alpha-numberic characters to permit hexadecimal conversions.

  while(decNumber > 0){
    rem = Math.floor(decNumber%base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber/base);
  }

  while(!remStack.isEmpty()){
    baseString += digits[remStack.pop()]; // index digits to return values 0-9 and A-F for numbers 10-15
  }

  return baseString;
}

console.log(baseConverter(100345, 2)); // output conversion from decimal to binary
console.log(baseConverter(100345, 8)); // output conversion from decimal to octal
console.log(baseConverter(100345, 16)); // output conversion from decimal to hexadecimal
