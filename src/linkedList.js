// A linkedList class, in functional style, with the following properties:

// .head property, a linkedListNode instance
// .tail property, a linkedListNode instance
// .addToTail() method, takes a value and adds it to the end of the list
// .removeHead() method, removes the first node from the list and returns its value
// .contains() method, returns boolean reflecting whether 
//or not the passed-in value is in the linked list

// Note: don't use an array to do this.
var makeLinkedList = function(){
  var newLinkedList = {};
  newLinkedList.head = null;
  newLinkedList.tail = null;

  newLinkedList.addToTail = function(value){
    // tail should be most recent node
    newLinkedList.tail = makeNode(value);

    // if head doesn't exist, then set the head to tail (only for the first head)
    if(newLinkedList.head === null) {
      newLinkedList.head = newLinkedList.tail;
    }

    return newLinkedList.tail;
  };

  newLinkedList.removeHead = function(){
  };

  newLinkedList.contains = function(){
  };

  return newLinkedList;
};

var makeNode = function(value){
  var newNode = {};
  newNode.value = value;
  newNode.next = null;

  return newNode;
};
//console.log(makeNode(5));