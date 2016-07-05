'use strict';

// Ch 4: Queues
// A Queue is an ordered collection of items that follows the FIFO principle.

function Queue() {
  var items = []; // array to store elements in our queue.

  // enqueue() add elements to the end of the queue.
  this.enqueue = function(e) {
    items.push(e);
  };

  // dequeue() removes and returns the first element of the queue.
  this.dequeue = function(e) {
    return items.shift();
  };

  // front() returns the first element of the queue but does not remove it.

  this.front = function() {
    return items[0];
  };

  // isEmpty() determines if the queue has any elements.
  this.isEmpty = function() {
    return items.length == 0;
  };

  // size() returns the length of the queue.
  this.size = function() {
    console.log(items.length());
  };

  // print() outputs the queue in string form.
  this.print = function() {
    return items.toString();
  };
}

var queue = new Queue(); // instantiate new queue object

console.log(queue.isEmpty()); // Check if the new object is empty.

// add john, jack, and camila to the queue
queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Camila');

queue.print(); // print all queue elements in string format.
console.log(queue.size()); // output the queue length.
console.log(queue.isEmpty())

queue.dequeue(); // remove and return first element of the queue.
queue.dequeue();
queue.print();


// The Priority Queue
// We have a Min Queue given 1 is given priority over greater values.
// Max Queues are the opposite of Min Queues.

function PriorityQueue() {
  var items = []; // array to store queue elements.

 // QueueElement constructor sets an element type and priority for ranking.
  function QueueElement (element, priority){
    this.element = element;
    this.priority = priority;
  }


  this.enqueue = function(element, priority){
    var queueElement = new QueueElement(element, priority); // instantiate new queue object

    if(this.isEmpty()){
      items.push(queueElement); // add queueElement to end of queue if it's empty.
    }
    else {
      var added = false;
      // use for loop to iterate over queue to check if the incoming element is has a lesser
      // priority than any existing elements. And if so, add the element to its position.
      for (var i = 0; i<items.length; i++){
        if (queueElement.priority < items[i].priority) {
          items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
       // if the incoming element has a greater priority than all existing elements
       // in queue add it to the end.
      if(!added){
        items.push(queueElement);
      }
    }
  };
  // other methods - same as default Queue implementation.
}


var priorityQueue = new PriorityQueue(); // instantiate new PriorityQueue object.
priorityQueue.enqueue("John", 2); // create new queue object with element 'John' @ priority 2.
priorityQueue.enqueue("Jack", 1);
priorityQueue.enqueue("Camila", 1);
priorityQueue.print(); // print queue in string format.


// The circular queue.
