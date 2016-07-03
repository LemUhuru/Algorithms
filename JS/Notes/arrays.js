'use strict';

// Ch 2: Arrays: Notes from the book: Learning JavaScript Data Strcutures & Algorithms.

// Creating and initializing arrays

var daysOfWeek = new Array(); // Defines an empty array.
var daysOfWeek = new Array(7); // Defines a new array of length 7.
var daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
'Friday', 'Saturday'); // Defines a new array with existing elements.

// the New keyword is not best practice for creating an array in JS
// use empty brackets as follows:

var daysOfWeek = [];
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
'Friday', 'Saturday']

console.log(daysOfWeek.length); // return length of array.

for(var i=0; i<daysOfWeek.length; i++){
  console.log(daysOfWeek[i]);
}

// Starting Fibonacci Sequence has no 0
var fibonacci = [];
fibonacci = [1] = 1;
fibonacci = [2] = 1;

// Create fibonacci sequence up to 20
for(var i=3; i < 20; i++){
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

// Output fibonacci sequence
for(var i = 1; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}


// Adding and removing elements from arrays
// In JS, Arrays are mutable objects.

var numbers = [0,1,2,3,4,5,6,7,8,9]; // Create array of elements 0-9
numbers[numbers.length] = 10; // Add new element to end of array
numbers.push(11); // Use push method to add new element to end of array
numbers.push(12,13); // Use push method to add multiple elements to end of array.

// Loop to shift all elements in array to the right.
for(var i=numbers.length; i > = 0; i--){
  numbers[i] = numbers[i-1];
}

numbers[0] = -1; // Add element -1 to the first position in array.


numbers.unshift(-2); // unshift() inserts elements into the start of the array
numbers.unshift(-4, -3);

numbers.pop(); // remove element from end of array.

// Below we overwrite the initial element and move the remaning over to the left.
for(var i=0; i<numbers.length; i++){
  numbers[i] = numbers[i+1];
}

numbers.shift(); // shift() is used to remove the initial element.

// push() and pop() represent LIFO in modeling a Stack data structure.
// shift() and unshift() represent FIFO in modeling a Queue data structure.


// splice() is used to randomly access elements for deletion.
// Below the splice method removes 3 elements following index 5 in the array.
numbers.splice(5,3)

// the splice() method is used to insert elements (2,3,4) after index 5.
// the second argument indicates how many elements to remove. In this case 0.
numbers.splice(5,0,2,3,4);

// Two-dimensional and multi-dimensional arrays.

// Primitive method for storing temperatures over two days.
var averageTempDay1 = [72, 75, 79, 79, 81, 81];
var averageTempDay2 = [81, 79, 75, 75, 73, 72];

// More efficient approach to storing temperatures throughout day.
var averageTemp = [];
averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,72];

//day 1
averageTemp[0] = [];
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;

//day 2
averageTemp[1] = []
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 72;


// Output the matrix above
function printMatrix(myMatrix){
  for (var i = 0; i <myMatrix.length; i++) {
    for (var j = 0; j < myMatrix[i].length; j++) {
      console.log(myMatrix[i][j]);
    }
  }
}

printMatrix(averageTemp);

// 3x3 Matrix

var matrix3x3x3 = [];
for (var i=0; i<3; i++){
  matrix3x3x3[i] = [];
  for (var j=0; j<3; j++){
    matrix3x3x3[i][j] = []
    for (var z=0; z<3; z++){
      matrix3x3x3[i][j][z] = i+j+z;
    }
  }
}

// Output 3x3 matrix above.

for (var i=0; i<matrix3x3x3.length; i++){
  for (var j=0; j<matrix3x3x3[i].length; j++){
    for(var z=0; z<matrix3x3x3[i][j].length; z++){
      console.log(matrix3x3x3[i][j][z]);
    }
  }
}


// References for JavaScript Array Methods.

// Method - concat() Joins multiple arrays and returns a copy of the joined arrays.
// Method - every() Calls a function for every element of the array until false is returned.
// Method - filter() Creates an array with each element that evaluates to true in the function provided.
// Method - forEach() Executes a specific function on each element of the array.
// Method - join() Joins are array elements into a string.
// Method - indexOf() Searches the array for specific elements and returns its position.
// Method - map() Creates a new array with the result of calling the specified function on each element of the array.
// Method - reverse() Reverses the array so the last items become the first and vice versa.
// Method - slice() Returns a new array from the specified index.
// Method - some() Passes each element through the supplied function until true is returned.
// Method - sort() Sorts the array alphabetically or by the supplied function.
// Method - toString() Returns the array as a string.
// Method - valueOf() Like the method toString(), returns the array as a string.
// Method - reduce() accepts a functional param with 3 arguements (previous, current, index)
// - returns a summation of all the elements within the array.


// Iterator Functions

// isEven function outputs a param x, and return true or false if the param is a multiple of 2.
var isEven = function(x) {
  // returns true if x is a multiple of 2.
  console.log(x);
  return (x % 2 == 0) ? true : false;
};

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; // Define array of 15 elements.

numbers.every(isEven); // Uses the every() method to iterate over array until function returns False.
numbers.some(isEven); // Same as every() only stops iteration when function returns True.

// We use the forEach() function to iterate over array for every element, returning
// True or False if the param is a multiple of 2 or not.
numbers.forEach(function(x){
  console.log(x%2 == 0);
});

var myMap = numbers.map(isEven); // map() produces similar output to the function above.

var evenNumbers = numbers.filter(isEven); // filter() accepts a function as a param and returns only output that returns True.
// In this case the values of numbers that meet the Truth condition in isEven() will be returned as an array in evenNumbers.

// reduce() returns a summation of all the elements within the array.
// the return value here is: 120.
numbers.reduce(function(previous, current, index){
  return previous + current;
});


// Searching & Sorting

numbers.reverse(); // Here we reverse the order of the numbers array.
// => [15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
numbers.sort(); // Here we use sort() to place the array in numerical order.
// => [1,10,11,12,13,14,15,2,3,4,5,6,7,8,9]

// Which fails because the sort() method sorts the elements lexicographically,
// and assume all elements are strings.

// The sort method accepts a functional argument that can be used for custom sorting.
// the Functinal param below accepts 2 input a and b as elements from the array and compare them both.
// if a is larger than b, then a positive 1 is returned, -1, if its smaller, and 0 if equal.
// These return values (-1,0,1) determine how each element is sorted.
numbers.sort(function(a,b){
  return a-b;
});
